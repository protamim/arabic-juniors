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
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  your_name: z.string().min(2).max(50),
  email: z.string().email(),
  user_message: z.string().min(10).max(255)
});

const FaqForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      your_name: "",
      email: '',
      user_message: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <React.Fragment>
      <div
        aria-describedby="faq-form-wrapper"
        className="bg-[#053F7A] rounded-lg p-5 md:p-12"
      >
        <div aria-describedby="title-wrapper" className="mb-6 md:mb-12">
          <h4 className="text-2xl sm:text-4xl font-bold text-white text-center">
            Any other Question?
          </h4>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-6"
          >
            <FormField
              control={form.control}
              name="your_name"
              render={({ field }) => (
                <FormItem className="col-span-full md:col-span-1">
                  <FormLabel className="text-white">Your Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your name"
                      {...field}
                      className="rounded-lg h-10"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="col-span-full md:col-span-1">
                  <FormLabel className="text-white">
                    Your email address
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Type your email"
                      {...field}
                      className="rounded-lg h-10"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="user_message"
              render={({ field }) => (
                <FormItem className="col-span-full">
                  <FormLabel className="text-white">Short your personal message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type here"
                      className="resize-none bg-white"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="col-span-full">
              Send
            </Button>
          </form>
        </Form>
      </div>
    </React.Fragment>
  );
};

export default FaqForm;
