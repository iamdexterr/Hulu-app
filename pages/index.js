import Head from "next/head"
import Nav from "../components/Nav"
import Result from "../components/Result"
import requests from "../utils/requests"

export default function Home({results}) {

  return (
    <div>
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
  

    <Result results={results} />
    </div>
    )

}



export async function getServerSideProps(context){

  const genre = context.query.genre;

  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`);
  const data = await request.json();
 

  return {
    props:{
      results : data.results,

    }
  }
}

// https://api.themoviedb.org/3/movie/343611?api_key={api_key}
// https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher