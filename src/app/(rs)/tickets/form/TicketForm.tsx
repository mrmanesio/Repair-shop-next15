'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { insertTicketSchema, type insertTicketSchemaType, type selectTicketSchemaType } from "@/zod-schema/ticket";
import { selectCustomerSchemaType } from "@/zod-schema/customer";

type TicketFormProps = {
  customer: selectCustomerSchemaType;
  ticket?: selectTicketSchemaType;
}

export default function TicketForm({ customer, ticket }: TicketFormProps) {
  const defaultValues: insertTicketSchemaType = {
    id: ticket?.id ?? 0,
    customerId: ticket?.customerId ?? customer.id,
    title: ticket?.title ?? "",
    description: ticket?.description ?? "",
    tech: ticket?.tech ?? "new-ticket@example.com",
    completed: ticket?.completed ?? false,
  };

  const form = useForm<insertTicketSchemaType>({
    mode: "onBlur",
    resolver: zodResolver(insertTicketSchema),
    defaultValues,
  });
  
  async function onSubmit(data: insertTicketSchemaType) {
    console.log(data);
  }

  return (
    <div className="flex flex-col gap-1 sm:px-8">
      <div>
        <h2 className="text-2xl font-bold">{
          ticket?.id ? "Edit Ticket" : "New Ticket"
        }</h2>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-1 sm:flex-row sm:gap-8">
          <p>{JSON.stringify(form.getValues())}</p>
        </form>
      </Form>
    </div>
  );
}
