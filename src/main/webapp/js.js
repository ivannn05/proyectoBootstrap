/**
 * 
 */
let valor=[]

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




const arrayDatos = []

const productos = [
    { nombre: "Portatil Razer", precio: 1250, cantidad: 0 },
    { nombre: "PC MSI1", precio: 1500, cantidad: 0 },
    { nombre: "PC MSI2", precio: 1500, cantidad: 0 },
    { nombre: "CASCOS NUEVO1", precio: 80, cantidad: 0 },
    { nombre: "CASCOS NUEVO2", precio: 75, cantidad: 0 },
    { nombre: "CASCOS NUEVO3", precio: 90, cantidad: 0 }
];

function añadirCesta(nombre) {
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].nombre === nombre) {
            if (productos[i].cantidad === 0) {
                productos[i].cantidad = 1;
                arrayDatos.push(productos[i]);
            } else {
                productos[i].cantidad++;
            }
            break;
        }
    }
    mostrarCarrito();
}

function mostrarCarrito() {
    const tablaCarrito = document.getElementById('tablaCarrito');
    tablaCarrito.innerHTML = ''; // Limpiar la tabla antes de volver a llenarla
    let total = 0;

    arrayDatos.forEach(producto => {
        const subtotal = producto.precio * producto.cantidad;
        total += subtotal;
        const fila = `
            <tr>
                <td>${producto.nombre}</td>
                <td>${producto.cantidad}</td>
                <td>$${producto.precio}</td>
                <td>$${subtotal}</td>
            </tr>
        `;
        tablaCarrito.innerHTML += fila;
    });

    const filaTotal = `
        <tr>
            <td colspan="3"><strong>Total</strong></td>
            <td><strong>$${total}</strong></td>
        </tr>
    `;
    tablaCarrito.innerHTML += filaTotal;
}

function eliminarCesta() {
    const nombre = prompt("Introduce el nombre a eliminar");
    const index = arrayDatos.findIndex(producto => producto.nombre === nombre);
    
    if (index !== -1) {
        arrayDatos.splice(index, 1);
        productos.find(producto => producto.nombre === nombre).cantidad = 0;
        mostrarCarrito();
    } else {
        alert("No se ha encontrado ese producto");
    }
}

function comprar() {
    alert("Su compra fue realizada con éxito");
}


