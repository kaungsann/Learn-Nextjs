import useSwr from "swr";

const fetcher = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  const resData = await response.json();
  return resData;
};

export default function testSwr() {
  const { data, error } = useSwr("posts-fetcher", fetcher);
  if (error) return <h1>error occur while fetching data</h1>;
  if (!data) return <h1>Data Loading .. </h1>;
  return (
    <>
      {data.map((ps) => (
        <h1 key={ps.id}>{ps.title}</h1>
      ))}
    </>
  );
}
