"use server";
import { cookies } from "next/headers";

export async function getSessionAdminUser() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get("connect.sid")?.value;

  if (!sessionId) return null;

  // Send cookie to the backend to validate the session
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/admin`,
    {
      headers: {
        Cookie: `connect.sid=${sessionId}`,
      },
      credentials: "include",
    }
  );

  if (!res.ok) return null;

  const adminUser = await res.json(); // user object from session

  return adminUser;
}
