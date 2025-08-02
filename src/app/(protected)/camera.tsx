import { View } from "react-native";

import Permission from "@/components/camera/Permission";
import Actions from "@/components/camera/Actions";

import useCamera from "@/hooks/useCamera";
import useMediaPicker from "@/hooks/useMediaPicker";

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

  const { media, pickMedia, discardMedia } = useMediaPicker();

  if (!permission) {
    return null;
  }

  if (!permission.granted) {
    return <Permission onPress={requestPermission} />;
  }

  const handleDiscard = () => {
    discardVideo();
    discardMedia();
  };

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
        media={media}
        onToggleFacing={toggleFacing}
        onRecordVideo={recordVideo}
        onPickMedia={pickMedia}
        onDiscard={handleDiscard}
      />
    </View>
  );
}
