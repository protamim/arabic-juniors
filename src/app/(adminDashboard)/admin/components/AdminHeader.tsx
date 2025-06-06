"use client";

import { CircleUserRound } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const AdminHeader = () => {
  const router = useRouter();
  // const handleLogout = async () => {
  //   try {
  //     const response = await fetch(
  //       process.env.NEXT_PUBLIC_API_BASE_URL + "/admin/logout",
  //       {
  //         method: "GET",
  //         credentials: "include",
  //       }
  //     );

  //     const result = await response.json();

  //     toast.success(result.message || "Logged out successfully.");
  //     router.push("/");
  //   } catch (error) {
  //     console.error("Logout error:", error);
  //     toast.error("Logout failed!");
  //   }
  // };

  return (
    <React.Fragment>
      <div aria-describedby="admin-header" className="bg-gray-200 py-4">
        <div className="container-fluid">
          <div aria-describedby="main-wrapper">
            <nav className="flex items-center justify-between">
              <span>Logo</span>

              {/* account */}
              <div aria-describedby="profile">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <span className="flex items-center text-2xl text-gray-800 cursor-pointer">
                      <CircleUserRound />
                    </span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        Profile
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        Billing
                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        Settings
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        Keyboard shortcuts
                        <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => {
                        localStorage.removeItem("jwtToken");
                        toast.success("Logged Out!");
                        router.replace("/");
                      }}
                    >
                      Log out
                      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminHeader;
