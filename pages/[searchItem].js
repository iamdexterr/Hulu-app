import Result from "../components/Result"
import { useRouter } from "next/router"
import { useEffect,useState } from "react";
import requests from "../utils/requests";

const SearchResults = () => {


  const [results,setResults] = useState([]);
  const router = useRouter()
  
  const dataFetchingHandler =async()=>{
     
   const keyword = router.query.searchItem;
    
   const res = await fetch(requests.fetchByKeyword(keyword));
   const data = await res.json();
   setResults(data.results)

  }

  useEffect(()=>{
    dataFetchingHandler();
  },[router.query.searchItem])

  return (
    <Result results={results} />
  
  )
}

export default SearchResults