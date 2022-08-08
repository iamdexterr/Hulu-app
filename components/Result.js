import Thumbnails from './Thumbnails'

const Result = ({results}) => {

  if(results.length===0){
    return (<h1 className='text-5xl text-center mt-6 text-red-500'>No Result Found</h1>)
  }

  return (
    <div className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
        {results.map(result=>(<Thumbnails key={result.id} result={result}/>))}
    </div>
  )
}

export default Result