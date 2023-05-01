const prestamos = [
  {
    id: 1,
    nombre: "PrestamoPersonal",
    descripcion:
      "Te damos hasta $5.000.000 y podés pagar la primera cuota a los 45 días.Financiá tus proyectos en hasta 72 meses.",
    montoMaximo: 5000000,
    cantCuotas: 72,
    tasa: 90,
  },
  {
    id: 2,
    nombre: "PrestamoExpress",
    descripcion:
      "Pedí hasta $105.000 y recibilos en tu cuenta. Tenés hasta 45 días para devolverlos en una sola cuota",
    montoMaximo: 105000,
    cantCuotas: 12,
    tasa: 80,
  },
  {
    id: 3,
    nombre: "PrestamoUva",
    descripcion:
      "Te damos hasta $2.000.000 para usarlos como quieras. Tenés hasta 24 meses para devolverlos según el valor de la UVA al vencer cada cuota.",
    montoMaximo: 2000000,
    cantCuotas: 24,
    tasa: 65,
  },
];

let monto = 0;
let cuotas = 0;
let montoValido = false;
let cuotasValidas = false;

let contenido = "";

for (const prestamo of prestamos) {
  contenido +=
    prestamo.id +
    " - " +
    prestamo.nombre +
    "\n" +
    prestamo.descripcion +
    "\n\n";
}

let elegirPrestamo = prompt("¿Qué préstamo desea adquirir?" + "\n" + contenido); //1

let prestamoSeleccionado = prestamos.find(
  (lucia) => lucia.id == elegirPrestamo
);
console.log(prestamoSeleccionado);

while (!montoValido) {
  monto = parseFloat(prompt("¿Cuánto dinero desea obtener?"));
  if (monto >= prestamoSeleccionado.montoMaximo || isNaN(monto)) {
    alert("El monto seleccionado no es válido");
  } else {
    montoValido = true;
  }
}

while (!cuotasValidas) {
  cuotas = parseInt(prompt("Seleccione cantidad de Cuotas"));
  if (cuotas >= prestamoSeleccionado.cantCuotas || isNaN(cuotas)) {
    alert("La cantidad de cuotas seleccionada no está permitida");
  } else {
    cuotasValidas = true;
  }
}

let calculo = monto;
calculo += (monto * prestamoSeleccionado.tasa) / 100;

let planDePago = calculo / cuotas;
let salida = "Usted deberá abonar " + cuotas + " cuotas de $" + planDePago;

alert(salida);
document.getElementById("resultado").innerHTML = salida;
