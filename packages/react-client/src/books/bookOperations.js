import { gql, useSuspenseQuery } from "@apollo/client";

export function useBooksQuery() {
    return useSuspenseQuery(gql`
        query Books {
            books {
                title
                author
            }
        }
    `);
}
