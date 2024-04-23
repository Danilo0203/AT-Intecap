import { dataFormulario } from "../../data/dataFormulario";

const contenedorRespuestas = document.querySelector(".respuestas");

const lista = document.createElement("ol");
export const renderRespuestas = (data, respuestasUsuario) => {
  lista.innerHTML = "";
  dataFormulario.map((item) => {
    const listaItem = document.createElement("li"),
      pregunta = document.createElement("h4");

    lista.classList.add("list-decimal");
    lista.appendChild(listaItem);

    contenedorRespuestas.insertAdjacentElement("afterbegin", lista);
    pregunta.textContent = item.pregunta;
    listaItem.appendChild(pregunta);

    item.repuestas.map((item) => {
      const parrafo = document.createElement("p");
      const respuestaDelUsuario = respuestasUsuario[item.name];
      const esRespuestaUsuario = item.id === respuestaDelUsuario;
      const esCorrecta = item.id === "b";
      let textoRespuesta = `🔵 ${item.texto} `;
      if (esCorrecta) {
        textoRespuesta += "✅"; // Agrega el check si es la correcta
      }
      if (esRespuestaUsuario && !esCorrecta) {
        textoRespuesta += "❌"; // Agrega la X si el usuario se equivocó
      }

      parrafo.textContent = textoRespuesta;
      listaItem.appendChild(parrafo);
    });
  });
};
