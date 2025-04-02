"use client";

import { z } from "zod";
import axios from "axios";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Loader2 } from "lucide-react";
import { toast } from "react-toastify";
import { contactFormSchema, ContactFormData } from "@/app/lib/zodSchema";

const ContactForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      contact: "",
      email: "",
      destination: "",
      area: "",
      mode: "",
    },
  });

  const onSubmit: SubmitHandler<ContactFormData> = async (
    data: ContactFormData
  ) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/contact", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        toast.success("Contact Form Submitted", {
          autoClose: 2000,
        });
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        toast.error(response.data.msg);
      }
    } catch (error) {
      console.error("[CONTACT_FORM_SUBMIT_ERROR]", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8 w-full lg:max-w-md"
      >
        <div className="flex flex-col gap-4">
          <FormField
            control={control}
            name="name"
            defaultValue=""
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage>{errors.name?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="contact"
            defaultValue=""
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact</FormLabel>
                <FormControl>
                  <Input placeholder="072 XXX XXXX" {...field} />
                </FormControl>
                <FormMessage>{errors.contact?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="email"
            defaultValue=""
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="john.doe@example.com" {...field} />
                </FormControl>
                <FormMessage>{errors.email?.message}</FormMessage>
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <FormField
                control={control}
                name="destination"
                render={({ field }) => (
                  <Select onValueChange={field.onChange}>
                    <FormLabel>Destination</FormLabel>
                    <SelectTrigger>
                      <SelectValue placeholder="USA" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USA">USA</SelectItem>
                      <SelectItem value="Australia">Australia</SelectItem>
                      <SelectItem value="Canada">Canada</SelectItem>
                      <SelectItem value="New Zealand">New Zealand</SelectItem>
                      <SelectItem value="United Kingdom">
                        United Kingdom
                      </SelectItem>
                    </SelectContent>
                    <FormMessage>{errors.destination?.message}</FormMessage>
                  </Select>
                )}
              />
            </div>
            <div>
              <FormField
                control={control}
                name="area"
                render={({ field }) => (
                  <Select onValueChange={field.onChange}>
                    <FormLabel>Area of Study</FormLabel>
                    <SelectTrigger>
                      <SelectValue placeholder="Medicine" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Engineering">Engineering</SelectItem>
                      <SelectItem value="Medicine">Medicine</SelectItem>
                      <SelectItem value="Phsycology">Phsycology</SelectItem>
                      <SelectItem value="Business Management">
                        Business Management
                      </SelectItem>
                    </SelectContent>
                    <FormMessage>{errors.area?.message}</FormMessage>
                  </Select>
                )}
              />
            </div>
          </div>
          <div>
            <FormField
              control={control}
              name="mode"
              render={({ field }) => (
                <Select onValueChange={field.onChange}>
                  <FormLabel>Counselling Mode</FormLabel>
                  <SelectTrigger>
                    <SelectValue placeholder="Physical" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Online">Online</SelectItem>
                    <SelectItem value="Physical">Physical</SelectItem>
                  </SelectContent>
                  <FormMessage>{errors.mode?.message}</FormMessage>
                </Select>
              )}
            />
          </div>
        </div>
        <div className="flex w-full">
          <Button type="submit" variant="outline" className="w-full">
            {loading ? (
              <>
                <p>Please Wait</p>
                <Loader2 className="animate-spin transition-all" />
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
