import Head from "next/head";
import requests from "../../utils/requests";
import DetialedMoive from "../../components/DetialedMoive";

const DetailMovie = ({ data }) => {
  console.log(data);

  return (
    <>
      <Head>
        <title>Hulu | {data.title}</title>
      </Head>
      <DetialedMoive data={data} />
    </>
  );
};

export async function getStaticProps(context) {
  const movieId = context.params.movieId;

  const response = await fetch(requests.fetchFromId(movieId));
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const req = await fetch(
    `https://api.themoviedb.org/3${requests.fetchTrending.url}`
  );
  const data = await req.json();
  const params = data.results.map((movie) => {
    return { params: { movieId: `${movie.id}` } };
  });

  return {
    paths: params,
    fallback: true,
  };
}

export default DetailMovie;
