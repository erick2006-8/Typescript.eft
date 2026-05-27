/*Guarda una palabra en una variable.
Recorre cada letra usando un bucle.
Verifica si la letra es una vocal.
Cuenta cuántas vocales existen.
Al final muestra el total.*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingresa una palabra o frase: ", (texto) => {
    const vocales = texto.toLowerCase().split("").filter(letra => "aeiouáéíóúü".includes(letra));
    const cantidad = vocales.length;

    if (cantidad === 1) {
            console.log(`La palabra tiene 1 vocal: ${vocales}`);
        } else if (cantidad > 1) {
            console.log(`La palabra tiene ${cantidad} vocales: ${vocales.join(", ")}`);
        } else {
            console.log("La palabra no tiene vocales");
        }
        rl.close();
});