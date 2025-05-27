"use server";
import { cookies } from "next/headers";

export async function getSessionAdminUser() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get("jwtToken")?.value;

  if (!sessionId) return null;

  return sessionId;
}
