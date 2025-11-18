import React from "react";
import { Search } from "lucide-react";
import { Input } from "../ui/input";

export function SearchBar({ value, onChange, placeholder = "Search news by company or keyword..." }) {
  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      <Input
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className="pl-10 rounded-2xl shadow focus-visible:ring-primary"
      />
    </div>
  );
}
