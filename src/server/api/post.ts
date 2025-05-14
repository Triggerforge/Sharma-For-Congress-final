import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({
      title: z.string(),
      slug: z.string(),
      content: z.string().optional(),
      videoUrl: z.string().optional(),
      isPublished: z.boolean().default(false),
    }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.post.create({ data: input });
    }),

  update: protectedProcedure
    .input(z.object({
      id: z.number(),
      title: z.string(),
      slug: z.string(),
      content: z.string().optional(),
      videoUrl: z.string().optional(),
      isPublished: z.boolean(),
    }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.post.update({
        where: { id: input.id },
        data: input,
      });
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.post.delete({ where: { id: input.id } });
    }),

  list: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.post.findMany({ where: { isPublished: true }, orderBy: { createdAt: "desc" } });
  }),

  get: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.post.findUnique({ where: { slug: input.slug } });
    }),

  listAll: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db.post.findMany({ orderBy: { createdAt: "desc" } });
  }),
});
