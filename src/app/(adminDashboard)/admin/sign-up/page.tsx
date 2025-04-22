import React from "react";
import AdminSignUpForm from "./components/AdminSignUpForm";
import { getSessionAdminUser } from "@/lib/auth";
import { redirect } from "next/navigation";

const AdminSignUpPage = async () => {
  const adminUser = await getSessionAdminUser();

  if (adminUser) {
    return redirect("/admin");
  }

  return (
    <React.Fragment>
      <AdminSignUpForm />
    </React.Fragment>
  );
};

export default AdminSignUpPage;
