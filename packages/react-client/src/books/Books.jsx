import React from "react";
import { useBooksQuery } from "./bookOperations";

export const Books = () => {
    const { data } = useBooksQuery();
    return (
        <ul title="Books">
            {data?.books?.map(({title, author}) => (
                <li>{author} - {title}</li>
            ))}
        </ul>
    );
};
