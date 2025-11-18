import React from "react";
import { ModeToggle } from "../molecules/mode-toggle";

export function Header() {
  return (
    <header className="flex items-center justify-between py-6">
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">📈 BSE News Pulse</h1>
      <ModeToggle />
    </header>
  );
}
