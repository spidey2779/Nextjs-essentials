"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const navLinks = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/posts",
    label: "Posts",
  },
  {
    path: "/create-post",
    label: "Create post",
  },
];
const Header = () => {
  const pathName = usePathname();
  return (
    <header className="flex justify-between items-center py-4 px-7 border-b">
      <Link href={"/"}>
        <Image
          src={"/blackspider.png"}
          width={20}
          height={20}
          alt="Logo"
          className="w-[35px] h-[35px]"
        />
      </Link>
      <nav>
        <ul className="flex gap-x-5 text-[14px]">
          {navLinks.map((navLink) => (
            <li key={navLink.label}>
              <Link
                className={`${
                  pathName === navLink.path ? "text-zinc-900 font-bold" : "text-zinc-400"
                }`}
                href={navLink.path}
              >
                {navLink.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
