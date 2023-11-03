"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/detail.module.scss";
const HomeButton = () => {
  const router = useRouter();
  const goTohome = () => {
    router.push("/");
  };
  return (
    <>
      <button className={styles.homeButton} onClick={goTohome}>
        홈으로
      </button>
    </>
  );
};

export default HomeButton;
