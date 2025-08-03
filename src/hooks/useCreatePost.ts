import { Alert } from "react-native";
import { router } from "expo-router";
import { useMutation } from "@tanstack/react-query";
import mime from "mime";

import * as StorageAPI from "@/api/storage";
import * as PostsAPI from "@/api/posts";
import useAuthStore from "@/store/useAuthStore";

const useCreatePost = () => {
  const user = useAuthStore((state) => state.user);

  const query = useMutation({
    mutationFn: async (uri: string) => {
      const fileResponse = await fetch(uri);
      const fileArrayBuffer = await fileResponse.arrayBuffer();

      const bucket = "uploads";
      const folder = "videos";
      const fileName = uri.split("/").pop();

      const data = await StorageAPI.uploadMedia({
        bucket,
        path: `${folder}/${fileName}`,
        file: fileArrayBuffer,
        contentType: mime.getType(uri)!,
      });

      const imageUrl = StorageAPI.getPublicUrl(bucket, data.fullPath);

      return PostsAPI.createPost({
        user_id: user?.id!,
        title: "Test title",
        uri: imageUrl,
      });
    },
    onSettled: (_, error) => {
      if (error) {
        Alert.alert("Error", error.message);
      }
      router.dismiss();
    },
  });

  return {
    query,
  };
};

export default useCreatePost;
