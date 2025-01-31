"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import googleIcon from "@/assets/google-icon.png";

export default function SignupForm() {
  const [isTyping, setIsTyping] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    acceptTerms: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (!isTyping && value !== "") {
      setIsTyping(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div
        className={`transition-all duration-300 ease-in-out flex ${
          isTyping ? "w-[400px]" : "w-[800px]"
        }`}
      >
        <Card className="w-full rounded-2xl overflow-hidden flex">
          <div
            className={`bg-gray-200 transition-all duration-300 ease-in-out ${
              isTyping ? "w-0 opacity-0" : "w-1/2 opacity-100"
            }`}
          />
          <div className="w-[400px] px-4 py-8 flex-shrink-0">
            <div className="space-y-4">
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 bg-gray-100 rounded-xl" />
                <h1 className="text-xl font-semibold">Create your account</h1>
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

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-1 space-y-1.5">
                    <label className="text-sm font-medium" htmlFor="firstName">
                      First name
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="h-9 rounded-lg"
                    />
                  </div>
                  <div className="flex-1 space-y-1.5">
                    <label className="text-sm font-medium" htmlFor="lastName">
                      Last name
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="h-9 rounded-lg"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium" htmlFor="email">
                    Email address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="h-9 rounded-lg"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium" htmlFor="password">
                    Password
                  </label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleInputChange}
                      required
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
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" name="acceptTerms" />
                  <label htmlFor="terms" className="text-sm text-gray-500">
                    Accept terms and condition
                  </label>
                </div>

                <Button
                  type="submit"
                  className="h-9 w-full rounded-lg text-sm bg-gradient-to-r from-[#020817] to-[#334155]"
                >
                  Continue
                </Button>
              </form>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
