console.log ("Hola mundo")

let nombreUsuario = prompt("Ingresar nombre de usuario");

if (nombreUsuario == "") {
    alert("No ingresaste el nombre de usuario");
}
else {
    alert("Nombre de usuario ingresado " + nombreUsuario);
}

let ropaDeportiva = prompt(`que prenda buscas?,
1: Pantalon entrenamiento= $4800,
2: Remera entrenamiento= $3500,
3: Campera entrenamiento= $7500`
)

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = x => x * 0.21;
let precioProducto1 = 4800;
let precioProducto2 = 3500;
let precioProducto3 = 7500;
let descuento = 500;

switch (ropaDeportiva) {
    case "1":
        let nuevoPrecio1 = resta(suma(precioProducto1, iva(precioProducto1)), descuento);
        alert(`Debe abonar $ ${nuevoPrecio1}`);
        break;

    case "2":
        let nuevoPrecio2 = resta(suma(precioProducto2, iva(precioProducto2)), descuento);
        alert(`Debe abonar $ ${nuevoPrecio2}`);
        break;
    case "3":
        let nuevoPrecio3 = resta(suma(precioProducto3, iva(precioProducto3)), descuento);
        alert(`Debe abonar $ ${nuevoPrecio3}`);
        break;
    default:
        alert("No ha seleccionado nada")
        break;
}

