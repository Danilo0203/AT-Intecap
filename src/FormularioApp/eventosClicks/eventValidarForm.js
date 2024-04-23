import { renderRespuestas } from "../renderItemsList/renderRespuestas";
import { celebracion } from "../utils/confetti";

export const eventValidarForm = (
  e,
  formulario,
  resultados,
  respuestasCorrectas,
  respuestasIncorrectas,
  countCorrectas,
  countIncorrectas
) => {
  e.preventDefault();
  const formData = new FormData(formulario);
  const data = Object.fromEntries(formData);

  formulario.classList.add("hidden");
  resultados.classList.remove("hidden");
  const respuestasUsuario = {};
  for (let i = 0; i < Object.entries(data).length; i++) {
    const [key, value] = Object.entries(data)[i];
    respuestasUsuario[key] = value;
    if ("b" === value) {
      ++countCorrectas;
      respuestasCorrectas.textContent = countCorrectas;
    } else {
      ++countIncorrectas;
      respuestasIncorrectas.textContent = countIncorrectas;
    }
  }
  celebracion(countCorrectas);
  renderRespuestas(data, respuestasUsuario);
};
