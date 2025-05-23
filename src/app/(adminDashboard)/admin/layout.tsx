import "../../globals.css";
import React from "react";
import AdminHeader from "./components/AdminHeader";
import AdminSidebar from "./components/AdminSidebar";
import { getSessionAdminUser } from "@/lib/auth";
import { redirect } from "next/navigation";

const AdminDashboardLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const adminUser = await getSessionAdminUser();

  if (!adminUser) {
    return redirect("/login");
  }

  return (
    <div aria-describedby="admin-layout">
      <AdminHeader />

      <div className="container-fluid">
        <div
          aria-describedby="wrapper"
          className="flex items-start gap-x-5 pt-6"
        >
          <AdminSidebar />
          <div
            aria-describedby="page-parent"
            className="bg-gray-50 overflow-hidden border border-b-0 border-gray-200 rounded-t-lg flex-1 h-[calc(100vh-80px)] p-3"
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
