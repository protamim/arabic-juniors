import { getSessionAdminUser } from "@/lib/auth";
import Link from "next/link";
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
      <div className="container">
        <div aria-describedby="main-wrapper">
          <div aria-describedby="admin-sidebar">
            <ul>
              <li>
                <Link href={"/admin"}>Overview</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
