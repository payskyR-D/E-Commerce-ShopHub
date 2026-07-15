import { z } from "zod";

export const checkoutSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters"),

  email: z
    .string()
    .email("Invalid email"),

  phone: z
    .string()
    .regex(/^[0-9]+$/, "Phone must contain numbers only"),

  city: z
    .string()
    .min(2, "City is required"),

  address: z
    .string()
    .min(5, "Address is too short"),

  paymentMethod: z.enum(["cash", "card"]),
},);