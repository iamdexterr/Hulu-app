import Image from "next/image";
import Link from "next/link";
import { SearchIcon } from "@heroicons/react/outline";
import { useRef } from "react";
import { useRouter } from "next/router";

const Header = () => {

  const searchInputRef = useRef();
  const router = useRouter();


  async function submitHandler(e){

    e.preventDefault();

    const keyword =searchInputRef.current.value

    router.push(`/${keyword}`)

  }

  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
    
      <form className="relative text-gray-600" onSubmit={submitHandler}>
        <input
          className="border-2 border-gray-300  bg-white h-10 px-5 pr-16 rounded-lg text-md focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
          ref={searchInputRef}
        />
        <button type="submit" className="absolute right-0 top-0 mt-2 mr-3">
          <SearchIcon className="h-6 mb-1" />
        </button>
      </form>

      <Link href="/">
        <Image
          className="object-contain cursor-pointer"
          src="https://links.papareact.com/ua6"
          width={200}
          height={100}
        />
      </Link>
    </header>
  );
};

export default Header;
