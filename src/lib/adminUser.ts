import { cookies } from "next/headers";

const adminUser = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("jwtToken")?.value;

  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_BASE_URL + "/admin/profile",
      {
        method: "GET",
        credentials: "include",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    const id = await res.json();
    return id;
  } catch (error) {
    console.error("Authentication error", error);
  }
};
export default adminUser;
