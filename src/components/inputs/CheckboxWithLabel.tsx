"use client";

import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { InputHTMLAttributes } from "react";

type CheckboxWithLabelProps<S> = {
  fieldTitle: string;
  nameInSchema: keyof S & string;
  message: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function CheckboxWithLabel<S>({
  fieldTitle, nameInSchema, message
}: CheckboxWithLabelProps<S>) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={nameInSchema}
      render={({ field }) => (
        <FormItem className="w-full flex flex-row items-center gap-2">
          <FormLabel
            className="text-base w-1/3 mt-2"
            htmlFor={nameInSchema}
          >
            {fieldTitle}
          </FormLabel>
          <div className="flex items-center gap-2">
            <FormControl>
              <Checkbox
                id={nameInSchema}
                {...field}
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <p className="text-sm w-2/3">{message}</p>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}