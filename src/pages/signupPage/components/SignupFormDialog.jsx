import { useState } from "react";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ChooseRole from "./ChooseRole";


const signupSchema = z.object({
  role: z.enum(["contractor", "bidder"]),
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

export default function SignupFormDialog() {
  const [isTyping, setIsTyping] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState("role");

  const form = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      role: undefined,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      acceptTerms: false,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleRoleSelect = (role) => {
    form.setValue("role", role);
    setStep("details");
  };

  const handleBackToRoleSelection = () => {
    setStep("role");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="px-4 py-2 text-sm font-medium rounded-md bg-black text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2">
          Sign Up
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Create your account</DialogTitle>
          <DialogDescription>
            {step === "role"
              ? "Choose how you'd like to join our platform"
              : "Welcome! Please fill in the details to get started."}
          </DialogDescription>
        </DialogHeader>
        {step === "role" ? (
          <ChooseRole onRoleSelect={handleRoleSelect} />
        ) : (
          <div className="space-y-4">
            <Button
              variant="ghost"
              onClick={handleBackToRoleSelection}
              className="mb-4 p-0"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to role selection
            </Button>
            <Form {...form}>
              <form
                noValidate
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
                onFocus={() => setIsTyping(true)}
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="flex-1 space-y-1.5">
                        <FormLabel>First name</FormLabel>
                        <FormControl>
                          <Input {...field} className="h-9 rounded-lg" />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="flex-1 space-y-1.5">
                        <FormLabel>Last name</FormLabel>
                        <FormControl>
                          <Input {...field} className="h-9 rounded-lg" />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-1.5">
                      <FormLabel>Email address</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          className="h-9 rounded-lg"
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="space-y-1.5">
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            {...field}
                            type={showPassword ? "text" : "password"}
                            className="h-9 rounded-lg pr-10"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="acceptTerms"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <div className="flex space-x-2 items-center">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <label
                          htmlFor="terms"
                          className="text-sm text-gray-500"
                        >
                          Accept terms and conditions
                        </label>
                      </div>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="h-9 w-full rounded-lg text-sm bg-gradient-to-r from-[#020817] to-[#334155]"
                >
                  Create Account
                </Button>
              </form>
            </Form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
