"use client";

import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { InputHTMLAttributes } from "react";

type InputWithLabelProps<S> = {
  fieldTitle: string;
  nameInSchema: keyof S & string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function InputWithLabel<S>({
  fieldTitle, nameInSchema, className, ...props
}: InputWithLabelProps<S>) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={nameInSchema}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel
            className="text-base font-medium"
            htmlFor={field.name}
          >
            {fieldTitle}
          </FormLabel>
          <FormControl>
            <Input
              id={nameInSchema}
              className={`w-full max-w-xs disabled:text-blue-500 dark:disabled:text-green-400 disabled:opacity-75 ${className}`}
              {...props}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
