"use client";
import React from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(36),
});

const AdminSignUpForm = () => {
  const { push } = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_API_BASE_URL + "/signup",
        {
          credentials: "include",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (!res.ok) {
        const error = await res.json();
        // notify user
        toast.error(error.message);
        form.reset();
        return;
      }

      const data = await res.json();
      console.log(data);

      // notify user
      toast("Signed Up Successfully");
      form.reset();
      // redirect to login page
      push("/login");
    } catch (error) {
      console.error("Sign-Up page", error);
      // notify user
      toast.error("Something wrong!");
      form.reset();
    }
  }

  return (
    <React.Fragment>
      <div aria-describedby="admin-sign-up" className="container">
        <div
          aria-describedby="main-wrapper"
          className=" h-screen flex items-center justify-center flex-col w-full"
        >
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 max-w-screen-sm mx-auto bg-gray-100 shadow-md p-5"
            >
              <div className="flex items-center justify-center">
                <h4 className="text-2xl text-gray-800 font-medium text-center">
                  Admin Sign Up
                </h4>
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Your Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Your Password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Sign Up</Button>

              <div
                aria-describedby="form-footer"
                className="flex items-center gap-1 text-sm text-gray-700 font-normal"
              >
                <p>Already have an account? </p>{" "}
                <Link href={"/login"} className="text-indigo-500">
                  Login
                </Link>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminSignUpForm;
