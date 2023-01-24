"use client";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <h1 className="flex justify-center items-center p-5 text-zinc-200 text-2xl font-bold">
      This Is The Home Page! Everyone can see it.
    </h1>
  );
};

export default HomePage;
