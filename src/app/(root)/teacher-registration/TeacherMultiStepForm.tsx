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

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { zodResolver } from "@hookform/resolvers/zod";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Steps, useSteps } from "react-step-builder";
import "react-phone-number-input/style.css";
import { Progress } from "@/components/ui/progress";
import { useRouter } from "next/navigation";
import { useCountryCode } from "@/hooks/useCountry";
import { Separator } from "@/components/ui/separator";
import { getNames } from "country-list";
import { Textarea } from "@/components/ui/textarea";
import { MultiSelect } from "@/components/ui/multi-select";
import { Checkbox } from "@/components/ui/checkbox";
import { LoaderCircle } from "lucide-react";

const formSchema = z.object({});

const TeacherMultiStepForm = () => {
  const { countryCode, error, loading } = useCountryCode();

  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { next, prev, total, current, hasNext, hasPrev, isLast } = useSteps();

  // form methods
  const methods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {},
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
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-7 gap-y-5 items-end"
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
                  name="gender"
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
                              <SelectItem key={i + 1} value={item}>
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

                {/* WhatsApp Number */}
                <FormField
                  name="whatsapp-number"
                  render={({ field }) => (
                    <FormItem className="space-y-2 col-span-full sm:col-span-1">
                      <FormLabel>Contact No</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          placeholder="WhatsApp (If applicable)"
                          className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-500 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Address */}
                <FormField
                  name="address"
                  render={({ field }) => (
                    <FormItem className="space-y-2 col-span-full sm:col-span-1">
                      <FormControl>
                        <Input
                          type="text"
                          {...field}
                          placeholder="Address"
                          className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-500 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Where do you live now */}
                <FormField
                  name="grade"
                  render={({ field }) => (
                    <FormItem className="space-y-2 col-span-full sm:col-span-1">
                      <FormControl>
                        <Select
                          onValueChange={(value) =>
                            field.onChange(Number(value))
                          }
                        >
                          <SelectTrigger className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-500 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400 outline-none focus-within:outline-none">
                            <SelectValue placeholder="Where do you live now" />
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
                  name="birth"
                  render={({ field }) => (
                    <FormItem className="space-y-2 col-span-full">
                      <FormControl>
                        <Input
                          type="text"
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
                  name="materials-status"
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
                  name="nationality"
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

                {/* Occupation */}
                <FormField
                  name="occupation"
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
                  name="introduce-yourself"
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
                  name="fb-id"
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

                {/* Upload personal image */}
                <FormField
                  name="personal-image"
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
                  name="education"
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
                  name="teaching-experience"
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
                  name="mother-lang"
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
                  name="other-langs"
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

                {/* Upload - Document 1 */}
                <FormField
                  name="doc-1"
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

                {/* Upload - Document 2 */}
                <FormField
                  name="doc-2"
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

                {/* Upload - Document 3 */}
                <FormField
                  name="doc-3"
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

                {/* Upload - Document 4 */}
                <FormField
                  name="doc-4"
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
                aria-label="third-step"
                className="grid grid-cols-2 gap-x-5 gap-y-6"
              >
                {/* Preferred interview time */}
                <FormField
                  name="preferred-interview-time"
                  render={({ field }) => (
                    <FormItem className="space-y-2 col-span-full sm:col-span-1">
                      <FormLabel>Preferred Interview Time</FormLabel>
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
                              { label: "Morning", value: "morning" },
                              { label: "Afternoon", value: "afternoon" },
                              { label: "Evening", value: "evening" },
                            ].map((time) => (
                              <SelectItem key={time.value} value={time.value}>
                                {time.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Expected Salary */}
                <FormField
                  name="expected-salary"
                  render={({ field }) => (
                    <FormItem className="space-y-2 col-span-full sm:col-span-1">
                      <FormLabel>Expected Salary (AED per hour)</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          {...field}
                          placeholder="AED per hour"
                          className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-500 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* how many hours can you work */}
                <FormField
                  name="work-hours"
                  render={({ field }) => (
                    <FormItem className="space-y-2 col-span-full sm:col-span-1">
                      <FormLabel>How many hours can you work</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          {...field}
                          placeholder="e.g 3.5"
                          className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-500 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Employment desire */}
                <FormField
                  // control={form.control}
                  name="employment-desire"
                  render={({ field }) => (
                    <FormItem className="space-y-2 col-span-full sm:col-span-1">
                      <FormLabel>Employment Desire</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col"
                        >
                          <FormItem className="flex items-center gap-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem
                                className="border-neutral-200"
                                value="full-time"
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Full Time
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center gap-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem
                                className="border-neutral-200"
                                value="part-time"
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Part Time
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center gap-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem
                                className="border-neutral-200"
                                value="full-part"
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Full/Part Time
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* What's Make you ideal */}
                <FormField
                  name="what-make-ideal"
                  render={({ field }) => (
                    <FormItem className="col-span-full">
                      <FormControl>
                        <Textarea
                          placeholder="What makes you an idea candidate?"
                          className="resize-none bg-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* How did you find out about us */}
                <FormField
                  // control={form.control}
                  name="how-find-us"
                  render={({ field }) => (
                    <FormItem className="space-y-2 col-span-full">
                      <FormLabel>How did you find out about us</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col"
                        >
                          <FormItem className="flex items-center gap-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem
                                className="border-neutral-200"
                                value="facebook"
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Facebook
                            </FormLabel>
                          </FormItem>

                          <FormItem className="flex items-center gap-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem
                                className="border-neutral-200"
                                value="linkedin"
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              LinkedIn
                            </FormLabel>
                          </FormItem>

                          <FormItem className="flex items-center gap-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem
                                className="border-neutral-200"
                                value="google"
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Google
                            </FormLabel>
                          </FormItem>

                          <FormItem className="flex items-center gap-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem
                                className="border-neutral-200"
                                value="al-furqan"
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Al Furqan website
                            </FormLabel>
                          </FormItem>

                          <FormItem className="flex items-center gap-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem
                                className="border-neutral-200"
                                value="advertisement"
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Advertisement
                            </FormLabel>
                          </FormItem>

                          <FormItem className="flex items-center gap-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem
                                className="border-neutral-200"
                                value="other"
                              />
                            </FormControl>
                            <FormLabel className="font-normal">Other</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* declaration */}
                <FormField
                  // control={form.control}
                  name="declaration"
                  render={({ field }) => {
                    return (
                      <FormItem className="col-span-full flex gap-2 space-y-0">
                        <FormControl>
                          <Checkbox
                          // checked={field.value?.includes(item.id)}
                          // onCheckedChange={(checked) => {
                          //   return checked
                          //     ? field.onChange([...field.value, item.id])
                          //     : field.onChange(
                          //         field.value?.filter(
                          //           (value) => value !== item.id
                          //         )
                          //       )
                          // }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                          I declare that the information I have provided in this
                          registration form is true and accurate to the best of
                          my knowledge
                        </FormLabel>
                      </FormItem>
                    );
                  }}
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
