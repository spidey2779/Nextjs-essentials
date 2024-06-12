"use server";

import { signOut } from "@/auth";

const logoutFunction = async () => {
  await signOut({
    redirect: true,
    redirectTo: "/login",
  });
};

export { logoutFunction };
