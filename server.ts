import Fastify, { FastifyRequest, FastifyReply } from "fastify";
import cors from '@fastify/cors'


const server = Fastify();

server.register(cors);

server.post("/test", async (request: FastifyRequest, reply: FastifyReply) => {
  return { hello: "world" };
});

server.listen({
  port: 3000,
  host: "0.0.0.0"
}).then((address) => {
  console.log(`server listening on ${address}`);
});
