// antes de es6
// asignación de valores por defecto a 
// parametros
function newFuction(name, age, country){
    var name = name || 'auvm';
    var age = age || 22;
    var country = country || 'MX';

    console.log(name, age, country);
}

// nueva forma con es6

// así defines valores por defecto a los 
// parametros de una función
function newFunction2(name='auvm', age=22, country='MX'){
    console.log(name, age, country);
}

// al hacer el llamado funciona asignando
// los argumentos o cargando los default
newFunction2();
newFunction2("ANGEL", 18, "MX");

// template literals
// separar o unir elementos
let hello = "Hello,";
let world = "world!";
// forma tradicional
let epicPhrase = hello + " " + world;
console.log(epicPhrase);
// nueva forma 
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);




// Agregar párrafos sin modificadores
// forma tradicional
let lorem = "Lorem ipsum dolor sit amet.\n"
+ "quiero agregar este párrafo.";


// nueva forma 
let lorem2 = `Lorem ipsum dolor sit amet. 
 quiero agregar este párrafo.
 y sigue 
 y sigue`;
 console.log(lorem);
 console.log(lorem2);

 let person = {
    'name': 'auvm',
    'age': 32,
    'country': 'MX'
 }
// tradicional
 console.log(person.name, person.age, person.country);
// nueva
 //let{name, age, country} = person;
 console.log(name, age, country);



// formas de unir arreglos
let team1 = ["Miguel", "Eduardo", "Daniel"];
let team2 = ["Daniela", "Camila", "Vanesa"];

// tradicional
let allTeams = ["David", "Miguel", "Eduardo", "Daniel", "Daniela", "Camila", "Vanesa"];
console.log(allTeams);
// nueva forma
let allTeams2 = ["David", ...team1, ...team2];
console.log(allTeams2);
// duda - es lo mismo?
// let allTeams3 = ["David", team1, team2];
// console.log(allTeams2);



//Declaración de variables
{
    //tradicional
    //pero var tiene scope global total
    var globalVar = "Global var";
}

{
    //nuevas formas con let y const
    //let solo tiene scope local
    let globalLet = "Global let";
    console.log(globalLet);
}

console.log(globalVar);
// console.log(globalLet); no es accesible

// En realidad no son globales, solo son nombre
// para las variables. Excepto var

// Constantes
const a = "b";
// a = "a"; produce un error, no se puede reasignar
console.log(a);


// --------- nueva clase

// declarar y usar objetos
let name = 'auvm';
let age = 22;
//tradicional --- es5
obj = {name: name, age:age};

//nueva forma --- es6
//toma la llave y el valor de las 
//variables
obj2 = {name, age};
console.log(obj2);


// funciones de tipo flecha arrow

const names = [
    {name: 'auvm', age:22},
    {name: 'Miguel', age:23}
];

// tradicional
//función anónima que imprime todos los nombres
                //map a c/u
                        // función anónima con  
                            //item de parámetro
const listOfNames = names.map(function(item){
    console.log(item.name);
});

//nuevas arrow function
                //función item de parámetro 
                        //y lo imprime
const listOfNames2 = names.map(item => console.log(item.name));

//si necesitamos más de un parámetro
const listOfNames3 = (name, age, county) => {
    // ...
}

//si solo es uno y necesita un bloque de código
const listOfNames4 = name => {
    // ...
}

//solo un parámetro y su retorno sencillo
const squere = num => num * num;


// promesas para asincronismo

const helloPromise = () =>{
    return new Promise((resolve, reject) => {
        if(false){
            resolve("Hey!");
        }else{
            reject("Ups...");
        }
    });
}

helloPromise()
    .then(Response => console.log(Response) )
    .then(() => console.log("Hola OOC"))
    .catch(Error => console.log(Error));
    




// clases en javaScript
class Calculator{
    constructor(){
        //declara las variables a usar
        //en la clase
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB){
        //a las variables
                    //asigna los argumentos
                    //recibidos
        this.valueA = valueA;
        this.valueB = valueB;

        //retorna sus valores
        return this.valueA + this.valueB;
    }
}

//declara e instancía un elemento de la clase
const calc = new Calculator();
//invoca al metodo de la instancia y le pasa
//los dos argumentos
console.log(calc.sum(2, 2));



// Importación y exportación de modulos

import {Hello} from "./module";

console.log(Hello());


// generadores - geneators

function* helloWorld(){
    if(true){
        yield 'hello, ';
    }
    if(true){
        yield 'world!';
    }
}

const generetor = helloWorld();
console.log(generetor.next().value);
console.log(generetor.next().value);
