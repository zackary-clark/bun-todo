import { Book, Resolvers, Todo } from "../generated/schema.ts";
import { dateScalar } from "./dateScalar";

const books: Book[] = [
    {
        title: 'The Awakening - more edited',
        author: 'Kate Chopin',
    },
    {
        title: 'City of Glass',
        author: 'Paul Auster',
    },
];

const todos: Todo[] = [
    {
        name: "better do this",
        isDone: true,
    },
    {
        name: "and this too",
        isDone: false,
    },
];

const resolvers: Resolvers = {
    Query: {
        books: () => books,
        todos: () => todos,
    },
    Date: dateScalar,
};

export default resolvers;
