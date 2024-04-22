import arrayShuffle from "array-shuffle";
import { listaAleatoria } from "../helpers/desordenarRespuestas";

export const renderPreguntas = (formulario) => {
  let formularioAleatorio = listaAleatoria();

  const lista = document.createElement("ol");

  formularioAleatorio.map((item) => {
    const listaItem = document.createElement("li"),
      pregunta = document.createElement("h4");

    lista.classList.add("list-decimal", "pl-5");
    lista.appendChild(listaItem);

    formulario.insertAdjacentElement("afterbegin", lista);
    pregunta.textContent = item.pregunta;
    listaItem.appendChild(pregunta);

    arrayShuffle(item.repuestas).map(({ id, name, texto }) => {
      const label = document.createElement("label"),
        input = document.createElement("input");
      input.type = "radio";
      input.name = name;
      input.value = id;
      listaItem.appendChild(label);
      label.appendChild(input);
      label.appendChild(document.createTextNode(texto));
    });
  });
};
