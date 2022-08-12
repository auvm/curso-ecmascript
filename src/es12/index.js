//remplazo de todas las concidencias
let string = "JavaScript es maravilloso, con JavaScript puedo construir el futuro de la Web";
//solo reemplaza la primera coincidencia
let replacedString1 = string.replace("JavaScript", "Python");
console.log(replacedString);

//reemplaza todas las coincidencias
let replacedString2 = string.replaceAll ("JavaScript", "Python");
console.log(replacedString);
// Resultados:
// Python es maravilloso, con JavaScript puedo construir el futuro de la Web
//  Python es maravilloso, con Python puedo construir el futuro de la Web



// // ahora se puede hacer privado un bloque de código
// class Message{
//     show(val){
//         console.log(val);
//     };
// }
// //totalmente funcional
// const message = new Message();
// message.show(12);

//agregando # al nombre del bloque
//de código se vuelve privado para
//uso exclusivo dentro de la clase
class Message{
    #show(val){
        console.log(val);
    };
}
//genera un error! show no es parte de la clase
const message = new Message();
message.show(12);




//nueva comprovación para varias promesas
//al menos exista una, retorna la primera verdadera/cumplida
let promise1 = new Promise((resolve, reject) => reject("1"));
let promise2 = new Promise((resolve, reject) => resolve("2"));
let promise3 = new Promise((resolve, reject) => reject("3"));

//retorna la primera promesa cumplida
Promise.any([promise1, promise2, promise3])
    .then(Response => console.log(Response));





//Hacer una referencia debil a un elemento
//para evitar ser eliminado por el garbage collector
class anyClass{
    constructor(element){
        this.ref = new WeakRef(element);
    }
}



//nuevos operadores
// Asignación AND (&&=), en caso de cumplirse una verdad, asigna un valor a una variable.
// Asignación OR (||=), en caso de cumplirse una falsedad, asigna un valor a una variable.
// Asignación Nullish (??=), en caso de cumplirse undefined o null, asigna un valor a una variable.
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

    isTrue = true;
    isFalse = false;
console.log(isTrue ||= isFalse);

    isTrue = undefined;
    isFalse = false;
console.log(isTrue ??= isFalse);