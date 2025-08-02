import { supabase } from "@/lib/supabase";
import { TablesInsert } from "@/types/database.types";

export const createVideo = async (form: TablesInsert<"videos">) => {
  const { data } = await supabase
    .from("videos")
    .insert(form)
    .single()
    .throwOnError();

  return data;
};
