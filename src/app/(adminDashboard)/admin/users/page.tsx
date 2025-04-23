import React, { Suspense } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// const USERS = [
//   {
//     id: "1",
//     firstName: "Tamim",
//     lastName: "Talukdar",
//     email: "contact@protamim.com",
//   },
// ];

export interface UserTypes {
  firstName: string;
  lastName: string;
  email: string;
}

const UsersPage = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users`);
  const users = await data.json();

  return (
    <React.Fragment>
      <div aria-describedby="users-page">
        <div className="mb-5">
          <h3 className="text-3xl text-gray-900 font-semibold">Users</h3>
        </div>

        <Table>
          <TableCaption>A list of your recent users.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>First Name</TableHead>
              <TableHead>Last Name</TableHead>
              <TableHead className="text-right">Email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <Suspense fallback={"Loading..."}>
              {users.map((user: UserTypes, index: number) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>{user.firstName}</TableCell>
                  <TableCell>{user.lastName}</TableCell>
                  <TableCell className="text-right">{user.email}</TableCell>
                </TableRow>
              ))}
            </Suspense>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">{users.length}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </React.Fragment>
  );
};

export default UsersPage;
