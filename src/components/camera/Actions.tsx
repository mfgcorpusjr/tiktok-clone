import { View } from "react-native";
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
    <View className="flex-row items-center justify-evenly">
      <Ionicons name="close" size={50} color="white" onPress={onDiscard} />

      <Ionicons name="checkmark" size={50} color="white" onPress={onSubmit} />
    </View>
  ) : (
    <View
      className={`flex-row items-center ${isRecording ? "justify-center" : "justify-between"}`}
    >
      {!isRecording && (
        <Ionicons
          name="aperture"
          size={50}
          color="white"
          onPress={onPickMedia}
        />
      )}

      <Ionicons
        name={isRecording ? "stop-circle-outline" : "radio-button-on"}
        size={75}
        color={isRecording ? "red" : "white"}
        onPress={onRecordVideo}
      />

      {!isRecording && (
        <Ionicons
          name="camera-reverse"
          size={50}
          color="white"
          onPress={onToggleFacing}
        />
      )}
    </View>
  );
}
