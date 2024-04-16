"use client";

import { ReactNode, MouseEvent } from 'react';
import Button from "./Button";

type Props = {
  children: ReactNode;
  message: string;
}

export default function LogButton({ children, message }: Props) {
  const handleClick = (event?: MouseEvent<HTMLButtonElement>) => {
    console.log(message);
    console.log("Botón: ", event?.currentTarget);
  }

  return (
    <Button onClick={handleClick}>{children}</Button>
  )
}
