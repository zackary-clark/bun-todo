import React from "react";
import PropTypes from "prop-types";
import "./App.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Books } from "./Books";

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
});

export const App = ({ name }) => {
    return (
        <ApolloProvider client={client}>
            <div className="hello">hello world {name}</div>
            <Books />
        </ApolloProvider>
    );
};

App.propTypes = {
    name: PropTypes.string,
};

App.defaultProps = {
    name: "",
};
