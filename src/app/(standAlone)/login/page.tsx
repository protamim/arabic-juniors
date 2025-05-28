"use client";

import React from "react";
import AdminLoginForm from "./components/AdminLoginForm";
import useAuthAdmin from "@/hooks/useAuthAdmin";
import { redirect } from "next/navigation";


const AdminLoginPage = () => {
  const { authenticated } = useAuthAdmin();


  if (authenticated) {
    return redirect('/admin')
  }

  return (
    <React.Fragment>
      <AdminLoginForm />
    </React.Fragment>
  );
};

export default AdminLoginPage;
