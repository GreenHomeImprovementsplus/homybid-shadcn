"use client";

import { useState } from "react";
import { ChevronRight, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import googleIcon from "@/assets/google-icon.png";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailEntered, setIsEmailEntered] = useState(false);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsEmailEntered(true);
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="rounded-xl shadow-lg border">
      <Card className="w-[400px] rounded-t-xl rounded-b-none p-4 shadow-none border-none">
        <div className="space-y-3">
          <div className="flex flex-col items-center space-y-3">
            <div className="w-12 h-12 bg-gray-100 rounded-xl" />
            <h1 className="text-xl text-zinc-800 font-semibold">
              Sign in to Homybid
            </h1>
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
            <form onSubmit={handleEmailSubmit} className="space-y-6">
              <div className="space-y-1.5">
                <label className="text-sm font-medium" htmlFor="email">
                  Email address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-9 rounded-lg"
                />
              </div>
              <Button
                type="submit"
                className="w-full h-9 rounded-lg text-sm transition-all duration-300 bg-gradient-to-r from-[#020817] to-[#334155] hover:from-[#020817] hover:to-[#020817]"
              >
                <span className="text-sm font-normal">Continue</span>
                <ChevronRight />
              </Button>
            </form>
          ) : (
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-sm font-medium" htmlFor="email">
                  Email address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                    type={showPassword ? "text" : "password"}
                    required
                    className="h-9 rounded-lg"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff
                        className="h-4 w-4 text-gray-500"
                        aria-hidden="true"
                      />
                    ) : (
                      <Eye
                        className="h-4 w-4 text-gray-500"
                        aria-hidden="true"
                      />
                    )}
                  </Button>
                </div>
              </div>
              <Button
                type="submit"
                className="h-9 w-full rounded-lg text-sm bg-gradient-to-r from-[#020817] to-[#334155]"
              >
                Log in
              </Button>
            </form>
          )}
        </div>
      </Card>
      <div className={"bg-gray-100 rounded-b-xl p-3"}>
        <p className="text-center text-xs text-gray-500">
          Don't have an account?{" "}
          <a href="/signup" className="text-[#14162E] hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
