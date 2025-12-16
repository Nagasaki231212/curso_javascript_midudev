// El operador typeof devuelve una cadena de texto que indica el tipo de dato 

let number = 12 
console.log(typeof number)
console.log
console.log(typeof undefined) // "undefined"
console.log(typeof true) // "boolean"
console.log(typeof 42) // "number"
console.log(typeof 'Hola mundo') // "string" 
console.log(typeof null) // esto retorna "object" pero es considerado un bug

/*Lo correcto sería que typeof null devolviera "null", pero es un error histórico que no se puede corregir sin romper el código existente.
Por eso, si quieres comprobar si una variable es null, debes usar la comparación estricta ===:
*/ 

const foo = null
console.log(foo === null)


/* Usando con operadores de comparación
El operador typeof es muy útil cuando se usa con operadores de comparación. Por ejemplo, para comprobar si una variable es del tipo que esperamos: */

const age = 28  
console.log(typeof age === 'number') 

// Una vez que tenemos expresiones lógicas, podemos empezar a encadenar operadores lógicos para comprobar múltiples condiciones:

const AGE = 28 // buena practica el nombre de las variables de constancia siempre en mayusculas 

console.log(typeof AGE === 'number' && AGE > 20) 