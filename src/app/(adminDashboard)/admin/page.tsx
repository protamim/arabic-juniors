import { getSessionAdminUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

const AdminDashboardPage = async () => {
  const adminUser = await getSessionAdminUser();

  if (!adminUser) {
    return redirect("/admin/login");
  }

  console.log(adminUser?.id);

  return (
    <div aria-label="admin-dashboard-page">
      <h5>Admin Dashboard</h5>
    </div>
  );
};

export default AdminDashboardPage;
