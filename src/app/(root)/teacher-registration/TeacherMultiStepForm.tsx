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
import { toast } from "sonner";

const countries = getNames();
const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

const langValues = [
  "eng",
  "urdu",
  "hindi",
  "malayalam",
  "tamil",
  "philippine",
  "bengali",
  "french",
  "german",
] as const;

const formSchema = z.object({
  first_name: z
    .string({ message: "First Name is required!" })
    .min(3, { message: "First Name must be at least 3 characters long" })
    .max(50, { message: "First Name must be under 50 characters" }),
  last_name: z
    .string({ message: "Last Name is required!" })
    .min(3, { message: "Last Name must be at least 3 characters long" })
    .max(50, { message: "Last Name must be under 50 characters" }),
  gender: z.enum(["Male", "Female", "Custom"], {
    required_error: "Gender is required",
    invalid_type_error: "Invalid gender option",
  }),
  email: z.string().email({ message: "Email is required!" }),
  whatsapp_number: z
    .string()
    .min(10, { message: "Number must be at least 10 digits" })
    .max(15, { message: "Number must be at most 15 digits" })
    .regex(/^\d+$/, { message: "Only numbers are allowed" })
    .optional(), // Optional since it's "If applicable"
  address: z
    .string({ message: "Address is required!" })
    .min(5, { message: "Address must be at least 5 characters long" })
    .max(120, { message: "Address must be at least 120 characters long" }),
  where_live: z.string().refine((val) => countries.includes(val), {
    message: "Please select a valid country",
  }),
  birth: z
    .string()
    .min(1, { message: "Date of birth is required" })
    .refine((val) => /^\d{4}-\d{2}-\d{2}$/.test(val), {
      message: "Date must be in YYYY-MM-DD format",
    }),
  materials_status: z.enum(["Married", "Unmarried"], {
    required_error: "Material status is required",
    invalid_type_error: "Invalid material status",
  }),
  nationality: z.string().refine((val) => countries.includes(val), {
    message: "Please select a valid country",
  }),
  occupation: z
    .string()
    .min(2, { message: "Occupation must be at least 2 characters long" })
    .max(100, { message: "Occupation must be under 100 characters" }),
  introduce_yourself: z
    .string()
    .min(10, { message: "Please write at least 10 characters" })
    .max(1000, { message: "Introduction must be under 1000 characters" }),
  fb_id: z
    .string()
    .min(5, { message: "Facebook ID must be at least 5 characters long" })
    .max(100, { message: "Facebook ID must be under 100 characters" }),
  personal_image: z
    .custom<File>()
    .refine((file) => file instanceof File, {
      message: "Please upload an image",
    })
    .refine((file) => file?.size <= MAX_FILE_SIZE, {
      message: "Image must be less than 2MB",
    })
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type), {
      message: "Only JPG, PNG or WEBP images are allowed",
    }),
  education: z
    .string()
    .min(2, { message: "Please enter your education details" })
    .max(200, { message: "Education details must be under 200 characters" }),
  teaching_experience: z
    .string()
    .min(5, { message: "Please describe your online teaching experience" })
    .max(200, { message: "Teaching experience must be under 200 characters" }),
  mother_lang: z.enum(langValues, {
    errorMap: () => ({ message: "Please select a valid mother language" }),
  }),
  other_langs: z.array(z.enum(langValues)).refine(
    (arr) => {
      if (!arr) return true; // if undefined, consider valid (because optional)
      return new Set(arr).size === arr.length;
    },
    {
      message: "Duplicate languages are not allowed",
    }
  ),
  doc_1: z.any().refine(
    (files) => {
      if (!files || files.length === 0) return false;
      const file = files[0];
      return file.type === "application/pdf";
    },
    {
      message: "Please upload a valid PDF file.",
    }
  ),
  doc_2: z.any().refine(
    (files) => {
      if (!files || files.length === 0) return false;
      const file = files[0];
      return file.type === "application/pdf";
    },
    {
      message: "Please upload a valid PDF file.",
    }
  ),
  doc_3: z.any().refine(
    (files) => {
      if (!files || files.length === 0) return false;
      const file = files[0];
      return file.type === "application/pdf";
    },
    {
      message: "Please upload a valid PDF file.",
    }
  ),
  doc_4: z.any().refine(
    (files) => {
      if (!files || files.length === 0) return false;
      const file = files[0];
      return file.type === "application/pdf";
    },
    {
      message: "Please upload a valid PDF file.",
    }
  ),
  preferred_interview_time: z.enum(["morning", "afternoon", "evening"], {
    required_error: "Please select a preferred interview time",
  }),
  expected_salary: z
    .string()
    .min(1, { message: "Expected salary is required" })
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val) && val > 0, {
      message: "Expected salary must be a valid positive number",
    }),
  work_hours: z
    .string()
    .min(1, { message: "Work hours are required" })
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val) && val > 0, {
      message: "Please enter a valid number of hours",
    })
    .refine((val) => val >= 0.5 && val <= 12, {
      message: "Work hours must be between 0.5 and 12",
    }),
  employment_desire: z.enum(["full-time", "part-time", "full-part"], {
    required_error: "Please select an employment type",
  }),
  what_make_ideal: z
    .string()
    .min(10, { message: "Please describe in at least 10 characters" })
    .max(1000, { message: "Please limit your response to 1000 characters" }),
  how_find_us: z.enum(
    ["facebook", "linkedin", "google", "al-furqan", "advertisement", "other"],
    {
      required_error: "Please select an option",
    }
  ),
  declaration: z.boolean().refine((val) => val === true, {
    message: "You must accept the declaration.",
  }),
});

const TeacherMultiStepForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { next, prev, total, current, hasNext, hasPrev, isLast } = useSteps();

  // form methods
  const methods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      first_name: "",
      last_name: "",
      gender: "Male", // default selected gender
      email: "",
      whatsapp_number: "",
      address: "",
      where_live: "",
      birth: "",
      materials_status: "Unmarried",
      nationality: "",
      occupation: "",
      introduce_yourself: "",
      fb_id: "",
      personal_image: undefined as unknown as File, // Cast to satisfy z.custom<File>()
      education: "",
      teaching_experience: "",
      mother_lang: "eng",
      other_langs: ['eng'],
      doc_1: undefined,
      doc_2: undefined,
      doc_3: undefined,
      doc_4: undefined,
      preferred_interview_time: "morning",
      expected_salary: 0, // will be transformed into number
      work_hours: 0, // will be transformed into number
      employment_desire: "full-time",
      what_make_ideal: "",
      how_find_us: "facebook",
      declaration: false,
    },
  });

  const validateStep = async () => {
    const firstStepValidation = await methods.trigger([
      "first_name",
      "last_name",
      "gender",
      "email",
      "whatsapp_number",
      "address",
      "where_live",
      "birth",
      "materials_status",
      "nationality",
      "occupation",
      "introduce_yourself",
      "fb_id",
      "personal_image",
    ]);

    const secondStepValidation = await methods.trigger([
      "education",
      "teaching_experience",
      "mother_lang",
      "other_langs",
      "doc_1",
      "doc_2",
      "doc_3",
      "doc_4",
    ]);

    if (firstStepValidation && current === 1) {
      next(); // Move to the 2nd step if valid
    } else if (secondStepValidation && current === 2) {
      next(); // Move to the 3rd step if valid
    } else {
      console.log("Validation failed:", methods.formState.errors);
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    const formData = new FormData();
    formData.append("first_name", values.first_name);
    formData.append("last_name", values.last_name);
    formData.append("gender", values.gender);
    formData.append("email", values.email);
    formData.append("whatsapp_number", values?.whatsapp_number || "n/a");
    formData.append("address", values.address);
    formData.append("where_live", values.where_live);
    formData.append("birth", values.birth);
    formData.append("materials_status", values.materials_status);
    formData.append("nationality", values.nationality);
    formData.append("occupation", values.occupation);
    formData.append("introduce_yourself", values.introduce_yourself);
    formData.append("fb_id", values.fb_id);
    formData.append("personal_image", values.personal_image);
    formData.append("education", values.education);
    formData.append("teaching_experience", values.teaching_experience);
    formData.append("mother_lang", values.mother_lang);
    values.other_langs.forEach((lang) => {
      formData.append("other_langs[]", lang);
    });
    if (values.doc_1?.[0]) {
      formData.append("doc_1", values.doc_1?.[0]);
    }
    if (values.doc_2?.[0]) {
      formData.append("doc_2", values.doc_2?.[0]);
    }
    if (values.doc_3?.[0]) {
      formData.append("doc_3", values.doc_3?.[0]);
    }
    if (values.doc_4?.[0]) {
      formData.append("doc_4", values.doc_4?.[0]);
    }

    formData.append(
      "preferred_interview_time",
      values.preferred_interview_time
    );
    formData.append("expected_salary", values.expected_salary.toString());
    formData.append("work_hours", values.work_hours.toString());
    formData.append("employment_desire", values.employment_desire);
    formData.append("what_make_ideal", values.what_make_ideal);
    formData.append("how_find_us", values.how_find_us);
    formData.append("declaration", values.declaration ? "true" : "false");

    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_API_BASE_URL + "/teacher-registration",
        {
          method: "POST",
          body: formData,
        }
      );

      const info = await res.json();
      console.log(info);
      toast.success(info?.message || "Something wrong!");
      setIsLoading(false);
    } catch (error) {
      console.log("Teacher registration failed", error);
    }
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
            encType="multipart/form-data"
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
                  name="first_name"
                  render={({ field }) => (
                    <FormItem
                      aria-label="form-item"
                      className="space-y-2 h-full col-span-full sm:col-span-1"
                    >
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter your first name"
                          className="border text-neutral-800 border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Last Name */}
                <FormField
                  name="last_name"
                  render={({ field }) => (
                    <FormItem className="space-y-2 h-full col-span-full sm:col-span-1">
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter your last name"
                          className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-800 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Gender */}
                <FormField
                  name="gender"
                  render={({ field }) => (
                    <FormItem className="space-y-2 h-full col-span-full">
                      <FormLabel>Gender</FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange}>
                          <SelectTrigger className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-800 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400 outline-none focus-within:outline-none">
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            {["Male", "Female", "Custom"].map((item, i) => (
                              <SelectItem key={i} value={item}>
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
                    <FormItem className="space-y-2 h-full col-span-full">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="Enter your email"
                          className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-800 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* WhatsApp Number */}
                <FormField
                  name="whatsapp_number"
                  render={({ field }) => (
                    <FormItem className="space-y-2 h-full col-span-full sm:col-span-1">
                      <FormLabel>Contact No</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          {...field}
                          placeholder="WhatsApp (If applicable)"
                          className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-800 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400"
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
                    <FormItem className="space-y-2 h-full col-span-full sm:col-span-1">
                      <FormLabel className="invisible">invisible</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          {...field}
                          placeholder="Address"
                          className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-800 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Where do you live now */}
                <FormField
                  name="where_live"
                  render={({ field }) => (
                    <FormItem className="space-y-2 h-full col-span-full sm:col-span-1">
                      <FormControl>
                        <Select onValueChange={field.onChange}>
                          <SelectTrigger className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-800 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400 outline-none focus-within:outline-none">
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
                    <FormItem className="space-y-2 h-full col-span-full">
                      <FormControl>
                        <Input
                          type="text"
                          {...field}
                          placeholder="Date of Birth e.g YYYY-MM-DD"
                          className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-800 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Materials status */}
                <FormField
                  name="materials_status"
                  render={({ field }) => (
                    <FormItem className="space-y-2 h-full col-span-full">
                      <FormControl>
                        <Select onValueChange={field.onChange}>
                          <SelectTrigger className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-800 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400 outline-none focus-within:outline-none">
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
                    <FormItem className="space-y-2 h-full col-span-full">
                      <FormControl>
                        <Select onValueChange={field.onChange}>
                          <SelectTrigger className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-800 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400 outline-none focus-within:outline-none">
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
                    <FormItem className="space-y-2 h-full col-span-full">
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Occupation"
                          className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-800 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Introduce yourself */}
                <FormField
                  name="introduce_yourself"
                  render={({ field }) => (
                    <FormItem className="col-span-full h-full">
                      <FormControl>
                        <Textarea
                          placeholder="Write a simple text to introduce yourself"
                          className="resize-none bg-white text-neutral-800"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Facebook */}
                <FormField
                  name="fb_id"
                  render={({ field }) => (
                    <FormItem className="space-y-2 h-full col-span-full">
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Facebook ID"
                          className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-800 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Upload personal image */}
                <FormField
                  name="personal_image"
                  render={({ field }) => (
                    <FormItem className="space-y-2 h-full col-span-1">
                      <FormLabel>Upload Personal Image</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) => field.onChange(e.target.files?.[0])}
                          placeholder="Facebook ID"
                          className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-800 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400"
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
                    <FormItem className="space-y-2 h-full col-span-full">
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Education details"
                          className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-800 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* teaching experience */}
                <FormField
                  name="teaching_experience"
                  render={({ field }) => (
                    <FormItem className="space-y-2 h-full col-span-full">
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Previous Online Teaching Experience"
                          className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-800 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Mother Language */}
                <FormField
                  name="mother_lang"
                  render={({ field }) => (
                    <FormItem className="space-y-2 h-full col-span-full">
                      <FormLabel>Mother Language</FormLabel>
                      <FormControl>
                        <Select
                          defaultValue={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-800 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400 outline-none focus-within:outline-none">
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
                  name="other_langs"
                  render={({ field }) => (
                    <FormItem className="space-y-2 h-full col-span-full">
                      <FormLabel>Other Language</FormLabel>
                      <FormControl>
                        <MultiSelect defaultValue={field.value}
                          onValueChange={field.onChange}
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
                  name="doc_1"
                  render={({ field }) => (
                    <FormItem className="space-y-2 h-full col-span-1">
                      <FormLabel>Document (e.g CV)</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept="application/pdf"
                          onChange={(e) => field.onChange(e.target.files)}
                          placeholder="Upload you CV"
                          className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-800 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Upload - Document 2 */}
                <FormField
                  name="doc_2"
                  render={({ field }) => (
                    <FormItem className="space-y-2 h-full col-span-1">
                      <FormLabel>Document (e.g Training)</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept="application/pdf"
                          onChange={(e) => field.onChange(e.target.files)}
                          placeholder="Upload you CV"
                          className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-800 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Upload - Document 3 */}
                <FormField
                  name="doc_3"
                  render={({ field }) => (
                    <FormItem className="space-y-2 h-full col-span-1">
                      <FormLabel>Document (e.g M.A or B.Ed)</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept="application/pdf"
                          onChange={(e) => field.onChange(e.target.files)}
                          placeholder="Upload you CV"
                          className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-800 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Upload - Document 4 */}
                <FormField
                  name="doc_4"
                  render={({ field }) => (
                    <FormItem className="space-y-2 h-full col-span-1">
                      <FormLabel>Document (e.g Teaching Cert.)</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept="application/pdf"
                          onChange={(e) => field.onChange(e.target.files)}
                          placeholder="Upload you CV"
                          className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-800 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400"
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
                  name="preferred_interview_time"
                  render={({ field }) => (
                    <FormItem className="space-y-2 h-full col-span-full sm:col-span-1">
                      <FormLabel>Preferred Interview Time</FormLabel>
                      <FormControl>
                        <Select
                          defaultValue={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-800 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400 outline-none focus-within:outline-none">
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
                  name="expected_salary"
                  render={({ field }) => (
                    <FormItem className="space-y-2 h-full col-span-full sm:col-span-1">
                      <FormLabel>Expected Salary (AED per hour)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          placeholder="AED per hour"
                          className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-800 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* how many hours can you work */}
                <FormField
                  name="work_hours"
                  render={({ field }) => (
                    <FormItem className="space-y-2 h-full col-span-full sm:col-span-1">
                      <FormLabel>How many hours can you work</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          placeholder="e.g 3.5"
                          className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-800 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Employment desire */}
                <FormField
                  // control={form.control}
                  name="employment_desire"
                  render={({ field }) => (
                    <FormItem className="space-y-2 h-full col-span-full sm:col-span-1">
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
                  name="what_make_ideal"
                  render={({ field }) => (
                    <FormItem className="col-span-full h-full">
                      <FormControl>
                        <Textarea
                          placeholder="What makes you an idea candidate?"
                          className="resize-none bg-white text-neutral-800"
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
                  name="how_find_us"
                  render={({ field }) => (
                    <FormItem className="space-y-2 col-span-full h-full">
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

                {/* Declaration */}
                <FormField
                  name="declaration"
                  render={({ field }) => (
                    <FormItem className="col-span-full h-full flex gap-2 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="text-sm font-normal">
                        I declare that the information I have provided in this
                        registration form is true and accurate to the best of my
                        knowledge.
                      </FormLabel>
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
                  onClick={() => validateStep()}
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
