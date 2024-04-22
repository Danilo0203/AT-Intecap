import { renderPreguntas } from "../renderPreguntas/renderPreguntas";

export const reiniciar = (formulario, respuestasCorrectas, respuestasIncorrectas, countCorrectas, countIncorrectas) => {
  formulario.reset();
  countCorrectas = 0;
  countIncorrectas = 0;
  respuestasCorrectas.textContent = countCorrectas;
  respuestasIncorrectas.textContent = countIncorrectas;
  const listaPreguntas = document.querySelector("ol");
  listaPreguntas.innerHTML = "";
  renderPreguntas(formulario);
};
