"use client";

import { AlertButton, LogButton } from "@/components";
import { MouseEvent } from "react";

export default function Home() {
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    console.log("Hola!")
    console.log(event.target)
  }
  return (
    <main className="flex flex-col items-start gap-4">
      <h1 className="text-5xl">Event Handlers</h1>
      <div onClick={handleClick} className="bg-gray-500 p-8 flex gap-4">
        <AlertButton message="hola!">Saludar</AlertButton>
        <LogButton message="adios!">Despedirse</LogButton>
      </div>
    </main>
  )
}