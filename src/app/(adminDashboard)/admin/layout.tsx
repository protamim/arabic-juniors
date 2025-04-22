import AdminHeader from "@/globals/admin/AdminHeader";
import "../../globals.css";
import React from "react";

const AdminDashboardLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div aria-describedby="admin-layout">
      <AdminHeader />
      {children}
    </div>
  );
};

export default AdminDashboardLayout;
