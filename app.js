let amigos = [];

function agregarAmigo() {
  let nombreDeAmigo = document.getElementById("amigo").value;
  // validar que el campo no esté vacío y no contenga numeros
  if (nombreDeAmigo !== "" && isNaN(nombreDeAmigo)) {
    // true positiva
    amigos.push(nombreDeAmigo);

    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    amigos.forEach(function (amigo) {
      let nuevoAmigo = document.createElement("li");
      nuevoAmigo.textContent = amigo;
      listaAmigos.appendChild(nuevoAmigo);
    });
    document.getElementById("amigo").value = ""; // Limpiar el campo de entrada
    console.log(amigos);
  } else {
    // false negativa
    alert("No puedes dejar el campo vacío o ingresar números.");
  }
}

function sortearAmigo() {
  //Validación de al menos 5 amigos
  if (amigos.length < 5) {
    alert("Se necesitan 5 amigos para iniciar el juego");
    return;
  }
  // Limpiar resultados anteriores
  let resultados = document.getElementById("resultado");
  resultados.innerHTML = "";

  // Lógica para sortear amigos
  let amigosSorteados = [...amigos]; // Crear una copia del array original
  // obtener un ganador
  let ganador = amigosSorteados.splice(
    Math.floor(Math.random() * amigosSorteados.length),
    1
  )[0];
  let nuevoResultado = document.createElement("div");
  nuevoResultado.textContent = `el amigo secreto es: ${ganador}`;
  resultados.appendChild(nuevoResultado);
}
