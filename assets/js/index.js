var elementoActual = 0;
const destacados = [
  {
    "titulo": "Granadas",
    "descripcion": "Colección: Frutal 2022.<br>Material: Arcilla polimérica.<br>Descripción: Par de aros de 1 cuerpo, realizado en arcilla polimérica de color con forma de granadas.<br>Agarre: Gancho en acero quirurgico.<br>Peso: 20g.",
    "imagen": "1a.jpg"
  },
  {
    "titulo": "Flores en rombo morado",
    "descripcion": "Colección: Formas 2023.<br>Material: Arcilla polimérica.<br>Descripción: Par de aros de 2 cuerpos con forma romboide para la parte inferior y círculo para la parte superior realizado en arcilla polimérica de varios colores.<br>Agarre: Gancho en acero quirurgico.<br>Peso: 20g.",
    "imagen": "4a.jpg"
  },
  {
    "titulo": "Pulsera frutal",
    "descripcion": "Colección: Frutal 2022.<br>Material: Arcilla polimérica.<br>Descripción: Pulsera con distintas frutas realizadas en arcilla polimérica de color, la misma cuenta con arandanos, frambuesas, moras.<br>Agarre: Gancho en acero quirurgico.<br>Peso: 120g.",
    "imagen": "9a.jpg"
  },
  {
    "titulo": "Óvalos en colores",
    "descripcion": "Colección: Formas 2023.<br>Material: Arcilla polimérica.<br>Descripción: Par de aros de 2 cuerpos con forma ovalada para la parte inferior y círculo para la parte superior realizado en arcilla polimérica de varios colores.<br>Agarre: Gancho en acero quirurgico.<br>Peso: 20g.",
    "imagen": "5a.jpg"
  }
];

let flecha_izquierda = document.querySelector("#car-izquierda");
if(flecha_izquierda)flecha_izquierda.addEventListener("click", mover_izquierda);
function mover_izquierda() {
  elementoActual = elementoActual==0?destacados.length-1:elementoActual-1;
  document.getElementById("car-titulo").innerHTML = destacados[elementoActual].titulo;
  document.getElementById("car-descripcion").innerHTML = destacados[elementoActual].descripcion;
  document.getElementById("car-imagen").src = "./assets/imgs/productos/"+destacados[elementoActual].imagen;
}

let flecha_derecha = document.querySelector("#car-derecha");
if(flecha_derecha)flecha_derecha.addEventListener("click", mover_derecha);
function mover_derecha() {
  elementoActual++;
  elementoActual = elementoActual % destacados.length;;
  document.getElementById("car-titulo").innerHTML = destacados[elementoActual].titulo;
  document.getElementById("car-descripcion").innerHTML = destacados[elementoActual].descripcion;
  document.getElementById("car-imagen").src = "./assets/imgs/productos/"+destacados[elementoActual].imagen;
}

window.onload = function(event) {
  if( document.getElementById("car-titulo") ){
    document.getElementById("car-titulo").innerHTML = destacados[elementoActual].titulo;
    document.getElementById("car-descripcion").innerHTML = destacados[elementoActual].descripcion;
    document.getElementById("car-imagen").src = "./assets/imgs/productos/"+destacados[elementoActual].imagen;
  }
};

function cambiar_imagen(img) { 
  if( document.getElementById("prod-descripcion-img") ){
    document.getElementById("prod-descripcion-img").src = "./assets/imgs/productos/"+img+".jpg";
  }
}
