import { genericFn } from "../utils/global";

export const genericsIntro = (): void => {
  console.log(genericFn(3.1416).toFixed(2));
  console.log(genericFn("Lalo").toUpperCase());
  console.log(genericFn(new Date().getDate()));

  console.log("--- END GENERICS INTRO FILE ---");
};
