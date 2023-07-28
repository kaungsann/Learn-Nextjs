import React from "react";
import Link from "next/link";
export default function index({ products }) {
  return (
    <div>
      {products.map((pd) => {
        return (
          <>
            <Link href={`blog/${pd.id}`} passHref>
              <h1>{pd.title}</h1>
              <h1>{pd.id}</h1>
            </Link>

            <br />
          </>
        );
      })}
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    return {
      props: {
        products: data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        data: null, // Return null or any default value in case of an error
      },
    };
  }
}
