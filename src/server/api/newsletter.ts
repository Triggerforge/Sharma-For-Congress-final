import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { db } from "~/server/db";

export const newsletterRouter = createTRPCRouter({
  submit: publicProcedure
    .input(
      z.object({
        first: z.string().min(1),
        last: z.string().min(1),
        email: z.string().email(),
        zip: z.string().min(1),
        phone: z.string().optional().nullable(),
      })
    )
    .mutation(async ({ input }) => {
      await db.NewsletterSignup.create({
        data: {
          first: input.first,
          last: input.last,
          email: input.email,
          zip: input.zip,
          phone: input.phone ?? null,
        },
      });

      return { message: "Newsletter signup successful" };
    }),
});
