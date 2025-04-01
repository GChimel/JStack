import Fastify from "fastify";

const fastify = Fastify();

fastify
  .listen({ port: 3000 })
  .then(() => {
    console.log("Server is running at http://localhost:3000");
  })
  .catch(console.error);
