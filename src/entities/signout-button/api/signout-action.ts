"use server";

import { redirect } from "next/navigation";
import { AuthError } from "next-auth";
import { signOut } from "@/auth";

export async function signOutAction() {
  try {
    await signOut({ redirectTo: "/" });
  } catch (error) {
    if (error instanceof AuthError) {
      return redirect(`/error?error=${error.type}`);
    }
    throw error;
  }
}
