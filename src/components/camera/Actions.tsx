import Ionicons from "@expo/vector-icons/Ionicons";

type ActionsProps = {
  uri: string;
  isRecording: boolean;
  onToggleFacing: () => void;
  onRecordVideo: () => void;
  onPickMedia: () => void;
  onSubmit: () => void;
  onDiscard: () => void;
};

export default function Actions({
  uri,
  isRecording,
  onToggleFacing,
  onRecordVideo,
  onPickMedia,
  onSubmit,
  onDiscard,
}: ActionsProps) {
  return uri ? (
    <>
      <Ionicons
        name="close-circle"
        size={100}
        color="white"
        onPress={onDiscard}
      />

      <Ionicons
        name="checkmark-circle"
        size={100}
        color="white"
        onPress={onSubmit}
      />
    </>
  ) : (
    <>
      <Ionicons name="aperture" size={50} color="white" onPress={onPickMedia} />

      <Ionicons
        name={isRecording ? "stop-circle-outline" : "radio-button-on"}
        size={100}
        color={isRecording ? "red" : "white"}
        onPress={onRecordVideo}
      />

      <Ionicons
        name="camera-reverse"
        size={50}
        color="white"
        onPress={onToggleFacing}
      />
    </>
  );
}
