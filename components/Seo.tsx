import Head from 'next/head';

const Seo = ({ title, description} : { title: string, description: string}) : JSX.Element => (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
        rel="stylesheet"
      />
      <link rel="preload" as="image" href="/assets/images/perrete.jpg" />
    </Head>
)

export default Seo;