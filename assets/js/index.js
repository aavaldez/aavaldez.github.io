function validar(){
  let sinError = true;
  let nombre = document.getElementById("nombre");
  let mensaje = document.getElementById("mensaje");
  let ltaErrores = document.getElementById("errores");
  let ltaMensajes = document.getElementById("mensajes");
  ltaErrores.innerHTML = "";
  nombre.classList.remove("error");
  mensaje.classList.remove("error");
  if (nombre.value.trim()==""){
      let item = document.createElement("li");
      ltaErrores.appendChild(item);
      item.innerHTML = "Nombre invalido";
      nombre.classList.add("error");
      sinError = false;
  }
  if (mensaje.value.trim()=="" || mensaje.value.length > 100){
      let item = document.createElement("li");
      ltaErrores.appendChild(item);
      item.innerHTML = "Mensaje invalido";
      nombre.classList.add("error");
      sinError = false;
  }
  if(sinError){
      let item = document.createElement("li");
      ltaMensajes.appendChild(item);
      item.innerHTML = nombre.value+" <b>dice: </>"+mensaje.value;
      mensaje.value = "";
      mensaje.focus();
  }
  return false;
}

var elementoActual = 0;
const data = [
  {
    titulo: "Aros Dorados",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imagen: "1.jpg",
  },
  {
    titulo: "Aros Plateados",
    descripcion: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imagen: "2.jpg",
  },
  {
    titulo: "Aros Verdes",
    descripcion: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    imagen: "3.jpg",
  },
  {
    titulo: "Aros Negros",
    descripcion: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imagen: "4.jpg",
  },      

];

let flecha_izquierda = document.querySelector("#car-izquierda");
flecha_izquierda.addEventListener("click", mover_izquierda);
function mover_izquierda() {
  elementoActual = elementoActual==0?data.length-1:elementoActual-1;
  document.getElementById("car-titulo").innerHTML = data[elementoActual].titulo;
  document.getElementById("car-descripcion").innerHTML = data[elementoActual].descripcion;
  document.getElementById("car-imagen").src = "./assets/imgs/productos/"+data[elementoActual].imagen;
}

let flecha_derecha = document.querySelector("#car-derecha");
flecha_derecha.addEventListener("click", mover_derecha);
function mover_derecha() {
  elementoActual++;
  elementoActual = elementoActual % data.length;;
  document.getElementById("car-titulo").innerHTML = data[elementoActual].titulo;
  document.getElementById("car-descripcion").innerHTML = data[elementoActual].descripcion;
  document.getElementById("car-imagen").src = "./assets/imgs/productos/"+data[elementoActual].imagen;
}
