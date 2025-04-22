import Fastify from "fastify";
import { z } from "zod";
import { query } from "./db";

const fastify = Fastify();

const offsetSchema = z.object({
  page: z.coerce.number().min(1),
  perPage: z.coerce.number().min(10).max(50),
});

fastify.get("/posts/offset", async (request, reply) => {
  const { success, data, error } = offsetSchema.safeParse(request.query);

  if (!success) {
    return reply.code(400).send({
      error: error.issues,
    });
  }
  const { page, perPage } = data;

  const offset = (page - 1) * perPage;

  const [
    {
      rows: [total],
    },
    { rows: posts },
  ] = await Promise.all([
    query("SELECT COUNT(id) FROM posts"),
    query("SELECT * FROM posts OFFSET $1 LIMIT $2", [offset, perPage]),
  ]);

  const postCount = Number(total.count);

  reply.send({
    postCount,
    posts,
  });
});

fastify.get("/posts", async (request, reply) => {
  const { rows: posts } = await query("SELECT * FROM posts");

  reply.send({
    posts: posts,
  });
});

fastify.post("/posts", async (request, reply) => {
  const schema = z.object({
    title: z.string().min(1).max(255),
    content: z.string().min(1),
  });

  const { success, data, error } = schema.safeParse(request.body);

  if (!success) {
    return reply.code(400).send({
      error: error.issues,
    });
  }

  const {
    rows: [post],
  } = await query(
    `
      INSERT INTO posts (title, content)
      VALUES ($1, $2)
      RETURNING *
    `,
    [data.title, data.content]
  );

  reply.code(201).send({
    post,
  });
});

fastify
  .listen({ port: 3000 })
  .then(() => {
    console.log("Server is running at http://localhost:3000");
  })
  .catch(console.error);
