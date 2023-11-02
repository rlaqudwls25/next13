"use client";
import React from "react";
import { useRouter } from "next/navigation";
const HomeButton = () => {
  const router = useRouter();
  const goTohome = () => {
    router.push("/");
  };
  return (
    <>
      <button onClick={goTohome}>홈으로</button>
    </>
  );
};

export default HomeButton;
