import { type Villiain, type AntiHero, type Hero } from "../interfaces";
import { genericFn } from "../utils/global";

export const genericsWithInterface = (): void => {
  const deadpool: AntiHero = {
    name: "Deadpool",
    realName: "Wade Winston Wilson",
    dangerLevel: 1000,
  };

  console.log(genericFn<Hero>(deadpool).realName);
  console.log(genericFn<Villiain>(deadpool).dangerLevel);

  console.log("--- END GENERICS WITH INTERFACE FILE ---");
};
