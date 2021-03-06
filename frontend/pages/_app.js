import App from 'next/app';
import { ApolloProvider } from '@apollo/client';
import Page from '../components/Page';
import withData from '../lib/withData';

class AppContainer extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = [];
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // this exposes query to the user
    pageProps.query = ctx.query;

    return pageProps;
  }

  render() {
    const { Component, apollo, pageProps } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <Page>
          <Component {...pageProps} />
        </Page>
      </ApolloProvider>
    );
  }
}

export default withData(AppContainer);
