/* Imagina que queremos que nuestra función de saludar, pueda saludar a cualquier persona, no solo a Oscar. Para ello, podemos hacer que la función acepte un parámetro, que será el nombre de la persona a la que queremos saludar.*/

function saludar(nombre) {
    console.log("Hola como estas " + nombre)
}

// Ahora, cada vez que llamemos a la función, podemos pasarle una cadena de texto (string):

saludar("Oscar")
saludar("Thiago")


// calculadora 

// sumar
function sumar(a, b) {
    return a + b
}


// restar
function resta(a, b) {
    return a - b
}

// resulta de la suma
const resultadoSuma = sumar(2, 3)
console.log(resultadoSuma)

// resulta de la resta
const resultadoResta = resta(5, 3)
console.log(resultadoResta)

// PARAMETROS Y ARGUMENTOS

/* En el ejemplo anterior, hemos visto que podemos pasarle valores a la función cuando la llamamos. A estos valores se les llama argumentos. Y a los valores que recibe la función, se les llama parámetros.*/

// la función suma tiene dos parámetros: a y b
function sumar2(a, b) {
  return a + b
}

// cuando llamamos a la función, le pasamos dos argumentos: 2 y 3
const resultadoSuma2 = sumar2(2, 3)
console.log(resultadoSuma2)


// FUNCIONES PRIMERA CLASE 

// las funciones son valores como cualquier otro, Al igual que puedes pasar un número o un string como parámetro, también puedes pasar una función:

function saludar(nombre) {
  console.log('¡Hola, ' + nombre + '!')
}

function despedir(nombre) {
  console.log('¡Adiós, ' + nombre + '!')
}

// Función que recibe OTRA FUNCIÓN como parámetro
function procesarUsuario(nombre, accion) {
  accion(nombre) // Ejecutamos la función que nos pasaron
}

// Pasamos diferentes funciones como parámetros
procesarUsuario('Ana', saludar)   // ¡Hola, Ana!
procesarUsuario('Luis', despedir) // ¡Adiós, Luis!