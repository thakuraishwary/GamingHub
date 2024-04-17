"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const Header = () => {

  return (
    <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-900">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <Link href="/" className="flex items-center">
                  <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Gaming Hub</span>
                </Link>
                <div className="flex items-center lg:order-2">
                  <Link href="/dashboard"><Button variant="primary" className="dark:text-neutral-50">Dashboard</Button></Link>
                </div>
            </div>
        </nav>
        <Separator className="dark:bg-gray-500" />
    </header>
  )
};

export default Header;
