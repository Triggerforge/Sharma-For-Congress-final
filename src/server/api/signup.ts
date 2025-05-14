import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { db } from "~/server/db";

export const signupRouter = createTRPCRouter({
  submit: publicProcedure
    .input(
      z.object({
        first: z.string().min(1),
        last: z.string().min(1),
        email: z.string().email(),
        address: z.string().min(1),
        city: z.string().min(1),
        state: z.string().min(1),
        zip: z.string().min(1),
        phone: z.string().optional(),
        helpTypes: z.string(), // Expect a comma-separated string
      })
    )
    .mutation(async ({ input }) => {
      await db.volunteer.create({
        data: {
          first: input.first,
          last: input.last,
          email: input.email,
          address: input.address,
          city: input.city,
          state: input.state,
          zip: input.zip,
          phone: input.phone ?? "",
          helpTypes: input.helpTypes, // Save the string directly
        },
      });
      return { success: true };
    }),
});
