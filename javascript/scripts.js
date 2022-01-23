/* Criar um sistema que ao passar um valor no prompt, vai me retornar um alert mostrando
a tabuada desse número:
EX: Número digitado "1"
1 * 1 = 1
1 * 2 = 2
1 * 3 = 3
1 * 4 = 4
1 * 5 = 5
1 * 6 = 6
1 * 7 = 7
1 * 8 = 8
1 * 9 = 9
1 * 10 = 10
*/


let = valorDigtado = parseFloat(prompt("Digite um número para ver sua tabuada:")); // Onde guardara o valor digitado

// Função que irá calcular a tabuada do valor digitado
function tabuada(numero) {
    this.numero = 0;

    Number(numero) ? this.numero = numero : this.numero = 0;

    let multplicarPor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let i = 1;
    let result = [];

    for (i of multplicarPor) {
        let resultado = i * this.numero;
        result.push(resultado);
    }


    return alert("Tabuada de: " + this.numero + "\n" +
        this.numero + " * " + multplicarPor[0] + " = " + result[0] + "\n" + // Linha 1 número tal * 1 = resultado tal
        this.numero + " * " + multplicarPor[1] + " = " + result[1] + "\n" + // Linha 2 número tal * 2 = resultado tal
        this.numero + " * " + multplicarPor[2] + " = " + result[2] + "\n" + // Linha 3 número tal * 3 = resultado tal
        this.numero + " * " + multplicarPor[3] + " = " + result[3] + "\n" + // Linha 4 número tal * 4 = resultado tal
        this.numero + " * " + multplicarPor[4] + " = " + result[4] + "\n" + // Linha 5 número tal * 5 = resultado tal
        this.numero + " * " + multplicarPor[5] + " = " + result[5] + "\n" + // Linha 6 número tal * 6 = resultado tal
        this.numero + " * " + multplicarPor[6] + " = " + result[6] + "\n" + // Linha 7 número tal * 7 = resultado tal
        this.numero + " * " + multplicarPor[7] + " = " + result[7] + "\n" + // Linha 8 número tal * 8 = resultado tal
        this.numero + " * " + multplicarPor[8] + " = " + result[8] + "\n" + // Linha 9 número tal * 9 = resultado tal
        this.numero + " * " + multplicarPor[9] + " = " + result[9]); // Linha 10 número tal * 10 = resultado tal

}


tabuada(valorDigtado);      