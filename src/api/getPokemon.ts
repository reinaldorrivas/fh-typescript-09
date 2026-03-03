import axios from "axios";
import { type Pokemon } from "../interfaces";

export const getPokemon = async (pokeId: number): Promise<Pokemon> => {
  const { data } = await axios.get<Pokemon>(
    `https://pokeapi.co/api/v2/pokemon/${pokeId}`,
  );

  return data;
};
