// junio de 2019
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

//flat sirve para dimensionar las matrices
console.log(array.flat());


let array1 = [1, 2, 3, 4, 5];
//anidado con una arrow function
console.log(array1.flatMap(value => [value, value * 2]));

console.log(array1.map(value => [value, value * 2]));



//recorte de espacios en blanco como en python
//con las funciones trimStrat/End()
let hello = '               hello world     ';
console.log(hello);
console.log(hello.trimStart());
console.log(hello.trimEnd());



//para la detección de errores
//forma tradicional
try{

}catch(error){
    error;
}

//nueva forma
try{

}catch{
    //el valor error es opcional definirlo
    //ya estará disponible en el bloque catch
    error
}



//devolver un objeto a partir de un arreglo
//array => objeto
let entries = [["name", "auvm"], ["age", 22], ["country", "MX"]];
console.log(Object.fromEntries(entries));

//identificar simbolos 
let mySymbol = "My Simbol";
let symbol = Symbol(mySymbol);

//acceder al contenido de un objeto tipo Symbol
console.log(symbol.description);

