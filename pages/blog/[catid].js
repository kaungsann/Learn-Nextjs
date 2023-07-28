import React from "react";

export default function catid({ cats }) {
  return (
    <>
      <h1>
        {cats.title}
        {cats.id}
      </h1>
      );
    </>
  );
}

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.catid}`
  );

  const resData = await response.json();
  console.log(req.headers.cookie);
  res.setHeader("Set-Cookie", ["dev = kaungsann"]);

  return {
    props: {
      cats: resData,
    },
  };
}
