import { useState } from "react";
import Link from "next/link";

import { useAllCharacters } from "../queries/character";

function CharacterList() {
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character");

  const { isLoading, error, data } = useAllCharacters(url);

  const previousPage = () => {
    const prevUrl = data?.info?.prev;
    if (prevUrl) setUrl(prevUrl);
    else console.log("No previous page available");
  };

  const nextPage = () => {
    const nextUrl = data?.info?.next;
    console.log("nextUrl", nextUrl);
    if (nextUrl) setUrl(nextUrl);
    else console.log("No next page available");
  };

  return (
    <div className="flex justify-center align-center flex-wrap flex-col mx-4 my-4 items-center text-center">
      <h2 className="text-black text-xl mb-4">Characters list</h2>
      <ul>
        {!isLoading && data?.results ? (
          data.results.map(char => (
            <li className="cursor-pointer" key={char.id}>
              <Link href={`/character-info/${char.id}`}>{char.name}</Link>
            </li>
          ))
        ) : (
          <h2>Could not retrive characters. Try refreshing the page.</h2>
        )}
      </ul>
      <div className="mt-4">
        <button
          className={`mr-4 ${!data?.info?.prev && "text-white"}`}
          onClick={previousPage}
        >
          Previous
        </button>
        <button
          className={`${!data?.info?.next && "text-white"}`}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CharacterList;
