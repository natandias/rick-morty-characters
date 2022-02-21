import { useQuery } from "react-query";

const fetchCharacters = url =>
  fetch(url)
    .then(res => res.json())
    .then(data => data);

function useAllCharacters(url) {
  return useQuery(["getAllCharacters", url], () => fetchCharacters(url));
}

function useCharacter(id) {
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  return useQuery(["getCharacter", id], () => fetchCharacters(url));
}

export { useAllCharacters, useCharacter };
