//Declarações de funções
//1- Normal
function somar(a, b, c) {
    console.log(a + b + c);
}
somar(1, 2, 3);

//2- Function expression
const anomMethod = function (a, b, c) {
    console.log(a + b + c);
}
anomMethod(1, 2, 3);

//3- Arrow function
const arrowMethod = (a, b, c) => {
    console.log(a + b + c)
}
arrowMethod(1, 2, 3);

//Parâmetros de funções
//1- Normal
function sum(a, b, c) {
    console.log(a + b + c);
}
sum(1, 2, 3);

//2- Arguments (Arguments é um array)
function sumArguments(a, b, c) {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total, a, b, c);
}
sumArguments(1, 2, 3, 4, 5, 6, 7, 8, 9);

//3 - Parâmetro padrão

function sumDefault(a = 2, b = 3, c) {
    console.log(a + b + c);
}
sumDefault(undefined, undefined, 4);

//4- Atribuição de argumento via desestruturação de um objeto

function desestruturacao({ value1, value2, value3 }) {
    console.log(value1, value2, value3);
}
desestruturacao({ value1: 'valor1', value2: 'valor2', value3: 'valor3' });

//Ou

const obj = {
    value1: 'valor1',
    value2: 'valor2',
    value3: 'valor3'
};

desestruturacao(obj);

//5- Atribuição de argumento via desestruturação de um array

function desestruturacaoArray([value1, value2, value3]) {
    console.log(value1, value2, value3);
}
desestruturacaoArray(['valor1', 'valor2', 'valor3']);

//Ou

const array = [
    'valor1',
    'valor2',
    'valor3'
];

desestruturacaoArray(array);

//6- Operador Rest como parâmetro

function restExample(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        else if (operador === '-') acumulador -= numero;
        else if (operador === '*') acumulador *= numero;
        else if (operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
}
restExample('+', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9);


