import { tickets } from "@/db/schema";
import { z } from "zod";

export const insertTicketSchema = z.object({
  id: z.number().optional(),
  customerId: z.number(),
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  completed: z.boolean().default(false),
  tech: z.string().email('Invalid email address').nullable().optional(),
});

export type insertTicketSchemaType = typeof tickets.$inferInsert;
export type selectTicketSchemaType = typeof tickets.$inferSelect;