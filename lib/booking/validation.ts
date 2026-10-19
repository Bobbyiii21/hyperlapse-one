import { z } from "zod";
const clean = z
  .string()
  .max(2000)
  .refine(
    (v) => !/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(v),
    "Control characters are not allowed",
  );
const email = z
  .email()
  .max(254)
  .refine((v) =>
    /^[a-zA-Z0-9.!#$%&'*+\-/=?^_`{|}~]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v),
  );
const uri = z
  .url()
  .max(2048)
  .refine(
    (v) =>
      !/[\r\n]/.test(v) && ["https:", "http:"].includes(new URL(v).protocol),
    "Use an HTTP or HTTPS URL",
  );
export const bookingSchema = z
  .object({
    slug: z.string().max(256),
    requestId: z.uuid(),
    website: z.string().max(500).optional(),
    start: z.iso.datetime({ offset: true }),
    end: z.iso.datetime({ offset: true }),
    name: clean.trim().min(1).max(100),
    email,
    summary: clean.trim().min(1).max(200),
    description: clean.optional(),
    location: clean.max(300).optional(),
    url: uri.optional(),
    attendees: z.array(email).max(5).default([]),
    comment: clean.optional(),
    categories: z.array(clean.max(50)).max(10).default([]),
    priority: z.number().int().min(0).max(9).default(0),
    classification: z.enum(["PRIVATE", "CONFIDENTIAL"]).default("PRIVATE"),
    status: z.literal("CONFIRMED").default("CONFIRMED"),
    transparency: z.literal("OPAQUE").default("OPAQUE"),
    geo: z
      .tuple([z.number().min(-90).max(90), z.number().min(-180).max(180)])
      .optional(),
    attachments: z.array(uri).max(3).default([]),
    alarm: z
      .object({
        minutes: z.number().int().min(0).max(10080),
        action: z.enum(["DISPLAY", "EMAIL"]),
        attendees: z.array(email).min(1).max(5).optional(),
      })
      .strict()
      .optional(),
    allDay: z.literal(false).optional(),
    rrule: z.literal("").optional(),
    rdate: z.array(z.never()).max(0).optional(),
    exdate: z.array(z.never()).max(0).optional(),
  })
  .strict();
export type BookingInput = z.infer<typeof bookingSchema>;
