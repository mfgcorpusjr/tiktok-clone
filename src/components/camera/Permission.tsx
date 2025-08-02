import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import Button from "@/components/ui/Button";

type PermissionProps = {
  onPress: () => void;
};

export default function Permission({ onPress }: PermissionProps) {
  return (
    <View className="flex-1 justify-center items-center gap-4">
      <Ionicons name="camera-outline" size={100} color="black" />

      <View>
        <Text className="text-black text-xl font-semibold text-center">
          Camera Access
        </Text>
        <Text className="text-gray-500 text-center">
          Enable access to the camera to record videos.
        </Text>
      </View>

      <Button text="Allow" containerClass="w-40" onPress={onPress} />
    </View>
  );
}
