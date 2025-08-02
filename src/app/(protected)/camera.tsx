import { useState, useEffect } from "react";
import { View } from "react-native";

import Permission from "@/components/camera/Permission";
import Actions from "@/components/camera/Actions";

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
  } = useCamera();

  const { media, pickMedia } = useMediaPicker();

  useEffect(() => {
    if (video) setUri(video);
    else if (media) setUri(media.uri);
  }, [video, media]);

  if (!permission) {
    return null;
  }

  if (!permission.granted) {
    return <Permission onPress={requestPermission} />;
  }

  return (
    <View className="flex-1">
      <CameraView
        style={{ flex: 1 }}
        ref={cameraRef}
        facing={facing}
        mode="video"
      />

      <Actions
        uri={uri}
        isRecording={isRecording}
        onToggleFacing={toggleFacing}
        onRecordVideo={recordVideo}
        onPickMedia={pickMedia}
        onDiscard={() => setUri("")}
      />
    </View>
  );
}
