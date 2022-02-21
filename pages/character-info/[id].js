import { useRouter } from "next/router";
import Image from "next/image";
import { useCharacter } from "../../queries/character";
import Link from "next/link";

export default function CharacterInfo(props) {
  const router = useRouter();
  const { id } = router.query;

  const { isLoading, error, data } = useCharacter(id);

  console.log("data CharacterInfo", data);

  return (
    <div className="card h-full flex justify-center align-center flex-wrap flex-col my-6 mx-4 items-center text-center">
      {!isLoading && data ? (
        <>
          <Link href="/">Go back to initial page</Link>
          <h1 className="mt-4">Character name: {data.name}</h1>
          <Image
            src={data.image}
            alt={`Photo of ${data.name}`}
            width={300}
            height={300}
          />
          <p>Species: {data.species}</p>
          <p>Gender: {data.gender}</p>
          <p>Status: {data.status}</p>
          <p>List of episodes that this character appears:</p>
          {data.episode.map(ep => (
            <a key={ep} href={ep}>
              {ep}
            </a>
          ))}
        </>
      ) : (
        "Nothing found"
      )}
    </div>
  );
}
