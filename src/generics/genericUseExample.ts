import { getPokemon } from "../api/getPokemon";

export const genericUseExample = async (): Promise<void> => {
  try {
    const pokemon = await getPokemon(1);

    console.log("Pokemon", pokemon);
  } catch (error) {
    console.warn(error);
  } finally {
    console.log("--- END GENERIC USE EXAMPLE FILE ---");
  }
};
