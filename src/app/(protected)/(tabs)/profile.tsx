import { View, Text, Button } from "react-native";

import useSignOut from "@/hooks/useSignOut";

export default function ProfileScreen() {
  const {
    query: { mutate },
  } = useSignOut();

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-xl font-bold">Profile Screen</Text>
      <Button title="Sign Out" onPress={mutate} />
    </View>
  );
}
