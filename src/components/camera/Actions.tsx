import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";
import { twMerge } from "tailwind-merge";

type ActionsProps = {
  isRecording: boolean;
  video: string;
  media?: ImagePicker.ImagePickerAsset;
  onToggleFacing: () => void;
  onRecordVideo: () => void;
  onPickMedia: () => void;
  onDiscard: () => void;
};

export default function Actions({
  isRecording,
  video,
  media,
  onToggleFacing,
  onRecordVideo,
  onPickMedia,
  onDiscard,
}: ActionsProps) {
  const { bottom } = useSafeAreaInsets();

  const className = twMerge(
    "absolute w-full flex-row items-center px-4",
    media || video ? "justify-evenly" : "justify-between"
  );

  return (
    <View style={{ bottom: bottom + 16 }} className={className}>
      {media || video ? (
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
