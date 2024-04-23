import { reiniciar } from "../helpers/reiniciar";

export const eventVolverIntentar = (
  formulario,
  resultados,
  respuestasCorrectas,
  respuestasIncorrectas,
  countCorrectas,
  countIncorrectas
) => {
  formulario.classList.remove("hidden");
  resultados.classList.add("hidden");
  reiniciar(formulario, respuestasCorrectas, respuestasIncorrectas, countCorrectas, countIncorrectas);
};
