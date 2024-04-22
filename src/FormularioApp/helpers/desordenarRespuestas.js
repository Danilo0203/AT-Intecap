import arrayShuffle from "array-shuffle";
import { dataFormulario } from "../../data/dataFormulario";

export const listaAleatoria = () => {
  return arrayShuffle(dataFormulario);
};
