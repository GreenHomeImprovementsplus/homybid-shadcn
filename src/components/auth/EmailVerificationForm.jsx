"use client";

import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function EmailVerificationForm({
  email = "johndoe@email.com",
  onVerify,
  onResend,
}) {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [countdown, setCountdown] = useState(21);
  const inputs = useRef([]);

  const handleChange = (index, value) => {
    if (value.length > 1) return; // Prevent multiple characters

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Move to next input if value is entered
    if (value && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      // Move to previous input on backspace if current input is empty
      inputs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    const newCode = [...code];

    pastedData.split("").forEach((char, index) => {
      if (index < 6) newCode[index] = char;
    });

    setCode(newCode);
  };

  const handleVerify = () => {
    const verificationCode = code.join("");
    if (verificationCode.length === 6) {
      onVerify?.(verificationCode);
    }
  };

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [countdown]);

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="pt-6 px-6 pb-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-12 h-12 bg-gray-100 rounded-lg mb-2" />

          <h2 className="text-2xl font-semibold text-gray-900">
            Verify your email
          </h2>

          <p className="text-gray-500">
            Enter the verification code sent to your email
          </p>

          <p className="text-gray-900 font-medium pb-2">{email}</p>

          <div className="flex gap-2 justify-center w-full mb-4">
            {code.map((digit, index) => (
              <Input
                key={index}
                type="text"
                inputMode="numeric"
                pattern="\d*"
                maxLength={1}
                value={digit}
                ref={(el) => (inputs.current[index] = el)}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className="w-12 h-12 text-center text-lg font-semibold"
              />
            ))}
          </div>

          <button
            onClick={onResend}
            disabled={countdown > 0}
            className="text-gray-500 text-sm hover:text-gray-700"
          >
            Didn't receive a code? {countdown > 0 && `(${countdown}s)`}
          </button>

          <Button
            className="w-full bg-gray-900 hover:bg-gray-800 text-white"
            onClick={handleVerify}
          >
            Verify
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

EmailVerificationForm.propTypes = {
  email: PropTypes.string,
  onVerify: PropTypes.func,
  onResend: PropTypes.func,
};
