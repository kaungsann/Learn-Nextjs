import { useState } from "react";

export default function preAndFetch({ posts }) {
  const [pF, setpF] = useState(posts);

  const filterName = async () => {
    const response = await fetch("https://fakestoreapi.com/products/");
    const resData = await response.json();

    setpF(resData);
  };
  return (
    <>
      <button onClick={filterName}>Filter product</button>
      {pF.map((pd) => (
        <div key={pd.id}>
          <h1>{pd.title}</h1>
          <h1>{pd.id}</h1>
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;

  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const resData = await response.json();

  return {
    props: {
      posts: resData,
    },
  };
}
