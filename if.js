// El código condicional es un bloque de código que se ejecuta sólo si se cumple una condición. 
// En JavaScript usamos la palabra reservada if para crear un bloque condicional, así:

const EDAD = 16

if (EDAD >= 18) {
    console.log("El usuario es mayor de edad")
} else if (EDAD >= 16){
    console.log("El usuario tiene casi la mayoria de edad")
} else {
    console.log("El usuario es menor de edad")
}

// Como ves, ponemos la condición entre paréntesis y el código se ejecuta si la condición entre llaves es true. Si la condición es false, el código no se ejecuta.

// Anidación de condicionales Es posible anidar condicionales dentro de otros condicionales. Por ejemplo: 

const EDAD2 = 17
const tieneCarnet = true

if (EDAD2 >= 18) {
  if (tieneCarnet) {
    console.log('Puedes conducir')
  } else {
    console.log('No puedes conducir')
  }
} else {
  console.log('No puedes conducir')
}

/* En muchas ocasiones vas a querer evitar la anidación innecesaria de condicionales ya que se hacen difíciles de leer y mantener. En estos casos es mejor utilizar operadores lógicos para crear la condición:*/

const EDAD3 = 17
const tieneCarnet2 = true

// si es mayor de edad y tiene carnet entonces...
if (EDAD2 >= 18 && tieneCarnet2) {
  console.log('Puedes conducir')
} else {
  console.log('No puedes conducir')
}


// Otra técnica muy interesante es la de guardar el resultado de la condición en una variable, para que tus condiciones sean mucho más legibles:

const EDAD4 = 20
const tieneCarnet3 = true
const puedeConducir = EDAD4 >= 20 && tieneCarnet3 

if (puedeConducir) {
    console.log("El usuario puede conducir")
} else {
    console.log("El usuario no puede conducir")
}

