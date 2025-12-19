//  existen dos formas más de declarar funciones en JavaScript: function expression y arrow function. En este caso, hablemos de la primera.

// ¿Qué es una function expression?

// esto es una function expression
const sum = function (a, b) {
  return a + b
}

// esto es una declaración de función
function sum(a, b) {
  return a + b
}

// Con la function expression, a la función se asigna a la variable sum. Esto significa que podemos llamar a la función usando el nombre de la variable:

sum(1, 2) // 3


const saludar = function (nombre) {
    console.log ("Bienvenido " + nombre)
} 

saludar("Oscar")