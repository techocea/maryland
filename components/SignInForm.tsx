"use client";

import { z } from "zod";
import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { UserData, userSchema } from "@/app/lib/zodSchema";
import axios from "axios";

const SignInForm = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    resolver: zodResolver(userSchema),
  });

  //Define the form
  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      email: "",
      password: " ",
    },
  });

  const onSubmit = async (data: UserData) => {
    try {
      const response = await axios.post("/api/login", data);

      if (response.data.success) {
        // toast.success(response.data.msg);
        router.push("/welcome");
      } else {
        toast.error(response.data.msg);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
      console.error("[Error logging the user]:", error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 w-full mb-4">
        <div className="flex flex-col gap-4">
          <FormField
            control={control}
            name="email"
            defaultValue=""
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="example@email.com" {...field} />
                </FormControl>
                <FormMessage>{errors.email?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="password"
            defaultValue=""
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="password" {...field} />
                </FormControl>
                <FormMessage>{errors.password?.message}</FormMessage>
              </FormItem>
            )}
          />
        </div>
        <div className="flex w-full">
          <Button type="submit" className="w-full">
            Log In
          </Button>
        </div>
      </form>
      <div className="text-sm text-muted-foreground">
        Not a member?{" "}
        <Link
          href="/sign-up"
          className="text-primary font-semibold hover:underline"
        >
          Sign Up
        </Link>
      </div>
    </Form>
  );
};

export default SignInForm;
