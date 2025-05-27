import React from "react";
import AdminLoginForm from "./components/AdminLoginForm";
import { redirect } from "next/navigation";
import adminUser from "@/lib/adminUser";

const AdminLoginPage = async () => {
  const admin = await adminUser();

  console.log("Admin User:", admin.success);

  if (admin.adminId) {
    return redirect("/admin");
  }

  return (
    <React.Fragment>
      <AdminLoginForm />
    </React.Fragment>
  );
};

export default AdminLoginPage;
