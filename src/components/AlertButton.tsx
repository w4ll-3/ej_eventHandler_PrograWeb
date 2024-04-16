"use client";

import { ReactNode } from "react";
import Button from "./Button";

type Props = {
  children: ReactNode;
  message: string;
}

export default function AlertButton({ children, message }: Props) {
  const handleClick = () => {
    alert(message);
  }

  return (
    <Button onClick={handleClick}>{children}</Button>
  )
}
