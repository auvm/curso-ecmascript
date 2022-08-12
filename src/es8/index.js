
// de un objeto cualquiera
const team = {
    backend: "Uriel Velasco",
    frontend: "Miguel",
    designer: "Eduardo",
}

// obtener todas entradas 
let entries = Object.entries(team);
console.log(entries);
console.log(entries.length);


// obtener solo los valores
let values = Object.values(team);
console.log(values);
console.log(values.length);


// agregar a cadenas
const cadena = "hello";
console.log(cadena.padStart("8", "-hi"));
console.log(cadena.padEnd("8", "-hi"));

// agregar directamente
console.log("World!".padStart("13", "Hello, "));

// Si el maximo es menor, recorta el principio
console.log("World!".padStart("10", "Hello, "));




// promesas then, catch y finally
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout( ()=> resolve("Hello, World"), 3000)  
        : reject(new Error("Test Error"));
    });
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();


const anotherFuction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);

    }catch(error){
        console.log(error);
    }
}

anotherFuction();