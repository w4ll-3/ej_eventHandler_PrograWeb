'use client';

import { MouseEvent, ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: (event?: MouseEvent<HTMLButtonElement>) => void;
}

export default function Button( {children, onClick}: Props ) {
  return (
    <button onClick={onClick} type="button">
      {children}
    </button>
  );
}

