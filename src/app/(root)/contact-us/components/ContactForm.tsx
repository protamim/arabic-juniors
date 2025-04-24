"use client";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, {
      message: "must be at least 2 characters.",
    })
    .max(50, {
      message: "must be maximum 50 characters.",
    }),
  email: z.string().email({ message: "Invalid email address." }),
  contactingPurpose: z.enum(
    [
      "General Inquiry",
      "Enroll in a Course",
      "Request Course Information",
      "Request a Demo Class",
      "Technical Support",
      "Ask About Study Materials",
      "One-on-One Tutoring Request",
      "Others",
    ],
    {
      message: "Please select a purpose.",
    }
  ),
  message: z
    .string()
    .min(10, {
      message: "Must be minimum 10 characters.",
    })
    .max(500, {
      message: "Must be maxmimum 500 characters.",
    }),
});

const ContactForm = () => {
  const formMethods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <React.Fragment>
      <Form {...formMethods}>
        <form
          aria-label="contact-form-wrapper"
          onSubmit={formMethods.handleSubmit(onSubmit)}
        >
          <div
            aria-label="form-field-wrapper"
            className="grid grid-cols-1 gap-y-5"
          >
            <FormField
              name="fullName"
              control={formMethods.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold text-neutral-800">
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Name"
                      className="h-12 rounded-lg bg-transparent border border-[#DCDCDC] focus-within:border-light-green-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="email"
              control={formMethods.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold text-neutral-800">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Email address"
                      className="h-12 rounded-lg bg-transparent border border-[#DCDCDC] focus-within:border-light-green-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="contactingPurpose"
              control={formMethods.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold text-neutral-800">
                    Purpose for contacting us
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger className="h-12 rounded-lg bg-transparent border border-[#DCDCDC] focus-within:border-light-green-500">
                        <SelectValue placeholder="Please select a purpose" />
                      </SelectTrigger>

                      <SelectContent>
                        {[
                          "General Inquiry",
                          "Enroll in a Course",
                          "Request Course Information",
                          "Request a Demo Class",
                          "Technical Support",
                          "Ask About Study Materials",
                          "One-on-One Tutoring Request",
                          "Others",
                        ].map((purpose, index) => (
                          <SelectItem key={index} value={purpose}>
                            {purpose}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="message"
              control={formMethods.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold text-neutral-800">
                    Message
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Your message"
                      className="rounded-lg bg-transparent border border-[#DCDCDC]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="mt-5 w-full text-lg">
            Submit Now
          </Button>
        </form>
      </Form>
    </React.Fragment>
  );
};

export default ContactForm;
