function postDetail({ postsId }) {
  return (
    <>
      <div> postDetail</div>
      <h1>{postsId.title}</h1>
    </>
  );
}

export default postDetail;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { pid: "1" } },
      { params: { pid: "2" } },
      { params: { pid: "3" } },
      { params: { pid: "4" } },
      { params: { pid: "5" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.pid}`
  );
  const data = await response.json();
  return {
    props: {
      postsId: data,
    },
  };
}
