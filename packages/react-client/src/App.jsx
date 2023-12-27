import React from "react";
import PropTypes from "prop-types";
import "./App.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Books } from "./books/Books";

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
});

export const App = ({ name }) => (
    <ApolloProvider client={client}>
        <p className="hello">hello world {name}</p>
        <Books />
    </ApolloProvider>
);

App.propTypes = {
    name: PropTypes.string,
};

App.defaultProps = {
    name: "",
};
