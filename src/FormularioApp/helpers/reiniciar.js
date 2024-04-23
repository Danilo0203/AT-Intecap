import { renderPreguntas } from "../renderItemsList/renderPreguntas";

export const reiniciar = (formulario, respuestasCorrectas, respuestasIncorrectas, countCorrectas, countIncorrectas) => {
  const listaPreguntas = document.querySelector(".list-decimal");
  formulario.reset();
  countCorrectas = 0;
  countIncorrectas = 0;
  respuestasCorrectas.textContent = countCorrectas;
  respuestasIncorrectas.textContent = countIncorrectas;
  
  listaPreguntas.innerHTML = "";
  renderPreguntas(formulario);
};
