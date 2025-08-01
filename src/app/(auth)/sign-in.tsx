import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

import KeyboardAvoidingScrollView from "@/components/common/KeyboardAvoidingScrollView";
import TextInput from "@/components/ui/TextInput";
import Button from "@/components/ui/Button";

export default function SignInScreen() {
  return (
    <SafeAreaView className="flex-1 p-4 bg-white">
      <KeyboardAvoidingScrollView>
        <View className="flex-1 justify-center gap-10">
          <View className="gap-2">
            <Text className="text-3xl font-bold text-center">
              Sign In to TikTok
            </Text>
            <Text className="text-gray-500 text-center">
              Manage your account, check notifications, comment on videos, and
              more.
            </Text>
          </View>

          <View className="gap-4">
            <TextInput
              placeholder="john@doe.com"
              keyboardType="email-address"
            />
            <TextInput placeholder="password" secureTextEntry />

            <Button text="Sign In" />

            <Text className="text-gray-500 text-center">
              Don't have an account?{" "}
              <Link className="text-black font-semibold" href="/sign-up">
                Sign Up
              </Link>
            </Text>
          </View>
        </View>
      </KeyboardAvoidingScrollView>
    </SafeAreaView>
  );
}
