const Fastify = require("fastify");
const cors = require("@fastify/cors");

const server = Fastify();

const prefixPlugin = async (app) => {
  app.register(cors);
 
  app.get("/", async (request, reply) => {
    return { hello: "world" };
  });
}
server.register(prefixPlugin, {prefix: "/example"});

if (require.main === module) {
  server.listen({ port: 3000 }, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  });
} else {
  module.exports = server;
}