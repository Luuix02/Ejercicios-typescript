import * as readline from 'readline';

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var number1: number;
var number2: number;

reader.question('Escribe el primer número del 1 al 10 : ', (input1) => {
    number1 = parseInt(input1);

    if (isNaN(number1) || number1 < 1 || number1 > 10) {
        console.log('Por favor, ingresa un número válido del 1 al 10 para el primer número.');
    } 

        reader.question('Escribe el segundo número del 1 al 10 : ', (input2) => {
            number2 = parseInt(input2);
            asteriscosTabla(number1, number2);
            reader.close();

            if (isNaN(number2) || number2 < 1 || number2 > 10) {
                console.log('Por favor, ingresa un número válido del 1 al 10 para el segundo número.');
            } 
            
        });
    }
);

function asteriscosTabla(number1: number, number2: number) {
    for (let i = 1; i <= 10; i++) {
        let fila = "";
        for (let j = 1; j <= 10; j++) {
            if (i === number1 && j === number2) {
                fila += "" + (i * j) + " ";
            } else {
                fila += " * ";
            }
        }
        console.log(fila);
    }
}







