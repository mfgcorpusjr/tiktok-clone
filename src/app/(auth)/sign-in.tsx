import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

import KeyboardAvoidingScrollView from "@/components/common/KeyboardAvoidingScrollView";
import TextInput from "@/components/ui/TextInput";
import Button from "@/components/ui/Button";

import useSignIn, { Form } from "@/hooks/useSignIn";

export default function SignInScreen() {
  const {
    Controller,
    form: {
      control,
      handleSubmit,
      formState: { errors },
    },
  } = useSignIn();

  const handleSignIn = (form: Form) => {
    console.log(form);
  };

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
            <View className="gap-1">
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder="john@doe.com"
                    autoCapitalize="none"
                    keyboardType="email-address"
                  />
                )}
                name="email"
              />

              {errors.email && (
                <Text className="text-red-500">{errors.email.message}</Text>
              )}
            </View>

            <View className="gap-1">
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder="password"
                    autoCapitalize="none"
                    secureTextEntry
                  />
                )}
                name="password"
              />

              {errors.password && (
                <Text className="text-red-500">{errors.password.message}</Text>
              )}
            </View>

            <Button text="Sign In" onPress={handleSubmit(handleSignIn)} />

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
