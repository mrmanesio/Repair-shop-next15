"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";
import { ArrowLeftIcon } from "lucide-react";

type BackButtonProps = {
  title: string;
  className?: string;
  variant?: "default" | "outline" | "ghost" | "link" | "destructive" | "secondary" | null | undefined;
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function BackButton({ title, className, variant, ...props }: BackButtonProps) {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.back()}
      className={cn("bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-2", className)}
      title={title}
      {...props}
      variant={variant}
      aria-label="Back"
    >
      <ArrowLeftIcon className="w-4 h-4" />
    </Button>
  );
}