let bandera = true;
let productos = ["SALA 2D", "SALA 3D", "SALA PLATINUM", "SALA 4D"];
let carrito = [];
let total = 0;

function sumarAtotal(precio, nombre, cantidad) {
  let subtotal = precio * cantidad;
  total = total + subtotal;
  carrito.push(`${nombre} x${cantidad}`);
} 

function logicaCompra(entradaElegida, cantidad) {
  
  let salaSeleccionada = entradaElegida.toLowerCase();

  switch (salaSeleccionada) { 
    case "sala 2d":
      sumarAtotal(8400, "SALA 2D", cantidad);
      break;

    case "sala 3d":
      sumarAtotal(10000, "SALA 3D", cantidad);
      break;

    case "sala platinum": 
      sumarAtotal(11000, "SALA PLATINUM", cantidad);
      break;

    case "sala 4d":
      sumarAtotal(13000, "SALA 4D", cantidad);
      break;

    default:
      alert("ESA SALA NO ESTÁ DISPONIBLE");
      break;
  } 
}

while (bandera) {
  const entradaElegida = prompt("INDICA TU SALA DE CINE \n\n- " + productos.join("\n- "));

  
  if (productos.includes(entradaElegida.toUpperCase())) {
    const cantidadEntradas = parseInt(prompt(`¿Cuántas entradas para ${entradaElegida.toUpperCase()} deseas comprar?`));
    
    if (!isNaN(cantidadEntradas) && cantidadEntradas > 0) {
      logicaCompra(entradaElegida, cantidadEntradas);
    } else {
      alert("Cantidad inválida. Introduce un número válido mayor que cero.");
      continue;
    }
  } else {
    alert("Sala seleccionada no válida. Por favor, elige una sala disponible.");
    continue;
  }

  bandera = confirm("¿Deseas seleccionar otra sala?");
} 

alert(`Total a pagar: ${total}`);
alert("Productos seleccionados:\n- " + carrito.join("\n- "));
