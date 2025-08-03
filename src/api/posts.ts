import { supabase } from "@/lib/supabase";
import { TablesInsert } from "@/types/database.types";

export const createPost = async (form: TablesInsert<"posts">) => {
  const { data } = await supabase
    .from("posts")
    .insert(form)
    .single()
    .throwOnError();

  return data;
};
