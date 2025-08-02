import { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { twMerge } from "tailwind-merge";

import Permission from "@/components/camera/Permission";
import Actions from "@/components/camera/Actions";
import Preview from "@/components/camera/Preview";

import useCamera from "@/hooks/useCamera";
import useMediaPicker from "@/hooks/useMediaPicker";
import useCreateVideo from "@/hooks/useCreateVideo";

export default function CameraScreen() {
  const [uri, setUri] = useState("");

  const {
    CameraView,
    permission,
    requestPermission,
    cameraRef,
    facing,
    toggleFacing,
    isRecording,
    video,
    recordVideo,
    discardVideo,
  } = useCamera();

  const { media, pickMedia, discardMedia } = useMediaPicker();

  const {
    query: { mutate, isPending },
  } = useCreateVideo();

  const { bottom } = useSafeAreaInsets();

  useEffect(() => {
    if (video) setUri(video);
    else if (media) setUri(media.uri);
    else setUri("");
  }, [video, media]);

  if (!permission) {
    return null;
  }

  if (!permission.granted) {
    return <Permission onPress={requestPermission} />;
  }

  const handleSubmit = () => mutate(uri);

  const handleDiscard = () => {
    if (video) discardVideo();
    if (media) discardMedia();
  };

  const actionsContainerClass = twMerge(
    "absolute w-full flex-row items-center px-4",
    uri ? "justify-evenly" : "justify-between"
  );

  const actionsContainerStyle = { bottom: bottom + 24 };

  return (
    <View className="flex-1 bg-black">
      {uri ? (
        <Preview source={uri} />
      ) : (
        <CameraView
          style={{ flex: 1 }}
          ref={cameraRef}
          facing={facing}
          mode="video"
        />
      )}

      <View style={actionsContainerStyle} className={actionsContainerClass}>
        {isPending ? (
          <ActivityIndicator size="large" color="white" />
        ) : (
          <Actions
            uri={uri}
            isRecording={isRecording}
            onToggleFacing={toggleFacing}
            onRecordVideo={recordVideo}
            onPickMedia={pickMedia}
            onSubmit={handleSubmit}
            onDiscard={handleDiscard}
          />
        )}
      </View>
    </View>
  );
}
