//  Funciones

console.log("ejercicio primero")

function saludar() {
    console.log("Hola, Oscar Gil!")
}


saludar()


console.log("ejercicio dos")

function suma() {
   return 1 + 1
} 

let resultado = suma()
console.log(resultado) 

console.log("ejercicio tres")

function getRandomNumber() {
    const RANDOM = Math.random()  // por ejemplo: 0.6803487380457318

    const MULTIPLIED = RANDOM * 10   // lo multiplicamos por 10 para que esté entre 0 y 10, -> 6.803487380457318

    const ROUNDED = Math.floor(MULTIPLIED)   // redondeamos hacia abajo para que esté entre 0 y 9, -> 6

    const RESULT = ROUNDED + 1   // le sumamos uno para que esté entre 1 y 10 -> 7

    return RESULT  // devolvemos el resultado
}   

console.log(getRandomNumber())


// Las funciones pueden devolver un resultado (un número, una cadena de texto, un booleano...) o puede no devolver nada. En ese caso, la función devuelve undefined.

// Para llamar a una función, simplemente escribimos su nombre seguido de paréntesis:

saludar() // -> Hola Oscar 