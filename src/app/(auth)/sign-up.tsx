import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

import KeyboardAvoidingScrollView from "@/components/common/KeyboardAvoidingScrollView";
import TextInput from "@/components/ui/TextInput";
import Button from "@/components/ui/Button";

import useSignUp, { Form } from "@/hooks/useSignUp";

export default function SignUpScreen() {
  const {
    Controller,
    form: {
      control,
      handleSubmit,
      formState: { errors },
    },
  } = useSignUp();

  const handleSignUp = (form: Form) => {
    console.log(form);
  };

  return (
    <SafeAreaView className="flex-1 p-4 bg-white">
      <KeyboardAvoidingScrollView>
        <View className="flex-1 justify-center gap-10">
          <Text className="text-3xl font-bold text-center">
            Sign Up to TikTok
          </Text>

          <View className="gap-4">
            <View className="gap-1">
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder="johndoe"
                    autoCapitalize="none"
                  />
                )}
                name="username"
              />

              {errors.username && (
                <Text className="text-red-500">{errors.username.message}</Text>
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

            <Button text="Sign Up" onPress={handleSubmit(handleSignUp)} />

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
