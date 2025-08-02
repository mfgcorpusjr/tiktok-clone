import { View } from "react-native";

import Permission from "@/components/camera/Permission";
import Actions from "@/components/camera/Actions";

import useCamera from "@/hooks/useCamera";

export default function CameraScreen() {
  const {
    CameraView,
    permission,
    requestPermission,
    cameraRef,
    facing,
    isRecording,
    video,
    toggleFacing,
    recordVideo,
    discardVideo,
  } = useCamera();

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
        isRecording={isRecording}
        video={video}
        onToggleFacing={toggleFacing}
        onRecordVideo={recordVideo}
        onDiscardVideo={discardVideo}
      />
    </View>
  );
}
