import { useState, useEffect } from "react";

export default function testApi() {
  const [post, setPost] = useEffect([]);
  const fetchPost = async () => {
    const response = await fetch("/api/post");
    setPost(response);
  };

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <>
      <h2>post all</h2>
      <div>
        {post.map((ps) => (
          <h2 key={ps.id}>{ps.title}</h2>
        ))}
      </div>
    </>
  );
}
