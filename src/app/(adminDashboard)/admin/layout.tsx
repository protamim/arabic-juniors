export const dynamic = "force-dynamic";

import "../../globals.css";
import React from "react";
import AdminHeader from "./components/AdminHeader";
import AdminSidebar from "./components/AdminSidebar";
import { redirect } from "next/navigation";
import adminUser from "@/lib/adminUser";

const AdminDashboardLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const admin = await adminUser();

  if (!admin?.adminId) {
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
