
//Funciones ya asignacion de valores de ECMAScript 6
function newFunction(name, age, country) {
    var name = name|| 'oscar';
    var age = age || 15;
    var country = country || 'MX';
    console.log(name, age, country);

}
function newFunction2(name = 'oscar', age =32, country = 'MX'){
    console.log(name, age, country);
}
newFunction2();
newFunction2('Ricardo','23','CO');
//Template litails-> para unir y separar siendo el caso
let hello = 'Hello';
let world = 'world';
let epicPhrase = hello + ' ' +world;
console.log(epicPhrase)

//UNION MAS AMIGABLE de concatenar
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//multilinea
let lorem = "quiero escribir una phrase epica que podamos separar \n"
+ "otr phrase epica que necesitamos."; 
//otra forma de poder usar multilinea //es6
let lorem2 =`otra frase epica que necesitamos
ahora es otra frase epica
`;
console.log(lorem);
console.log(lorem2);

//Destructuracion de elementos
let person = {
    'name' :'oscar',
    'age' : 32,
    'country': 'MX' 
};

console.log(person.name, person.age, person.country);

let{ name,age, country} = person;
console.log(name, age, country);
// si solo quiero presentar 2 elementos
/*
let{name, age} = person;
console.log(name,age);
*/

//Unir arreglos en un solo elemento
let team1 =['Oscar','Julian','Ricardo'];
let team2 = ['valeria','Yesica','Camila'];
let education = ['David', ...team1, ...team2];
console.log(education);


//let -> forma tambien de guardar variable en memoria
//var disponible en el global
var hola = 'Hola';
//let disponible en el scope, en el bloque de codigo llamado
let hola = 'Hola boli';
//hacemos un bloque
{
    var globalVar = "Global var";

}
//otro bloque
//let accesible solo dentro de un bloque
{
    let globalLet = "Global Let";
    console.log(globalLet);
}
//var accesible de manera global
console.log(globalVar);


//establecer variables

//variable
var a = 'b';
a = 'a';
console.log(a);

//constantes, no se pueden cambiar
const b = 'b';


//crear objetos
let name = 'miler';
let age = 21;
//es5
obj = {name: name, age : age};
//es6
obj2 = {name,age};
console.log(obj2);

//arrow -> funciones tipo flecha
const names = [
    {name:'Oscar', age: 32 },
    {name: 'Yesica', age:27}
]

let listOfName = names.map(function(item){
    console.log(item.name);
})
//es6
let listOfName2 = name.map(item => console.log(item.name));