import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";



const DetialedMoive = ({data}) => {
    const BASE_URL = 'https://image.tmdb.org/t/p/original/';


  return (
    <div className="grid grid-cols-1 gap-5 p-5 mt-5 lg:grid-cols-2">
     
    <Image layout='responsive'  src={
        `${BASE_URL}${data.backdrop_path || data.poster_path}` ||
       `${BASE_URL}${data.poster_path}`
        } height={1080} width={1920} />
    

<div>
    <p className="text-4xl mb-5">{data.title}</p>
    <p className="tracking-wide text-lg mb-3">{data.overview}</p>
    <p className="text-lg">Release Date : {data.release_date}</p>
    <p className="flex items-center my-3 text-lg">Votes : <ThumbUpIcon className='h-5 mx-2'/> {data.vote_count}</p>
    
    <div className="flex flex-wrap gap-4 mt-5" >
         {data.genres.map(genre=><p key={genre.id} className="rounded-full bg-blue-500 px-6 py-2">{genre.name}</p>)}

    </div>

    </div>

</div>
  )
}

export default DetialedMoive