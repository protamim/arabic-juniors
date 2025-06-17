"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon, LoaderCircle } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Steps, useSteps } from "react-step-builder";
import "react-phone-number-input/style.css";
import PhoneInput, {
  Country,
  isValidPhoneNumber,
} from "react-phone-number-input";
import { Progress } from "@/components/ui/progress";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useCountryCode } from "@/hooks/useCountry";
import { Separator } from "@/components/ui/separator";
import { getNames } from "country-list";
import { Textarea } from "@/components/ui/textarea";
import { MultiSelect } from "@/components/ui/multi-select";

const TIME_SLOTS = {
  timeFormat: "12-hour",
  intervalMinutes: 15,
  startTime: "07:00 AM",
  endTime: "11:45 PM",
  availableTimes: [
    { time: "07:00 AM" },
    { time: "07:15 AM" },
    { time: "07:30 AM" },
    { time: "07:45 AM" },
    { time: "08:00 AM" },
    { time: "08:15 AM" },
    { time: "08:30 AM" },
    { time: "08:45 AM" },
    { time: "09:00 AM" },
    { time: "09:15 AM" },
    { time: "09:30 AM" },
    { time: "09:45 AM" },
    { time: "10:00 AM" },
    { time: "10:15 AM" },
    { time: "10:30 AM" },
    { time: "10:45 AM" },
    { time: "11:00 AM" },
    { time: "11:15 AM" },
    { time: "11:30 AM" },
    { time: "11:45 AM" },
    { time: "12:00 PM" },
    { time: "12:15 PM" },
    { time: "12:30 PM" },
    { time: "12:45 PM" },
    { time: "01:00 PM" },
    { time: "01:15 PM" },
    { time: "01:30 PM" },
    { time: "01:45 PM" },
    { time: "02:00 PM" },
    { time: "02:15 PM" },
    { time: "02:30 PM" },
    { time: "02:45 PM" },
    { time: "03:00 PM" },
    { time: "03:15 PM" },
    { time: "03:30 PM" },
    { time: "03:45 PM" },
    { time: "04:00 PM" },
    { time: "04:15 PM" },
    { time: "04:30 PM" },
    { time: "04:45 PM" },
    { time: "05:00 PM" },
    { time: "05:15 PM" },
    { time: "05:30 PM" },
    { time: "05:45 PM" },
    { time: "06:00 PM" },
    { time: "06:15 PM" },
    { time: "06:30 PM" },
    { time: "06:45 PM" },
    { time: "07:00 PM" },
    { time: "07:15 PM" },
    { time: "07:30 PM" },
    { time: "07:45 PM" },
    { time: "08:00 PM" },
    { time: "08:15 PM" },
    { time: "08:30 PM" },
    { time: "08:45 PM" },
    { time: "09:00 PM" },
    { time: "09:15 PM" },
    { time: "09:30 PM" },
    { time: "09:45 PM" },
    { time: "10:00 PM" },
    { time: "10:15 PM" },
    { time: "10:30 PM" },
    { time: "10:45 PM" },
    { time: "11:00 PM" },
    { time: "11:15 PM" },
    { time: "11:30 PM" },
    { time: "11:45 PM" },
  ],
};

const timeOptions = TIME_SLOTS.availableTimes.map((slot) => slot.time) as [
  string,
  ...string[]
]; // Non-empty tuple

const formSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  phoneNumber: z.string().refine((value) => isValidPhoneNumber(value), {
    message: "Invalid phone number",
  }),
  grade: z.number().min(1),
  howManyJoin: z.string(),
  preferredTeacher: z.string(),
  classStartDate: z.date().refine((date) => date > new Date(), {
    message: "Start date must be in the future",
  }),
  classStartTime: z.enum(timeOptions, {
    errorMap: () => ({ message: "Please select a valid time." }),
  }),
  howFindUs: z.string(),
});

const TeacherMultiStepForm = () => {
  const { countryCode, error, loading } = useCountryCode();

  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { next, prev, total, current, hasNext, hasPrev, isLast } = useSteps();

  // form methods
  const methods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      grade: 0,
      howManyJoin: "0",
      preferredTeacher: "",
      classStartDate: undefined,
      classStartTime: TIME_SLOTS.availableTimes[0].time,
      howFindUs: "",
    },
  });

  //   const validateStep = async () => {
  //     const isValid = await methods.trigger([
  //       "email",
  //       "phoneNumber",
  //       "firstName",
  //       "lastName",
  //       "grade",
  //     ]); // Validate specific fields
  //     if (isValid) {
  //       next(); // Move to the next step if valid
  //     } else {
  //       console.log("Validation failed:", methods.formState.errors);
  //     }
  //   };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <React.Fragment>
      <React.Suspense fallback={"Loading"}>
        <div aria-label="progress-wrapper" className="mb-12">
          <Progress
            value={Math.floor((current / total) * 100)}
            className="w-full"
          />
        </div>

        <Form {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="teacher-registration-form"
          >
            <Steps>
              {/* FIRST STEP START */}
              <div
                aria-label="first-step"
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-7 gap-y-5"
              >
                <div aria-describedby="form-title" className="col-span-full">
                  <h5 className="text-3xl font-medium text-neutral-800">
                    Fill your application
                  </h5>
                </div>
                <Separator className="my-3 col-span-full" />

                {/* First Name */}
                <FormField
                  name="firstName"
                  render={({ field }) => (
                    <FormItem
                      aria-label="form-item"
                      className="space-y-2 col-span-full sm:col-span-1"
                    >
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter your first name"
                          className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-500 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Last Name */}
                <FormField
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="space-y-2 col-span-full sm:col-span-1">
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter your last name"
                          className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-500 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Grade */}
                <FormField
                  name="grade"
                  render={({ field }) => (
                    <FormItem className="space-y-2 col-span-full">
                      <FormLabel>Gender</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={(value) =>
                            field.onChange(Number(value))
                          }
                        >
                          <SelectTrigger className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-500 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400 outline-none focus-within:outline-none">
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            {["Male", "Female", "Custom"].map((item, i) => (
                              <SelectItem
                                key={i + 1}
                                value={(i + 1).toString()}
                              >
                                {item}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email */}
                <FormField
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-2 col-span-full">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="Enter your email"
                          className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-500 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="space-y-2 col-span-full">
                      <FormLabel>Contact No</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="WhatsApp (If applicable)"
                          className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-500 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="space-y-2 col-span-full">
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Address"
                          className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-500 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="grade"
                  render={({ field }) => (
                    <FormItem className="space-y-2 col-span-full">
                      <FormControl>
                        <Select
                          onValueChange={(value) =>
                            field.onChange(Number(value))
                          }
                        >
                          <SelectTrigger className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-500 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400 outline-none focus-within:outline-none">
                            <SelectValue placeholder="Where do live now" />
                          </SelectTrigger>
                          <SelectContent>
                            {getNames().map((country, index) => (
                              <SelectItem key={index} value={country}>
                                {country}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Phone Number Field */}
                {/* <FormField
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem className="space-y-2 col-span-full">
                      <FormLabel>Mobile</FormLabel>
                      <FormControl>
                        <PhoneInput
                          defaultCountry={
                            countryCode == "undefined"
                              ? "AE"
                              : (countryCode as Country)
                          }
                          value={field.value}
                          onChange={(phone) => {
                            field.onChange(phone);
                            console.log(phone);
                          }}
                          className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-500 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}

                <div
                  aria-describedby="form-title"
                  className="mt-4 col-span-full space-y-1"
                >
                  <h5 className="text-3xl font-medium text-neutral-800">
                    Personal Information
                  </h5>
                  <p className="text-gray-600 text-sm font-medium">
                    Please tell us about yourself
                  </p>
                </div>
                <Separator className="my-1 col-span-full" />

                {/* date of birth */}
                <FormField
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="space-y-2 col-span-full">
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Date of birth"
                          className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-500 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Materials status */}
                <FormField
                  name="grade"
                  render={({ field }) => (
                    <FormItem className="space-y-2 col-span-full">
                      <FormControl>
                        <Select
                          onValueChange={(value) =>
                            field.onChange(Number(value))
                          }
                        >
                          <SelectTrigger className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-500 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400 outline-none focus-within:outline-none">
                            <SelectValue placeholder="Material status" />
                          </SelectTrigger>
                          <SelectContent>
                            {["Married", "Unmarried"].map((item, index) => (
                              <SelectItem key={index} value={item}>
                                {item}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Nationality */}
                <FormField
                  name="grade"
                  render={({ field }) => (
                    <FormItem className="space-y-2 col-span-full">
                      <FormControl>
                        <Select
                          onValueChange={(value) =>
                            field.onChange(Number(value))
                          }
                        >
                          <SelectTrigger className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-500 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400 outline-none focus-within:outline-none">
                            <SelectValue placeholder="Nationality" />
                          </SelectTrigger>
                          <SelectContent>
                            {getNames().map((country, index) => (
                              <SelectItem key={index} value={country}>
                                {country}
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
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="space-y-2 col-span-full">
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Occupation"
                          className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-500 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* introduce */}
                <FormField
                  name=""
                  render={({ field }) => (
                    <FormItem className="col-span-full">
                      <FormControl>
                        <Textarea
                          placeholder="Write a simple text to introduce yourself"
                          className="resize-none bg-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Facebook */}
                <FormField
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="space-y-2 col-span-full">
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Facebook ID"
                          className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-500 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Upload */}
                <FormField
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="space-y-2 col-span-1">
                      <FormLabel>Upload Personal Image</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          {...field}
                          placeholder="Facebook ID"
                          className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-500 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* FIRST STEP END */}

              {/* SECOND STEP START */}
              <div
                aria-label="second-step"
                className="grid grid-cols-2 gap-x-5 gap-y-6"
              >
                <div className="col-span-full space-y-3">
                  <h4 className="text-3xl font-bold text-neutral-800">
                    Academic & Professional Information
                  </h4>
                  <p className="text-base font-medium text-neutral-700">
                    Please tell us about your education, Occupation, and
                    Experience
                  </p>
                </div>

                <Separator className="col-span-full" />

                {/* Education */}
                <FormField
                  name=""
                  render={({ field }) => (
                    <FormItem className="space-y-2 col-span-full">
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Education details"
                          className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-500 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* teaching experience */}
                <FormField
                  name=""
                  render={({ field }) => (
                    <FormItem className="space-y-2 col-span-full">
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Previous Online Teaching Experience"
                          className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-500 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Mother Language */}
                <FormField
                  name=""
                  render={({ field }) => (
                    <FormItem className="space-y-2 col-span-full">
                      <FormLabel>Mother Language</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={(value) =>
                            field.onChange(Number(value))
                          }
                        >
                          <SelectTrigger className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-500 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400 outline-none focus-within:outline-none">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            {[
                              { label: "English", value: "eng" },
                              { label: "Urdu", value: "urdu" },
                              { label: "Hindi", value: "hindi" },
                              { label: "Malayalam", value: "malayalam" },
                              { label: "Tamil", value: "tamil" },
                              { label: "Philippine", value: "philippine" },
                              { label: "Bengali", value: "bengali" },
                              { label: "French", value: "french" },
                              { label: "German", value: "german" },
                            ].map((lang) => (
                              <SelectItem key={lang.value} value={lang.value}>
                                {lang.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Other Language */}
                <FormField
                  name=""
                  render={({ field }) => (
                    <FormItem className="space-y-2 col-span-full">
                      <FormLabel>Other Language</FormLabel>
                      <FormControl>
                        <MultiSelect
                          onValueChange={(value) => field.onChange(value)}
                          options={[
                            { label: "English", value: "eng" },
                            { label: "Urdu", value: "urdu" },
                            { label: "Hindi", value: "hindi" },
                            { label: "Malayalam", value: "malayalam" },
                            { label: "Tamil", value: "tamil" },
                            { label: "Philippine", value: "philippine" },
                            { label: "Bengali", value: "bengali" },
                            { label: "French", value: "french" },
                            { label: "German", value: "german" },
                          ]}
                          placeholder="Select Languages"
                          className="bg-white hover:bg-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Upload */}
                <FormField
                  name=""
                  render={({ field }) => (
                    <FormItem className="space-y-2 col-span-1">
                      <FormLabel>Document (e.g CV)</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          {...field}
                          placeholder="Upload you CV"
                          className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-500 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Upload */}
                <FormField
                  name=""
                  render={({ field }) => (
                    <FormItem className="space-y-2 col-span-1">
                      <FormLabel>Document (e.g Training)</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          {...field}
                          placeholder="Upload you CV"
                          className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-500 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Upload */}
                <FormField
                  name=""
                  render={({ field }) => (
                    <FormItem className="space-y-2 col-span-1">
                      <FormLabel>Document (e.g M.A or B.Ed)</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          {...field}
                          placeholder="Upload you CV"
                          className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-500 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Upload */}
                <FormField
                  name=""
                  render={({ field }) => (
                    <FormItem className="space-y-2 col-span-1">
                      <FormLabel>Document (e.g Teaching Cert.)</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          {...field}
                          placeholder="Upload you CV"
                          className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-500 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* SECOND STEP END */}

              {/* THIRD STEP START */}
              <div
                aria-label="second-step"
                className="flex items-start flex-col gap-y-4"
              >
                <div className="space-y-4">
                  <h3 className="text-4xl text-neutral-800 font-bold">
                    Reading & Reciting
                  </h3>
                  <p className="text-2xl font-normal text-neutral-700">
                    Please read & recite the below and upload an audio file
                  </p>
                </div>

                <Separator />

                <div>
                  <p className="text-base font-normal text-neutral-600">
                    The Birth of the Prophet Muhammad, son of Abdullah, son of
                    Abdul Muttallb, and member of the Quraysh tribe, was born in
                    Makkah 53 years before the Hijrah. His father died before he
                    was born, and he was raised by his grandfather, Abdul
                    Muttalib, and then by his uncle, Abu Talib, after his
                    grandfather died. He traveled to Syria as a young boy with
                    his uncle in a merchants' caravan, and later made the same
                    journey in the service of a wealthy widow named Khadijah. He
                    handled the widow's business so faithfully, and the report
                    of his behavior from her old servant who had accompanied him
                    was so good, that she married her young agent soon after;
                    and the marriage proved to be a very happy one, despite the
                    fact that she was fifteen years older than he was.
                  </p>
                </div>

                {/* Upload */}
                <FormField
                  name=""
                  render={({ field }) => (
                    <FormItem className="space-y-2 col-span-1">
                      <FormLabel>
                        Read the above paragraph and upload audio file.
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          // {...field}
                          placeholder="Upload you CV"
                          className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-500 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Upload */}
                <FormField
                  name=""
                  render={({ field }) => (
                    <FormItem className="space-y-2 col-span-1">
                      <FormLabel>
                        Please recite the first 10 Ayah of Surah An-Naba and
                        upload audio file
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          // {...field}
                          placeholder="Upload you CV"
                          className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-500 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* THIRD STEP END */}
            </Steps>

            <div className="navigation mt-14 flex items-center gap-x-4 max-w-screen-sm ml-auto">
              {hasPrev && (
                <Button
                  type="button"
                  onClick={prev}
                  variant={"outline"}
                  className=" w-auto flex-1"
                >
                  Previous
                </Button>
              )}

              {hasNext ? (
                <Button
                  type="button"
                  onClick={() => next()}
                  className="rounded-lg flex-1"
                >
                  Next
                </Button>
              ) : (
                isLast && (
                  <Button
                    type="submit"
                    variant="default"
                    className="flex-1 rounded-lg flex-shrink-0 flex-grow-0 basis-auto"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <LoaderCircle className="animate-spin" /> Please Wait
                      </>
                    ) : (
                      "Submit"
                    )}
                  </Button>
                )
              )}
            </div>
          </form>
        </Form>
      </React.Suspense>
    </React.Fragment>
  );
};

export default TeacherMultiStepForm;
