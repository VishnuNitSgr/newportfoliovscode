const ArticlesPage = () => {
  return (
    <>
      <h3>Articles</h3>
      <p>This section will contain technical articles and notes in the future.</p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Articles' },
  };
}

export default ArticlesPage;
