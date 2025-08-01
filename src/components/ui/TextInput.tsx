import { TextInput as RNTextInput, TextInputProps } from "react-native";
import { twMerge } from "tailwind-merge";

export default function TextInput({ ...rest }: TextInputProps) {
  const className = twMerge(
    "text-black p-4 border border-gray-300 rounded-lg",
    rest.className
  );

  return (
    <RNTextInput
      {...rest}
      style={[{ fontSize: 16 }, rest.style]}
      className={className}
    />
  );
}
