'use client';

import { MouseEvent, ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: (event?: MouseEvent<HTMLButtonElement>) => void;
}

export default function Button( {children, onClick}: Props ) {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onClick(event);
    console.log("Hola!")
    console.log(event.target)
  }

  return (
    <button className="bg-emerald-500" onClick={handleClick} type="button">
      {children}
    </button>
  );
}

