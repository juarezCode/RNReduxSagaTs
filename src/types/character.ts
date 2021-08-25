export type Character = {
  id: number;
  name: string;
  status: string;
  image: string;
  url: string;
  species: string;
  gender: string;
  origin: {
    name: string;
  };
};

export type CharacterResponse = {
  results: Character[];
};
