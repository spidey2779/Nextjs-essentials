import { auth, signIn } from "@/auth";
import { LoginForm } from "@/components/client/Form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await auth();
  if (session?.user) {
    redirect("/");
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <Card>
        <CardHeader>
          <CardTitle>Login </CardTitle>
          {/* <CardDescription>Card Description</CardDescription> */}
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <span>Or</span>
          <form
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <Button type="submit" variant={"secondary"}>
              Login with Google
            </Button>
          </form>
          <Link href={"/signup"}>Don&apos;t have an account? SignUp</Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Page;
