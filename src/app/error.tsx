"use client";
import React, { useEffect } from "react";

interface IErrorProps {
  error: Error;
  reset: () => void;
}

const Error = ({ error, reset }: IErrorProps) => {
  useEffect(() => {
    console.log(error.message);
  }, []);

  return (
    <>
      <h1>에러페이지</h1>
      <button onClick={() => reset()}></button>
    </>
  );
};

export default Error;
