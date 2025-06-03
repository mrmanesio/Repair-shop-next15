'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { insertTicketSchema, type insertTicketSchemaType, type selectTicketSchemaType } from "@/zod-schema/ticket";
import { selectCustomerSchemaType } from "@/zod-schema/customer";
import InputWithLabel from "@/components/inputs/InputWithLabel";
import TextAreaWithLabel from "@/components/inputs/TextAreaWithLabel";

import { Button } from "@/components/ui/button";
import CheckboxWithLabel from "@/components/inputs/CheckboxWithLabel";
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
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-1 md:flex-row md:gap-8"
        >
          <div className="flex flex-col gap-4 w-full max-w-xs">
            <InputWithLabel<insertTicketSchemaType>
              fieldTitle="Title"
              nameInSchema="title"
            />
            <InputWithLabel<insertTicketSchemaType>
              fieldTitle="Tech"
              nameInSchema="tech"
              disabled
            />
            <CheckboxWithLabel<insertTicketSchemaType>
              fieldTitle="Completed"
              nameInSchema="completed"
              message="Yes"
            />
            <div className="mt-4 space-y-2">
              <h3 className="text-lg">Customer info</h3>
              <hr className="w-4/5" />
              <p className="text-sm">
                {customer.firstName} {customer.lastName}
              </p>
              <p className="text-sm">
                {customer.address1}
              </p>
              {customer.address2 ? <p className="text-sm">
                {customer.address2}
              </p> : null}
              <p className="text-sm">
                {customer.city}, {customer.state} {customer.zip}
              </p>
              <hr className="w-4/5" />
              <p className="text-sm">{customer.email}</p>
              <p className="text-sm">{customer.phone}</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full max-w-xs">
            <TextAreaWithLabel<insertTicketSchemaType>
              fieldTitle="Description"
              nameInSchema="description"
              className="w-full h-96"
            />

            <div className="flex gap-2">
              <Button
                type="submit"
                className="w-3/4 h-10"
                variant="default"
                title="Save Ticket"
                disabled={!form.formState.isValid}
              >
                Save
              </Button>
              <Button
                type="button"
                className="h-10"
                variant="destructive"
                title="Reset"
                onClick={() => form.reset(defaultValues)}
              >
                Reset
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
