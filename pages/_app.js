import '../styles/globals.scss'
import '../styles/components/record.scss';
import { ApolloProvider } from '@apollo/client';
import client from '../utils/apollo-client';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
