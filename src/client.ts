import { createClient } from "@supabase/supabase-js";
import type { Database } from "../types_db";
import { auth } from "./auth";

export const createSupabase = async () => {
  const session = await auth();

  if (!session?.supabaseAccessToken) {
    throw new Error("인증되지 않은 사용자입니다.");
  }

  return createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? "",
    {
      global: {
        headers: {
          Authorization: `Bearer ${session.supabaseAccessToken}`,
        },
      },
    },
  );
};
