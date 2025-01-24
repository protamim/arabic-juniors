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
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { Progress } from "@/components/ui/progress";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

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
  classStartTime: z
    .string()
    .refine((time) => /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/.test(time), {
      message: "Invalid time format. Use HH:mm (24-hour format)",
    }),
  howFindUs: z.string(),
});

const MultiStepRegistrationForm = () => {
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
      classStartTime: undefined,
      howFindUs: "",
    },
  });

  const validateStep = async () => {
    const isValid = await methods.trigger([
      "email",
      "phoneNumber",
      "firstName",
      "lastName",
      "grade",
    ]); // Validate specific fields
    if (isValid) {
      next(); // Move to the next step if valid
    } else {
      console.log("Validation failed:", methods.formState.errors);
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    try {
      // Now loading
      setIsLoading(true);

      const registerURL = process.env.NEXT_PUBLIC_API_BASE_URL + "/register";
      const { firstName, email } = values;

      const res = await fetch(registerURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, email }),
      });

      if (!res.ok) {
        throw new Error(`Registration response error: ${res.status}`);
      }

      const serverResponse = await res.json();
      // finished loading
      setIsLoading(false);

      // toast notification
      toast(serverResponse.message);
      // redirect to welcome page after successfull
      router.push("/welcome");
    } catch (error) {
      console.log("registration failed:", error);
    }
  };

  return (
    <React.Fragment>
      <div aria-label="progess-wrapper" className="mb-6">
        <Progress value={(current / total) * 100} className="w-full" />
      </div>

      <Form {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="registration-form"
        >
          <Steps>
            {/* FIRST STEP START */}
            <div
              aria-label="first-step"
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-7 gap-y-5"
            >
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

              {/* Phone Number Field */}
              <FormField
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem className="space-y-2 col-span-full">
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <PhoneInput
                        defaultCountry="AE"
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
              />

              {/* Grade */}
              <FormField
                name="grade"
                render={({ field }) => (
                  <FormItem className="space-y-2 col-span-full">
                    <FormLabel>Class Grade</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={(value) => field.onChange(Number(value))}
                      >
                        <SelectTrigger className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-500 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-pink-400 outline-none focus-within:outline-none">
                          <SelectValue placeholder="Select grade" />
                        </SelectTrigger>
                        <SelectContent>
                          {[...Array(12)].map((_, i) => (
                            <SelectItem key={i + 1} value={(i + 1).toString()}>
                              {i + 1}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
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
              className="grid grid-cols-2 gap-x-7 gap-y-10"
            >
              {/* How Many Joining */}
              <FormField
                name="howManyJoin"
                render={({ field }) => (
                  <FormItem className="col-span-full">
                    <FormLabel className="text-neutral-800 font-semibold text-lg sm:text-2xl">
                      How many students will join?
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                        className="grid grid-cols-5 gap-y-5 gap-x-3 place-items-center sm:gap-x-10"
                      >
                        {["1", "2", "3", "4", "5"].map((option) => (
                          <FormItem
                            key={option}
                            className="radio-item-wrapper w-10 h-10 sm:w-20 sm:h-20 space-y-0 flex items-center justify-center relative bg-neutral-100 rounded-full overflow-hidden"
                          >
                            <FormControl>
                              <RadioGroupItem
                                value={option}
                                className="absolute top-0 left-0 w-full h-full opacity-0"
                              />
                            </FormControl>
                            <FormLabel
                              htmlFor={`join-${option}`}
                              className="text-lg sm:text-3xl font-semibold text-neutral-800"
                            >
                              {option}
                            </FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Preferred Teacher */}
              <FormField
                name="preferredTeacher"
                render={({ field }) => (
                  <FormItem className="col-span-full">
                    <FormLabel className="text-neutral-800 font-semibold text-lg sm:text-2xl">
                      Preferred Teacher
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                        className="flex items-center gap-y-5 gap-x-4 sm:gap-x-10"
                      >
                        {["Male", "Female", "Others"].map((option) => (
                          <FormItem
                            key={option}
                            className="radio-item-wrapper w-28 sm:h-28 py-2 px-3 space-y-0 flex items-center justify-center relative bg-neutral-100 rounded-lg overflow-hidden"
                          >
                            <FormControl>
                              <RadioGroupItem
                                value={option}
                                id={`teacher-${option}`}
                                className="absolute top-0 left-0 w-full h-full opacity-0"
                              />
                            </FormControl>
                            <FormLabel
                              htmlFor={`teacher-${option}`}
                              className="text-base sm:text-lg font-normal sm:font-semibold text-neutral-800"
                            >
                              {option}
                            </FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div
                aria-label="class-date"
                className="col-span-full grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-6 items-center justify-center"
              >
                <h4 className="text-neutral-800 font-semibold text-lg sm:text-2xl col-span-full">
                  When do you want to start the classes
                </h4>
                {/* class start date */}
                <FormField
                  control={methods.control}
                  name="classStartDate"
                  render={({ field }) => (
                    <FormItem className="space-y-2 h-full">
                      <FormLabel>Class Start Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "pl-3 h-12 text-left font-normal mt-0 flex w-full",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Class Start Time */}
                <FormField
                  name="classStartTime"
                  render={({ field }) => (
                    <FormItem className="space-y-2 h-full">
                      <FormLabel>Class Start Time</FormLabel>
                      <FormControl>
                        <Input
                          type="time"
                          {...field}
                          value={field.value || "12:00"}
                          className="border border-[#DCDCDC] rounded-lg bg-white h-12 py-3 px-4 flex text-base font-normal text-neutral-500 placeholder:text-base"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* How Find US Teacher */}
              <FormField
                name="howFindUs"
                render={({ field }) => (
                  <FormItem className="col-span-full">
                    <FormLabel className="text-neutral-800 font-semibold text-lg sm:text-2xl">
                      How did your find us?
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        value={field.value}
                        defaultValue="Friends"
                        onValueChange={field.onChange}
                        className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-5 gap-x-4 sm:gap-x-9"
                      >
                        {[
                          "Friends",
                          "Social Media",
                          "Email",
                          "Google",
                          "Other",
                        ].map((option) => {
                          const parseValue = option
                            .replace(" ", "-")
                            .toLocaleLowerCase();
                          return (
                            <FormItem
                              key={parseValue}
                              className="radio-item-wrapper space-y-0 flex px-4 py-2 items-center justify-center relative bg-neutral-100 rounded-lg overflow-hidden"
                            >
                              <FormControl>
                                <RadioGroupItem
                                  value={parseValue}
                                  className="absolute top-0 left-0 w-full h-full opacity-0"
                                />
                              </FormControl>
                              <FormLabel
                                htmlFor={`find-${parseValue}`}
                                className="text-lg text-center font-semibold text-neutral-800"
                              >
                                {option}
                              </FormLabel>
                            </FormItem>
                          );
                        })}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* SECOND STEP END */}
          </Steps>

          <div className="navigation mt-14 flex items-center gap-x-4 max-w-screen-sm ml-auto">
            {hasPrev && (
              <Button
                type="button"
                onClick={prev}
                variant={"outline"}
                className="flex-grow-0 flex-shrink-0 basis-auto"
              >
                Back
              </Button>
            )}

            {hasNext ? (
              <Button
                type="button"
                onClick={validateStep}
                className="rounded-lg flex-1"
              >
                Next
              </Button>
            ) : (
              isLast && (
                <Button
                  type="submit"
                  variant="default"
                  className="flex-1 rounded-lg"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <LoaderCircle className="animate-spin" /> Please Wait
                    </>
                  ) : (
                    'Submit'
                  )}
                </Button>
              )
            )}
          </div>
        </form>
      </Form>
    </React.Fragment>
  );
};

export default MultiStepRegistrationForm;
