"use client";

import { z } from "zod";
import React, { useState } from "react";

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
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { UserData, userSchema } from "@/app/lib/zodSchema";
import Link from "next/link";
import { Loader2 } from "lucide-react";

const SignUpForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
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
      setIsLoading(true);
      const response = await axios.post("/api/register", data);

      if (response.data.success) {
        //toast.success(response.data.msg);
        router.push("/sign-in");
      } else {
        toast.error(response.data.msg);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
      console.error("[Error registering the user]:", error);
    } finally {
      setIsLoading(false);
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
          <Button disabled={isLoading} type="submit" className="w-full">
            {isLoading ? (
              <div className="flex items-center justify-center gap-x-3">
                Please Wait <Loader2 className="transition-all animate-spin" />
              </div>
            ) : (
              "Register"
            )}
          </Button>
        </div>
      </form>
      <div className="text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link
          href="/sign-in"
          className="text-primary font-semibold hover:underline"
        >
          Sign In
        </Link>
      </div>
    </Form>
  );
};

export default SignUpForm;
