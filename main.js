var nombre = "Gustavo Valencia";
var altura = 170;
/*
var concatenacion = nombre + " " + altura;
var datos = document.getElementById("datos");
datos.innerHTML = `
    <h1>Hola soy la caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura} cm </h3>


`;
if (altura >= 190) {
    datos.innerHTML += ` <h1> Eres una persona alta </h1>`;
} else {
    datos.innerHTML += ` <h1> Eres una persona baja </h1>`;
}

for (var i = 2000; i <= 2025; i++) {
    //bloque de instrucciones
    datos.innerHTML += "<h2>Estamos en el año: </h2>" + i;
}
*/
function MuestraMiNombre(nombre, altura) {
    var misdatos = `
    <h1>Hola soy la caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura} cm </h3>
    `;

    return misdatos;
}

function imprimir() {
    var datos = document.getElementById("datos");
    datos.innerHTML = MuestraMiNombre("Gustavo Valencia", 183);
}

imprimir();

var nombres = ['Gustavo', 'Ana', 'Pepe'];

document.write('<h1>Listado de nombres</h1>');
/*for (i = 0; i < nombres.length; i++) {
    document.write(nombres[i] + '<br>');

}*/
nombres.forEach((nombre) => {
    document.write(nombre + '<br>');
});

var coche = {
    modelo: 'Mercedes Benz',
    maxima: 500,
    antiguedad: 2020,
    mostrarDatos() {
        console.log(this.modelo, this.maxima, this.antiguedad);
    },
    propiedad1: "valor aleatorio"
};

document.write("<h1>" + coche.antiguedad + "</h1>");

coche.mostrarDatos();

var saludar = new Promise((resolve, reject) => {
    setTimeout(() => {
        let saludo = "Hola a todos";
        saludo = false;
        if (saludo) {
            resolve(saludo);
        } else {
            reject('No hay saludo disponible');
        }
    }, 2000);
});

saludar.then(resultado => {
        alert(resultado);
    })
    .catch(err => {
        alert(err);
    });