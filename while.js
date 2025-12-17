/* La sintaxis del bucle while es similar a la de un condicional if. La única diferencia es que, en lugar de ejecutar el código una sola vez, se ejecuta mientras se cumpla la condición.*/

/* Vamos a crear la cuenta atrás de un cohete. Creamos una variable cuentaAtras que contenga el número de segundos que faltan para el lanzamiento. En este caso, vamos a empezar con 10 segundos.*/

// Para quitarle un segundo a la cuenta atrás, vamos a utilizar el operador de resta (-) y el operador de asignación (=).
console.log("Primer ejercicio")

let cuentaAtras = 10
cuentaAtras = cuentaAtras - 1
console.log(cuentaAtras) 


console.log("Segundo ejercicio")
// Sabiendo esto y cómo funciona el bucle while, podemos crear la cuenta atrás del cohete.

// iniciamos la variable fuera del bucle


let lanzamientoCohete = 20

// mientras la cuenta atrás sea mayor que 0

while (lanzamientoCohete > 0 ) {
    // mostramos el valor de la cuenta atrás en cada iteración
    console.log(lanzamientoCohete)
    // restamos 1 a la cuenta atrás
    lanzamientoCohete = lanzamientoCohete - 1
}

console.log('¡Despegue! 🚀')


/* Podemos controlar cuándo queremos salir de un bucle utilizando la palabra reservada break. Cuando el intérprete de JavaScript encuentra la palabra break, sale del bucle y continúa ejecutando el código que haya después.*/

console.log("Tercer ejercicio")

let numeros = 10

while (numeros > 0) {
  console.log(numeros)
  numeros = numeros - 1

  // si la cuenta atrás es 5, salimos del bucle
  if (numeros === 5) {
    break // <---- salimos del bucle
  }
}


// Anidación de bucles

console.log("Cuarto ejercicio")

const NUMERO_REVISIONES = 3
let lanzamiento = 10

// mientras el lanzamiento sea mayor que 0
while (lanzamiento > 0) {
  // mostramos el valor del lanzamiento
  console.log(lanzamiento)

  // creamos una variable para contar las revisiones realizadas
  // y la inicializamos a cero
  let revisionesRealizadas = 0

  // hasta que no hayamos realizado las 3 revisiones...
  while (revisionesRealizadas < NUMERO_REVISIONES) {
    // y sumamos 1 a las revisiones realizadas
    revisionesRealizadas = revisionesRealizadas + 1
    console.log(revisionesRealizadas + ' revisiones realizadas...')
  }

  // ahora podemos restar 1 al lanzamiento
  lanzamiento = lanzamiento - 1
}
