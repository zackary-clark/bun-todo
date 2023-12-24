import React from "react";
import { gql, useQuery } from "@apollo/client";

const BOOKS = gql`
    query Books {
        books {
            title
            author
        }
    }
`;

export const Books = () => {
    const { data } = useQuery(BOOKS);
    return (
        <ul title="Books">
            {data?.books?.map(({title, author}) => (
                <li>{author} - {title}</li>
            ))}
        </ul>
    );
};
