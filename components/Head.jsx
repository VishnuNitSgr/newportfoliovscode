import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Vishnu Narayan Tripathi is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="vishnu narayan tripathi, vishnu, tripathi, web developer portfolio, vishnu web developer, vishnu developer, mern stack, vishnu tripathi portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Vishnu Narayan Tripathi's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Vishnu Narayan Tripathi',
};
