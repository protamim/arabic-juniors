import React from "react";
import AdminLoginForm from "./components/AdminLoginForm";
import { getSessionAdminUser } from "@/lib/auth";
import { redirect } from "next/navigation";

const AdminLoginPage = async () => {
  const adminUser = await getSessionAdminUser();

  console.log("Admin User:", adminUser?.email);

  if (adminUser) {
    return redirect("/admin");
  }

  return (
    <React.Fragment>
      <AdminLoginForm />
    </React.Fragment>
  );
};

export default AdminLoginPage;
