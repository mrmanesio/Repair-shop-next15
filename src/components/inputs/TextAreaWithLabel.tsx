"use client";

import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { TextareaHTMLAttributes } from "react";

type TextAreaWithLabelProps<S> = {
  fieldTitle: string;
  nameInSchema: keyof S & string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function TextAreaWithLabel<S>({ fieldTitle, nameInSchema, ...props }: TextAreaWithLabelProps<S>) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={nameInSchema}
      render={({ field }) => (
        <FormItem>
          <FormLabel
            className="text-base mb-2"
            htmlFor={field.name}
          >
            {fieldTitle}
          </FormLabel>
          <FormControl>
            <Textarea
              id={field.name}
              className={`w-full max-w-xs disabled:text-blue-500 dark:disabled:text-green-400 disabled:opacity-75 ${props.className}`}
              {...field}
              {...props}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}