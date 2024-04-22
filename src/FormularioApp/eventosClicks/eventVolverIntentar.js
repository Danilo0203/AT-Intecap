import { reiniciar } from "../helpers/reiniciar";
import { vanillaToast } from "vanilla-toast";

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
  vanillaToast.info("¡Responde todas las preguntas!", { className: "custom" });
};
