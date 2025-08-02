import { useState, useRef } from "react";
import { CameraView, useCameraPermissions, CameraType } from "expo-camera";

const useCamera = () => {
  const [permission, requestPermission] = useCameraPermissions();

  const cameraRef = useRef<CameraView>(null);

  const [facing, setFacing] = useState<CameraType>("back");
  const [isRecording, setIsRecording] = useState(false);
  const [video, setVideo] = useState("");

  const toggleFacing = () => {
    setFacing((current) => (current === "back" ? "front" : "back"));
  };

  const recordVideo = async () => {
    if (isRecording) {
      setIsRecording(false);
      cameraRef.current?.stopRecording();
      return;
    }

    setIsRecording(true);
    const video = await cameraRef.current?.recordAsync();
    if (video) {
      setVideo(video.uri);
    }
  };

  const discardVideo = () => setVideo("");

  return {
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
  };
};

export default useCamera;
