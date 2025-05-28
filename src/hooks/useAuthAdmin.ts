"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const useAuthAdmin = () => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");

    if (!token) {
      router.replace("/login");
      setLoading(false);
      return;
    }

    fetch(process.env.NEXT_PUBLIC_API_BASE_URL + "/admin/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          setAuthenticated(true);
        } else {
          localStorage.removeItem("jwtToken");
          router.replace("/login");
        }
      })
      .catch(() => {
        localStorage.removeItem("jwtToken");
        router.replace("/login");
      })
      .finally(() => setLoading(false));
  }, [router]);

  return { loading, authenticated };
};

export default useAuthAdmin;
