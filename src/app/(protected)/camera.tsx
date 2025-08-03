import { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Permission from "@/components/camera/Permission";
import Actions from "@/components/camera/Actions";
import Preview from "@/components/camera/Preview";

import useCamera from "@/hooks/useCamera";
import useImagePicker from "@/hooks/useImagePicker";
import useCreatePost from "@/hooks/useCreatePost";

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

  const { media, pickMedia, discardMedia } = useImagePicker();

  const {
    query: { mutate, isPending },
  } = useCreatePost();

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

  return (
    <SafeAreaView className="flex-1 bg-black" edges={["bottom"]}>
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

      <View className="bg-black h-28 justify-center p-4">
        {isPending ? (
          <ActivityIndicator size="large" color="white" />
        ) : (
          <Actions
            uri={uri}
            isRecording={isRecording}
            onToggleFacing={toggleFacing}
            onRecordVideo={recordVideo}
            onPickMedia={() => pickMedia("videos")}
            onSubmit={() => mutate(uri)}
            onDiscard={() => {
              if (video) discardVideo();
              if (media) discardMedia();
            }}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
