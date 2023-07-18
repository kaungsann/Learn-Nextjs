import Link from "next/link";
import { useRouter } from "next/router";
function Home() {
  const router = useRouter();

  const changePage = () => {
    //router.push("/post");
    console.log("hello");
  };
  return (
    <>
      <h1>Home PAGE</h1>
      <Link href="/post">Go to post</Link>
      <button onClick={changePage}>go to post</button>
    </>
  );
}

export default Home;
