import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function HomePage() {
  const { data, isLoading } = useSWR("/api/random-character", fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  const { firstName, lastName, twitterName, geohash } = data;

  return (
    <>
      <h1>Random Character</h1>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{twitterName}</p>
      <p>{geohash}</p>
    </>
  );
}
