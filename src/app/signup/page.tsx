import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { connectToDB } from "@/lib/utils";
import { User } from "@/models/userModel";
import { hash } from "bcryptjs";
import Link from "next/link";
import { redirect } from "next/navigation";

const Page = () => {
  const signUp = async (formData: FormData) => {
    "use server";
    const name = formData.get("name") as string | undefined;
    const email = formData.get("email") as string | undefined;
    const password = formData.get("password") as string | undefined;
    if (!name || !email || !password) {
      throw new Error("Please provide all fields");
    }
    //connect with the database
    await connectToDB();
    const user = await User.findOne({ email });
    if (user) {
      throw new Error("user already exists");
    }
    const hashedPassword = await hash(password, 10);
    await User.create({
      name,
      email,
      password: hashedPassword,
    });
    redirect("/login");
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <Card>
        <CardHeader>
          <CardTitle>Sign Up </CardTitle>
          {/* <CardDescription>Card Description</CardDescription> */}
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4" action={signUp}>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" type="email" name="email" />
            <Input placeholder="Password" type="password" name="password" />
            <Button type="submit">Signup</Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <span>Or</span>
          <form action="">
            <Button type="submit" variant={"secondary"}>
              Login with Google
            </Button>
          </form>
          <Link href={"/login"}>Already have an account? Login</Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Page;
