class coche {
    constructor(modelo, velocidad, antiguedad) {
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.antiguedad = antiguedad;
    }
    aumentarVelocidad() {
        this.velocidad += 2;
    }
    reducirVelocidad() {
        this.velocidad -= 1;
    }
}



var coche1 = new coche('BMW', 200, 2023);
var coche2 = new coche('Mercedes', 100, 2015);
var coche3 = new coche('Audi', 150, 2017);
console.log(coche1);

document.write("<h1>Velocidad: " + coche1.velocidad + "</h1>");
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
document.write("<h1>Velocidad: " + coche1.velocidad + "</h1>");