import * as React from "react";
import { cn } from "@/lib/utils";
import { Dot } from "lucide-react";

function InputOTP(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const { className, ...rest } = props;
  return (
    <input
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
        className
      )}
      {...rest}
    />
  );
}

function InputOTPGroup(props: React.HTMLAttributes<HTMLDivElement>) {
  const { className, ...rest } = props;
  return <div className={cn("flex items-center", className)} {...rest} />;
}

function InputOTPSlot(props: React.HTMLAttributes<HTMLDivElement>) {
  const { className, ...rest } = props;
  return (
    <div
      className={cn(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm first:rounded-l-md first:border-l last:rounded-r-md",
        className
      )}
      {...rest}
    />
  );
}

function InputOTPSeparator(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div role="separator" {...props}>
      <Dot />
    </div>
  );
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
