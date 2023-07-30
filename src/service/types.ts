type TInfo = {
  count: number;
  pages: number;
  next: string;
  prev: string;
};

type TOrigin = {
  name: string;
  url: string;
};
type TLocation = {
  name: string;
  url: string;
};
export type TCharacter = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: TOrigin;
  location: TLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type TResponse = {
  info: TInfo;
  results: TCharacter[];
};

type TSuccess = {
  status: "success";
  data: TResponse;
};

type TError = {
  status: "error";
  error: string;
};

export type TGetCharacters = TSuccess | TError;
