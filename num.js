/*Guarda un número.
Convierte el número en texto.
Recorre los caracteres desde el final hasta el inicio.
Construye el número invertido.
Muestra el resultado.*/
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingresa un número: ", (numero) => {
    const numeroInvertido = numero.split("").reverse().join("");
    console.log(`Número invertido: ${numeroInvertido}`);
    rl.close();
}

);
