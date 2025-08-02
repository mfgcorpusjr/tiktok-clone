import { useState, useEffect } from "react";
import { View } from "react-native";

import Permission from "@/components/camera/Permission";
import Actions from "@/components/camera/Actions";
import Preview from "@/components/camera/Preview";

import useCamera from "@/hooks/useCamera";
import useMediaPicker from "@/hooks/useMediaPicker";

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

  const handleDiscard = () => {
    if (video) discardVideo();
    if (media) discardMedia();
  };

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

      <Actions
        uri={uri}
        isRecording={isRecording}
        onToggleFacing={toggleFacing}
        onRecordVideo={recordVideo}
        onPickMedia={pickMedia}
        onDiscard={handleDiscard}
      />
    </View>
  );
}
