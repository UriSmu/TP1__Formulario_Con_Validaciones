//1
/*
const nombre = prompt('Hola. Ingrese su nombre: ');
console.log(`Hola, ${nombre}, bienvenido a nuestro programa.`);
*/

//2
/*
const num1 = parseFloat(prompt('Ingrese un número: '));
const num2 = parseFloat(prompt('Ingrese otro número: '));
console.log(`Suma: ${num1 + num2}`);
console.log(`Resta: ${num1 - num2}`);
console.log(`Multiplicación: ${num1 * num2}`);
if(num2 != 0)
{
    console.log(`División: ${num1 / num2}`);
}
else
{
    console.log('El 2do número es 0, por lo que no se puede ejecutar la división');
}
*/

//3
/*
const num = parseInt(prompt('Ingrese un número: '));
if(num % 2 == 0)
{
    console.log(`El número ${num} es par`);
}
else
{
    console.log(`El número ${num} es impar`);
}
*/

//4
/*
const palabra = prompt('Ingrese una palabra: ');
console.log(`La palabra "${palabra}" tiene ${palabra.length} caracteres`);
*/

//5
/*
const frase = prompt('Ingrese una frase: ');
const cant = parseInt(prompt('Ingrese la cantidad de veces a repetir la frase: '));
for(let i = 1; i <= cant; i++)
{
    console.log(frase);
}
*/

//6
/*
const num = parseInt(prompt('Ingrese un número: '));
for(let i = 1; i <= 10; i++)
{
    console.log(`${i}: ${num * i}`);
}
*/

//7
/*
function getRandomInt(min, max) 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const random = getRandomInt(1, 11);
console.log("Recuerde ingresar números del 1 al 10");
let correcto = false;
let intento;

do
{
    intento = parseInt(prompt('Adivine: ¿Cuál es el número?'));
    if(intento == random)
    {
        correcto = true;
    }
    else if(intento > random)
    {
        console.log(`El número es menor a ${intento}`);
    }
    else
    {
        console.log(`El número es mayor a ${intento}`);
    }
}while(!correcto)

console.log(`Ganaste! El número era ${random}`);
*/

//8
/*
const palabra = prompt('Ingrese una palabra: ').toLowerCase();
let char;
let cant = 0;
for(let i = 0; i < palabra.length; i++)
{
    char = palabra[i];
    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u')
    {
        cant++;
    }
}
console.log(`La palabra "${palabra}" tiene ${cant} vocales.`);
*/

//9
/*
const palabra = prompt('Ingrese una palabra: ');
let char;
let alReves = "";

for(let i = (palabra.length - 1); i >= 0; i--)
{
    char = palabra[i];
    alReves+=char;
}

console.log(`${palabra} --> ${alReves}`);
*/

//10
const palabra = prompt('Ingrese una palabra: ');
let char;
let alReves = "";

for(let i = (palabra.length - 1); i >= 0; i--)
{
    char = palabra[i];
    alReves+=char;
}

if(alReves == palabra)
{
    console.log(`La palabra ${palabra} es palíndroma.`)
}
else
{
    console.log(`La palabra ${palabra} no es palíndroma.`)
}