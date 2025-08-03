import { useState } from "react";
import { Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";

type MediaTypes = ImagePicker.MediaType | ImagePicker.MediaType[] | undefined;

const useImagePicker = () => {
  const [media, setMedia] = useState<ImagePicker.ImagePickerAsset>();

  const pickMedia = async (mediaTypes: MediaTypes = "images") => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Denied", "Media Library permission is required");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });

    if (!result.canceled) {
      setMedia(result.assets[0]);
    }
  };

  const discardMedia = () => setMedia(undefined);

  return {
    media,
    pickMedia,
    discardMedia,
  };
};

export default useImagePicker;
