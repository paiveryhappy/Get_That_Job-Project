"use server";

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function register(formData: FormData) {
  const name = formData.get("name");
  const phone = formData.get("phone");
  const birthdate = formData.get("birthdate");
  const linkedin = formData.get("linkedin");

  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  console.log("=== Data", name, phone, birthdate, linkedin);

  const { data, error } = await supabase
    .from("professional information")
    .insert([{ name, phone, birthdate, linkedin }]);

  if (error) {
    console.log("found some error", error);
    return false;
  }

  console.log("Register successful!");
}
