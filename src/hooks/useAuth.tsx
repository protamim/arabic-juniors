"use client";

import React from "react";

const useAuth = () => {
  const [isAdminUser, setIsAdminUser] = React.useState(false);
  
  React.useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem("token");
      setIsAdminUser(!!token);
    };

    checkToken();

    window.addEventListener("storage", checkToken); // listen to localStorage changes
    return () => window.removeEventListener("storage", checkToken);
  }, []);

  return { isAdminUser };
};

export default useAuth;
