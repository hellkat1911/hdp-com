import { ApolloClient, InMemoryCache } from '@apollo/client';
import withApollo from 'next-with-apollo';

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.HDP_ENDPOINT,
    cache: new InMemoryCache(),
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      });
    },
  });
}

export default withApollo(createClient);
