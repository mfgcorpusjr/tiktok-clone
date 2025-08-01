import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

import KeyboardAvoidingScrollView from "@/components/common/KeyboardAvoidingScrollView";
import TextInput from "@/components/ui/TextInput";
import Button from "@/components/ui/Button";

export default function SignUpScreen() {
  return (
    <SafeAreaView className="flex-1 p-4 bg-white">
      <KeyboardAvoidingScrollView>
        <View className="flex-1 justify-center gap-10">
          <Text className="text-3xl font-bold text-center">
            Sign Up to TikTok
          </Text>

          <View className="gap-4">
            <TextInput placeholder="johndoe" />
            <TextInput
              placeholder="john@doe.com"
              keyboardType="email-address"
            />
            <TextInput placeholder="password" secureTextEntry />

            <Button text="Sign Up" />

            <Text className="text-gray-500 text-center">
              Already have an account?{" "}
              <Link
                className="text-black font-semibold"
                href="/sign-in"
                dismissTo
              >
                Sign In
              </Link>
            </Text>
          </View>
        </View>
      </KeyboardAvoidingScrollView>
    </SafeAreaView>
  );
}
