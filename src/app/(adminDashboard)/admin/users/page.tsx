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

export interface UserDataTypes {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  grade: number;
  howManyJoin: string;
  preferredTeacher: string;
  classStartDate: Date;
  classStartTime: string;
  howFindUs: string;
  userIP: string;
}

const UsersPage = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users`);
  const users: UserDataTypes[] = await data.json();

  return (
    <React.Fragment>
      <div aria-describedby="users-page">
        <div className="mb-5">
          <h3 className="text-3xl text-gray-900 font-semibold">Users</h3>
        </div>

        <div aria-describedby="table-wrapper" className="overflow-auto w-full">
          <Table>
            <TableCaption>A list of your recent users.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="whitespace-nowrap text-center">
                  ID
                </TableHead>
                <TableHead className="whitespace-nowrap text-center">
                  First Name
                </TableHead>
                <TableHead className="whitespace-nowrap text-center">
                  Last Name
                </TableHead>
                <TableHead className="whitespace-nowrap text-center">
                  Email
                </TableHead>
                <TableHead className="whitespace-nowrap text-center">
                  Phone Number
                </TableHead>
                <TableHead className="whitespace-nowrap text-center">
                  Grade
                </TableHead>
                <TableHead className="whitespace-nowrap text-center">
                  Total Join
                </TableHead>
                <TableHead className="whitespace-nowrap text-center">
                  Preferred Teacher
                </TableHead>
                <TableHead className="whitespace-nowrap text-center">
                  Class Start Date
                </TableHead>
                <TableHead className="whitespace-nowrap text-center">
                  Class Start Time
                </TableHead>
                <TableHead className="whitespace-nowrap text-center">
                  Find From
                </TableHead>
                <TableHead className="whitespace-nowrap text-center">
                  IP Address
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={100}>
                    <h4 className="text-xl font-semibold text-neutral-900 text-center py-7">
                      No Data Found!
                    </h4>
                  </TableCell>
                </TableRow>
              ) : (
                <Suspense fallback={"Loading..."}>
                  {users.map((user: UserDataTypes, index: number) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium text-center">
                        {index + 1}
                      </TableCell>
                      <TableCell className="text-center">
                        {user.firstName}
                      </TableCell>
                      <TableCell className="text-center">
                        {user.lastName}
                      </TableCell>
                      <TableCell className="text-center">
                        {user.email}
                      </TableCell>
                      <TableCell className="text-center">
                        {user.phoneNumber}
                      </TableCell>
                      <TableCell className="text-center">
                        {user.grade}
                      </TableCell>
                      <TableCell className="text-center">
                        {user.howManyJoin}
                      </TableCell>
                      <TableCell className="text-center">
                        {user.preferredTeacher}
                      </TableCell>
                      <TableCell className="text-center">
                        {new Date(user.classStartDate).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="text-center">
                        {user.classStartTime}
                      </TableCell>
                      <TableCell className="text-center">
                        {user.howFindUs}
                      </TableCell>
                      <TableCell className="text-center">
                        {user.userIP}
                      </TableCell>
                    </TableRow>
                  ))}
                </Suspense>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell>Total</TableCell>
                <TableCell colSpan={100} className="text-right">
                  {users.length}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UsersPage;
