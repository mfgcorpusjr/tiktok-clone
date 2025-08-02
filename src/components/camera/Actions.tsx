import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { twMerge } from "tailwind-merge";

type ActionsProps = {
  uri: string;
  isRecording: boolean;
  onToggleFacing: () => void;
  onRecordVideo: () => void;
  onPickMedia: () => void;
  onDiscard: () => void;
};

export default function Actions({
  uri,
  isRecording,
  onToggleFacing,
  onRecordVideo,
  onPickMedia,
  onDiscard,
}: ActionsProps) {
  const { bottom } = useSafeAreaInsets();

  const className = twMerge(
    "absolute w-full flex-row items-center px-4",
    uri ? "justify-evenly" : "justify-between"
  );

  return (
    <View style={{ bottom: bottom + 16 }} className={className}>
      {uri ? (
        <>
          <Ionicons
            name="close-circle-outline"
            size={50}
            color="white"
            onPress={onDiscard}
          />

          <Ionicons name="checkmark-circle-outline" size={50} color="white" />
        </>
      ) : (
        <>
          <Ionicons
            name="aperture"
            size={50}
            color="white"
            onPress={onPickMedia}
          />

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
      )}
    </View>
  );
}
