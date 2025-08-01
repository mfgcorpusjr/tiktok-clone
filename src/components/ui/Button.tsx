import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  ActivityIndicator,
} from "react-native";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  text: string;
  isLoading?: boolean;
  containerClass?: string;
  textClass?: string;
  loadingClass?: string;
} & TouchableOpacityProps;

export default function Button({
  text,
  isLoading,
  containerClass,
  textClass,
  loadingClass,
  ...rest
}: ButtonProps) {
  const _containerClass = twMerge(
    "bg-black h-12 px-2 rounded-lg justify-center items-center",
    `${rest.disabled ? "opacity-50" : "opacity-100"}`,
    containerClass
  );

  const _textClass = twMerge("text-lg text-white font-semibold", textClass);

  const _loadingClass = twMerge("text-white", loadingClass);

  return (
    <TouchableOpacity activeOpacity={0.7} {...rest} className={_containerClass}>
      {isLoading ? (
        <ActivityIndicator className={_loadingClass} />
      ) : (
        <Text className={_textClass}>{text}</Text>
      )}
    </TouchableOpacity>
  );
}
