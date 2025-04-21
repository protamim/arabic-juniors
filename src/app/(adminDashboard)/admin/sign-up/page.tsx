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
        console.log(error.message);
        return;
      }

      const data = await res.json();
      console.log(data);
      // redirect to login page
      push("/admin/login");
    } catch (error) {
      console.error("Sign-Up page", error);
    }
  }

  return (
    <React.Fragment>
      <div aria-describedby="admin-sign-up" className="container">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
          </form>
        </Form>
      </div>
    </React.Fragment>
  );
};

export default AdminSignUpForm;
