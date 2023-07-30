import { TResponse, TGetCharacters } from "./types";

const ROOT_URL = "https://rickandmortyapi.com/api/";

export const getCharacter = async (name: string): Promise<TGetCharacters> => {
  try {
    const result = await fetch(`${ROOT_URL}character/?name=${name}`, {
      cache: "force-cache",
    });
    const data = (await result.json()) as TResponse;
    return { data: data, status: "success" };
  } catch (error) {
    console.error(error);
    return { status: "error", error: "Error trying to fetch characters" };
  }
};
