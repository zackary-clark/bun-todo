import { gql, useQuery } from "@apollo/client";

export function useBooksQuery() {
    // TODO: Suspense was causing issues when hot reloading, because it wasn't actually being used?
    // return useSuspenseQuery(gql`
    return useQuery(gql`
        query Books {
            books {
                title
                author
            }
        }
    `);
}
