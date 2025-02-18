"use client";

import { useState } from "react";
import { ChevronRight, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import googleIcon from "@/assets/google-icon.png";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const emailSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailEntered, setIsEmailEntered] = useState(false);

  const emailForm = useForm({
    resolver: zodResolver(emailSchema),
    defaultValues: { email: "" },
  });

  const loginForm = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onEmailSubmit = (data) => {
    setIsEmailEntered(true);
    loginForm.setValue("email", data.email);
  };

  const onLoginSubmit = (data) => {
    console.log(data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Sign In</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Sign in to Homybid</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          <div className="flex flex-col items-center space-y-3">
            <div className="w-12 h-12 bg-gray-100 rounded-xl" />
            <p className="text-sm text-gray-500">
              Welcome! Please fill in the details to get started.
            </p>
          </div>

          <Button
            variant={"outline"}
            className="h-9 rounded-lg shadow-sm border w-full flex items-center justify-center gap-3 text-base font-normal"
          >
            <img src={googleIcon} alt="Google" className="size-4" />
            <span className={"text-sm font-medium text-sl"}>Google</span>
          </Button>

          <div className="relative flex items-center justify-center">
            <div className="absolute w-full border-t border-gray-200" />
            <span className="relative bg-white px-4 text-sm text-gray-500">
              or
            </span>
          </div>

          {!isEmailEntered ? (
            <Form {...emailForm}>
              <form
                noValidate
                onSubmit={emailForm.handleSubmit(onEmailSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={emailForm.control}
                  name="email"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel>Email address</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          className={cn(
                            "h-9 rounded-lg",
                            fieldState.error &&
                              "border-red-500 focus-visible:ring-red-500"
                          )}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full h-9 rounded-lg text-sm transition-all duration-300 bg-gradient-to-r from-[#020817] to-[#334155] hover:from-[#020817] hover:to-[#020817]"
                >
                  <span className="text-sm font-normal">Continue</span>
                  <ChevronRight />
                </Button>
              </form>
            </Form>
          ) : (
            <Form {...loginForm}>
              <form
                noValidate
                onSubmit={loginForm.handleSubmit(onLoginSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={loginForm.control}
                  name="email"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel>Email address</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          className={cn(
                            "h-9 rounded-lg",
                            fieldState.error &&
                              "border-red-500 focus-visible:ring-red-500"
                          )}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={loginForm.control}
                  name="password"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            {...field}
                            type={showPassword ? "text" : "password"}
                            className={cn(
                              "h-9 rounded-lg",
                              fieldState.error &&
                                "border-red-500 focus-visible:ring-red-500"
                            )}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4 text-gray-500" />
                            ) : (
                              <Eye className="h-4 w-4 text-gray-500" />
                            )}
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="h-9 w-full rounded-lg text-sm bg-gradient-to-r from-[#020817] to-[#334155]"
                >
                  Log in
                </Button>
              </form>
            </Form>
          )}
        </div>
        <div className={"bg-gray-100 rounded-b-xl p-3"}>
          <p className="text-center text-xs text-gray-500">
            Don't have an account?{" "}
            <a href="/signup" className="text-[#14162E] hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
