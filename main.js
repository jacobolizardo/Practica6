const bAtras = document.querySelectorAll(".boton_atras");
const bSigte = document.querySelectorAll(".boton_siguiente");
const progreso = document.getElementById("progreso");
const cajas = document.querySelectorAll(".caja");
const pasos = document.querySelectorAll(".paso");

let pasosNum = 0;

bSigte.forEach((boton) => {
  boton.addEventListener("click", () => {
    pasosNum++;
    updatecajas();
    updatebarraProgreso();
  });
});

bAtras.forEach((boton) => {
  boton.addEventListener("click", () => {
    pasosNum--;
    updatecajas();
    updatebarraProgreso();
  });
});

function updatecajas() {
  cajas.forEach((caja) => {
    caja.classList.contains("cajaUno") &&
      caja.classList.remove("cajaUno");
  });

  cajas[pasosNum].classList.add("cajaUno");
}

function updatebarraProgreso() {
  pasos.forEach((paso, idx) => {
    if (idx < pasosNum + 1) {
      paso.classList.add("pasoUno");
    } else {
      paso.classList.remove("pasoUno");
    }
  });

 const progresoP = document.querySelectorAll(".paso uno");

  progreso.style.width =
    ((progresoP.length - 1) / (pasos.length - 1)) * 100 + "%";
}