import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground ">
      <div className="container flex flex-wrap items-center justify-center px-4 py-8 mx-auto  lg:justify-between">
        <div className="flex flex-wrap justify-center">
          <ul className="flex items-center space-x-4">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/about"}>Project</Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-center space-x-4 mt-4 lg:mt-0">
          <Link href={""}>
            <i className="fa-brands fa-facebook" />
          </Link>
          <Link href={""}>
            <i className="fa-brands fa-twitter" />
          </Link>
          <Link href={""}>
            <i className="fa-brands fa-instagram" />
          </Link>
          <Link href={""}>
            <i className="fa-brands fa-linkedin" />
          </Link>
        </div>
      </div>
      <div className="pb-5">
        <p className="text-center text-sm">
          @2024 All rights reserved by your website.
        </p>
      </div>
    </footer>
  );
}
