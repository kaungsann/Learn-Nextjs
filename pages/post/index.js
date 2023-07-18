import PostUi from "@/components/PostUi";
import Link from "next/link";
function Post({ post }) {
  return (
    <>
      <h1>All Post</h1>
      <h2>this is a post page</h2>
      {post.map((post) => {
        return (
          <>
            <Link href={`/post/${post.id}`}>
              <strong key={post.id}>
                {post.id}
                {post.title}
              </strong>
            </Link>

            <br />
            <hr />
            {/* <PostUi key={post._id} posts={post} /> */}
          </>
        );
      })}
    </>
  );
}

export default Post;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      post: data.splice(0, 5),
    },
  };
}
