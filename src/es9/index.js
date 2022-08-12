// creada en junio 2019

const obj = {
    name: "auvm",
    age : 22,
    country : "MX"
};

// toma valores del objeto

// un valor especifico y puede encapsular
// el resto en ..all
let {name, ...all} = obj;
console.log(name, all);





// utilizar propiedades de propagación podemos
// unir varios pedazos de objetos en uno solo

const obj1 = {
    
    country : "MX"
};

const obj2 = {
    name: "auvm",
    age : 22,
 
};

const objFull = {
    //creamos un objeto a partir
    //de los dos anteriores
    ...obj1,
    ...obj2
};

console.log(objFull);





// promesas then, catch y finally

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout( ()=> resolve("Hello, World"), 3000)  
        : reject(new Error("Test Error"));
    });
};

helloWorld()
    .then(Response => console.log(Response))
    .catch(Error => console.log(Error))
    .finally(() => console.log("Finalizó"));






    // patrones regex para identificar valores
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec("2018-04-20");
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);