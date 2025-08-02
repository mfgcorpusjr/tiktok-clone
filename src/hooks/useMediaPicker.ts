import { useState } from "react";
import { Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";

const useMediaPicker = () => {
  const [media, setMedia] = useState<ImagePicker.ImagePickerAsset>();

  const pickMedia = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Denied", "Media Library permission is required");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });

    if (!result.canceled) {
      setMedia(result.assets[0]);
    }
  };

  return {
    media,
    pickMedia,
  };
};

export default useMediaPicker;
