import { AlertButton, LogButton } from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col items-start gap-4">
      <h1 className="text-5xl">Event Handlers</h1>
      <AlertButton message="hola!">Saludar</AlertButton>
      <LogButton message="adios!">Despedirse</LogButton>
    </main>
  )
}