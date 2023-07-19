import { useRouter } from "next/router";
function PostDetail({ postsId }) {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <>
        <h1>data fetching is loading ----</h1>
      </>
    );
  }
  return (
    <>
      <div> postDetail</div>
      <h1>{postsId.title}</h1>
    </>
  );
}

export default PostDetail;

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  // const paths = data.map((d) => {
  //   return {
  //     params: { pid: `${d.id}` },
  //   };
  // });

  return {
    paths: [
      { params: { pid: "1" } },
      { params: { pid: "2" } },
      { params: { pid: "3" } },
      { params: { pid: "4" } },
      { params: { pid: "5" } },
    ],
    //   paths,

    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.pid}`
  );
  const data = await response.json();
  if (!data.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      postsId: data,
    },
  };
}
