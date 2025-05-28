import { cookies } from "next/headers";

const adminUser = async () => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("jwtToken")?.value;

    if (!token) {
      console.log("No token found");
      return null;
    }

    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    console.log("Calling:", `${baseUrl}/admin/profile`);

    const res = await fetch(`${baseUrl}/admin/profile`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      console.log("Fetch failed:", res.status);
      return null;
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("adminUser error:", err);
    return null;
  }
};

export default adminUser;