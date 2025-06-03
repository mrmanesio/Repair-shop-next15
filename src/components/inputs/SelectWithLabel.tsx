"use client";

import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SelectHTMLAttributes } from "react";

type Option = {
  id: string;
  description: string;
};

type SelectWithLabelProps<S> = {
  fieldTitle: string;
  nameInSchema: keyof S & string;
  data: Option[];
  className?: string;
} & SelectHTMLAttributes<HTMLSelectElement>;

export default function SelectWithLabel<S>({
  fieldTitle, nameInSchema, data, className,
}: SelectWithLabelProps<S>) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={nameInSchema}
      render={({ field }) => (
        <FormItem>
          <FormLabel
            className="text-base"
            htmlFor={nameInSchema}
          >
            {fieldTitle}
          </FormLabel>
          <Select
            {...field}
            onValueChange={field.onChange}
          >
            <FormControl>
              <SelectTrigger
                id={nameInSchema}
                className={`w-full max-w-xs ${className}`}
              >
                <SelectValue placeholder="Select" />
              </SelectTrigger>
            </FormControl>
              <SelectContent>
                {data.map((option) => (
                  <SelectItem key={`${nameInSchema}_${option.id}`} value={option.id}>
                    {option.description}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
