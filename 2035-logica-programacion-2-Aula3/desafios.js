/*let height = parseFloat(prompt("WHats your height?"));
let weight = parseFloat(prompt("How much you weight?"));
function imc() {
    let sqrHeight = height*height
    alert(`Your IMC is ${weight/sqrHeight}`) ;
    return;
}
imc();*/

/*function factorials(num){
    if(num===0 || num===1)
        return 1;
    for (var i = num - 1; i >= 1; i--){
        num *= i;
    }
    console.log(num)
    return num;
 }
 factorials(3);
*/
//crear funcion para convertir una divisa
/*function exchange(val){
    let xchange = parseInt(val*900);
    console.log(xchange);
}
exchange(5)*/

/*function areaPer (height, widht) {
    let area = height*widht;
    let perimeter = 2*(height*widht);
    console.log(area);
    console.log(perimeter);
}
areaPer(4, 5);*/

//Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

/*function cirAreaPer (radio){
    let area = Math.PI*radio*radio;
    let perimeter = 2*Math.PI*radio;
    console.log(area);
    console.log(perimeter);
}
cirAreaPer(4);*/

//Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
/*function multiplyTable(num) {
    const number = parseInt(num);
    for(let i = 1; i <= 10; i++){
       const result = i * number;
       console.log(`${number}x${i}= ${result}`);
    }
}
multiplyTable(9);*/
//Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];
//Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
//Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'
lenguagesDeProgramacion.push('Ruby', 'Golang');
console.log(lenguagesDeProgramacion);
//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
/*function lagnuages(){
    lenguagesDeProgramacion.sort();
    console.log(lenguagesDeProgramacion);
}
lagnuages();*/
//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
/*function languagesBackwards(){
    let languagesReversed = lenguagesDeProgramacion.toReversed();
    console.log(languagesReversed);
}*/
//Crea una función que calcule el promedio de los elementos en una lista de números.

/*function avgElements(){
    var i = 0, sum = 0, Arraylen = myArray.length;
    while(i<Arraylen){
        sum = sum + myArray[i++];
    }
    return sum / Arraylen;
}
var myArray = [1,5,2,3,7];
var a = avgElements(myArray);
console.log(a)
avgElements();*/
//Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

/*function minAndMax(nArray){
    console.log(Math.max.apply(null, nArray));
    return ;
}
minAndMax([1,5,2,3,7]);*/
//Crea una función que devuelva la suma de todos los elementos en una lista
/*function sumOfAll(){
    let numbers = [1,2,3,4,5];
    let total = numbers.reduce((a,b) => a + b, 0);
    console.log(total);
}
sumOfAll();*/

//Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
/*var indexes = [];
var array = ["a","b","c","d","e","f","g"];
function elemnPos(el){
    var idx = array.indexOf(el);
    while(idx != -1){
        indexes.push(idx);
        idx = array.indexOf(el, idx + 1);
    }
    console.log(indexes);
}
elemnPos("f");*/
//Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];
function sumArr (...arrays){
    const n = arrays.reduce((max, xs) => Math.max(max, xs.length), 0);
    const result = Array.from({ length: n });
    return result.map((_, i) => arrays.map(xs => xs[i] || 0).reduce((sum, x) => sum + x, 0));
}
console.log(sumArr([1,2,3], [1,2,3]));
//Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function sqrList(originalList){
    const squaredList = originalList.map(x => x*x);
    return squaredList;
}
console.log(sqrList([8, 16, 32]));