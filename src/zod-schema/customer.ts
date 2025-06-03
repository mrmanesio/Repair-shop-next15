import { customers } from "@/db/schema";
import { z } from "zod";

export const insertCustomerSchema = z.object({
  id: z.number().optional(),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\d{10}$/, 'Invalid phone number'),
  address1: z.string().min(1, 'Address is required'),
  address2: z.string().nullable().optional(),
  city: z.string().min(1, 'City is required'),
  state: z.string().length(2, 'State must be 2 characters'),
  zip: z.string().regex(/^\d{5}(-\d{4})?$/, 'Invalid zip code'),
  notes: z.string().nullable().optional(),
  active: z.boolean().default(true),
});

export type insertCustomerSchemaType = typeof customers.$inferInsert;
export type selectCustomerSchemaType = typeof customers.$inferSelect;