const button = document.getElementById("btn");

button.addEventListener("click", async function(){
    const module = await import("./file.js");
    module.Hello();
});



// Se agrego soporte a un entero mayor
// a 2^53, se llama big int y se defina
// de las siguientes dos formas
const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);



//despliege del estado de las promesas
const promise1 = new Promise((resolve, reject) => reject("reject  1"));
const promise2 = new Promise((resolve, reject) => resolve("resolve 2"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 3"));

//allSettled valida el cumplimiento de todas las promesas
//aunque no hayan sido cumplidas
Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));


console.log(window);
console.log(globalThis);



//nuevo operador condicional de nulo
//pregunta si el objeto es nulo - ??
const fooo = null ?? "No es nulo";
console.log(fooo);


let users = { };
//en intentar acceder a propiedades que no existen
//rompe la app
//console.log(users.profile.email);

//la nueva opción permite verificar sin romper nada
console.log(users?.profile?.email);

//ejemplo de una validación
if(users?.profile?.email){
    console.log("email exists");
}else{
    console.log("no email exists");
}



