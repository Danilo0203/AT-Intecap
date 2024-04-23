import { eventValidarForm } from "./eventosClicks/eventValidarForm";
import { eventVolverIntentar } from "./eventosClicks/eventVolverIntentar";
import { renderPreguntas } from "./renderItemsList/renderPreguntas";

(() => {
  const formulario = document.forms[0];
  const resultados = document.querySelector("section");
  const btnVolverIntentar = document.querySelector(".volver-intentar");
  const respuestasCorrectas = document.querySelector("#correctas");
  const respuestasIncorrectas = document.querySelector("#incorrectas");
  let countCorrectas = 0;
  let countIncorrectas = 0;

  renderPreguntas(formulario);

  formulario.addEventListener("submit", (e) =>
    eventValidarForm(
      e,
      formulario,
      resultados,
      respuestasCorrectas,
      respuestasIncorrectas,
      countCorrectas,
      countIncorrectas
    )
  );
  btnVolverIntentar.addEventListener("click", () =>
    eventVolverIntentar(
      formulario,
      resultados,
      respuestasCorrectas,
      respuestasIncorrectas,
      countCorrectas,
      countIncorrectas
    )
  );
})();
