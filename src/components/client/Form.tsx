"use client";

import { toast } from "sonner";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { credentialsLogin } from "@/app/action/login";
import { redirect } from "next/navigation";

const LoginForm = () => {
  return (
    <form
      className="flex flex-col gap-4"
      action={async (formData) => {
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        if (!email || !password) {
          toast.error("Please provide all required fields");
          return;
        }
        const toastId = toast.loading("Logging in");
        const error = await credentialsLogin(email, password);
        if (!error) {
          toast.success("Login successful", {
            id: toastId,
          });
          redirect("/");
        } else {
          toast.error(String(error), {
            id: toastId,
          });
        }
      }}
    >
      <Input placeholder="Email" type="email" name="email" />
      <Input placeholder="Password" type="password" name="password" />
      <Button type="submit">Login</Button>
    </form>
  );
};

export { LoginForm };
