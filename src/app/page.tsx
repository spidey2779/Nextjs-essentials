import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { logoutFunction } from "./action/logout";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const session = await auth();
  const user = session?.user;
  console.log(session);
  console.log("home -> user", session?.user?.name);
  console.log("home -> email", session?.user?.email);
  if (!user) {
    redirect("/login");
  }

  return (
    <div>
      this is home
      <form action={logoutFunction}>
        <Button
          type="submit"
          variant={"secondary"}
          className="bg-green-500 text-white hover:bg-green-700"
        >
          logout
        </Button>
      </form>
    </div>
  );
}
