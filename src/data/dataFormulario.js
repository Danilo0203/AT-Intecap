export const dataFormulario = [
  {
    pregunta: "¿En qué lugar se ejecuta generalmente el código JavaScript?",
    repuestas: [
      { id: "a", texto: "En el servidor", name: "respuesta1" },
      { id: "b", texto: "En el cliente", name: "respuesta1" },
      { id: "c", texto: "En la base de datos", name: "respuesta1" },
    ],
  },
  {
    pregunta: "¿Cuáles de estas son marcas para la inserción del código JavaScript en las páginas HTML?",
    repuestas: [
      { id: "a", texto: "<javascript></javascript>", name: "respuesta2" },
      { id: "b", texto: "<script></script>", name: "respuesta2" },
      { id: "c", texto: "<js></js>", name: "respuesta2" },
    ],
  },
  {
    pregunta: "La llamada al código Javascript debe colocarse en:",
    repuestas: [
      { id: "a", texto: "La sección Body de la página", name: "respuesta3" },
      { id: "b", texto: "Puede colocarse en la sección Head o en Body", name: "respuesta3" },
      { id: "c", texto: "Antes de la etiqueta HTML", name: "respuesta3" },
    ],
  },
  {
    pregunta: "En JavaScript, para darle el nombre a una variable, objeto o función, debemos tener en cuenta que:",
    repuestas: [
      { id: "a", texto: "No se pueden usar mayúsculas", name: "respuesta4" },
      { id: "b", texto: "JavaScript no distingue entre mayúsculas y minúsculas", name: "respuesta4" },
      { id: "c", texto: "JavaScript diferencia entre mayúsculas y minúsculas", name: "respuesta4" },
    ],
  },
  {
    pregunta: "¿Cuál es la instrucción usada para devolver un valor en una función de JavaScript?",
    repuestas: [
      { id: "a", texto: "Send", name: "respuesta5" },
      { id: "b", texto: "return", name: "respuesta5" },
      { id: "c", texto: "Value", name: "respuesta5" },
    ],
  },
  {
    pregunta: "Para terminar las instrucciones en Javascript se utiliza:",
    repuestas: [
      { id: "a", texto: "Un punto y coma", name: "respuesta6" },
      { id: "b", texto: "Un punto y coma o un salto de línea", name: "respuesta6" },
      { id: "c", texto: "La sentencia End.", name: "respuesta6" },
    ],
  },
  {
    pregunta: "¿Cuál de estas instrucciones está correctamente escrita en Javascript?",
    repuestas: [
      { id: "a", texto: "if (a=0) print a;", name: "respuesta7" },
      { id: "b", texto: "if (a==0) alert (a);", name: "respuesta7" },
      { id: "c", texto: "if (a==0) { print [a] }", name: "respuesta7" },
      { id: "d", texto: "if (a==0): print a;", name: "respuesta7" },
    ],
  },
  {
    pregunta: "Para concatenar cadenas de caracteres en Javascript se usa el carácter:",
    repuestas: [
      { id: "a", texto: "& (ampersand)", name: "respuesta8" },
      { id: "b", texto: "+ (más)", name: "respuesta8" },
      { id: "c", texto: ". (punto)", name: "respuesta8" },
      { id: "d", texto: "* (por)", name: "respuesta8" },
    ],
  },
  {
    pregunta: "¿Es posible hacer que se ejecute un formulario por JavaScript?",
    repuestas: [
      {
        id: "a",
        texto:
          "No, esa función sólo puede realizarse mediante código PHP, y se ha de realizar por tanto en el servidor.",
        name: "respuesta9",
      },
      {
        id: "b",
        texto:
          "Sí, por ejemplo basta con pasarle a una función Javascript el identificador del formulario, y aplicarle el comando “submit” para ejecutar ese formulario",
        name: "respuesta9",
      },
      {
        id: "c",
        texto:
          "Sí, de hecho los formularios se crean con código Javascript, por lo que es el propio Javascript el que los ejecuta.",
        name: "respuesta9",
      },
    ],
  },
  {
    pregunta: "¿Todo el código JavaScript debe estar por fuerza dentro del archivo .html de la página web?",
    repuestas: [
      {
        id: "a",
        texto: "Sí, porque si no, no se podría ejecutar en el navegador",
        name: "respuesta10",
      },
      {
        id: "b",
        texto:
          "No, es posible incluir código JavaScript en ficheros de extensión .js y hacer un “include” en la sección HEAD de la página HTML",
        name: "respuesta10",
      },
    ],
  },
];
