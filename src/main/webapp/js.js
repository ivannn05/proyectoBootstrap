/**
 * 
 */
function validacionDeFecha() {

	var fechaDelUsu = document.getElementById("fecha").value
	/* split / -> array de 2  mes anyo */
	const arrayFecha = fechaDelUsu.split('/')
	const fechaUsu = new Date(arrayFecha[1], arrayFecha[0])

	const fechaHoy = new Date();

	if (fechaUsu > fechaHoy) {


		return true; // Fecha caducada o inválida
	} else {
		alert("La fecha esta caducada")
		return false; // Fecha válida y no caducada
	}
}






function añadirCesta(nombre, precio) {
	let prod1 = {
		nombre: "Portatil Razer",
		precio1: 1250,
		cantidad: 0
	}
	let prod2 = {

		nombre: "PC MSI1",
		precio2: 1500,
		cantidad: 0,
	}
	let prod3 = {
		nombre: "PC MSI2",
		precio3: 1500,
		cantidad: 0,
	}
	let prod4 = {
		nombre: "CASCOS NUEVO1",
		precio4: 80,
		cantidad: 0,
	}
	let prod5 = {
		nombre: "CASCOS NUEVO2",
		precio5: 75,
		cantidad: 0,
	}
	let prod6 = {
		nombre: "CASCOS NUEVO3",
		precio6: 90,
		cantidad: 0
	};
	const todasLasVentas = [prod1, prod2, prod3, prod4, prod5, prod6];

	const arrayDatos = []
	
		
		for (let i = 0; i < todasLasVentas.length; i++) {

			if (todasLasVentas[i].cantidad == 0 && nombre == todasLasVentas[i].nombre) {
				
				todasLasVentas[i].cantidad = 1
				
			} else {
				
				todasLasVentas[i].cantidad++
			}
		}
	

	// Actualizar la tabla que muestra el carrito
	mostrarCarrito(nombre, precio, todasLasVentas);
}
function mostrarCarrito(nombre, precio, todasLasVentas) {
	const tablaCarrito = document.getElementById('tablaCarrito');
	tablaCarrito.innerHTML = ''; // Limpiar la tabla antes de volver a llenarla
	let producto = [], fila;
	let dineroTotal
	dineroTotal = precio + dineroTotal
	// Recorrer todos los productos en el carrito
	for (let key in todasLasVentas) {



		// Crear una fila para este producto en la tabla
		fila = `
            <tr>
                <td>${nombre}</td>
                <td>${todasLasVentas[key][2]}</td>
                <td>$${precio}</td>
                <td>$${dineroTotal}</td>
            </tr>
        `;

		// Agregar la fila a la tabla
		tablaCarrito.innerHTML += fila;
	}
}
