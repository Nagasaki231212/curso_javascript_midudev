// Recursividad

// La recursividad es una técnica de programación que consiste en que una función se llame a sí misma.

// Ejemplo de recursividad

// Vamos a crear una función que cuente desde un número hasta cero.

function cuentaAtras(numero) {
  // Condición base: Si el número que recibe es
  // menor de 0 entonces salimos de la función
  if (numero < 0) {
    return
  }

  // Si el número era mayor o igual a 0, lo mostramos
  console.log(numero)

  // Y llamamos a la función con el número anterior
  cuentaAtras(numero - 1)
}

// Si llamamos a la función con el número 3, el resultado será:

cuentaAtras(3)
// -> 3
// -> 2
// -> 1
// -> 0