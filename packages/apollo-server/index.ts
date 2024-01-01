import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from "./src/typeDefs.ts";
import resolvers from "./src/resolvers.ts";

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const port = process.env["PORT"] ? Number.parseInt(process.env["PORT"], 10) : 4000;

await startStandaloneServer(server, {
    listen: { port },
});

console.log(`🚀 Server ready at: http://localhost:${port}/graphql`);
