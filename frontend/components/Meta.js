import Head from 'next/head';

const Meta = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />

    <link rel="apple-touch-icon" sizes="180x180" href="icons/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16x16.png" />
    <link rel="manifest" href="icons/site.webmanifest" />

    <link rel="stylesheet" type="text/css" href="nprogress.css" />

    <link rel="preload" href="/fonts/Orbitron.ttf" as="font" crossOrigin="" />
    <link rel="preload" href="/fonts/Jost.ttf" as="font" crossOrigin="" />
    <title>hdp_</title>
  </Head>
);

export default Meta;
