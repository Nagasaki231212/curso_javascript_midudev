/* En JavaScript, la sentencia switch es una estructura de control que nos permite ejecutar diferentes bloques de código dependiendo del valor de una expresión. Esta estructura es útil cuando queremos realizar diferentes acciones basadas en una única variable.*/

/* La sentencia switch evalúa una expresión, comparando el valor con los diferentes casos que le hemos definido. Si hay coincidencia ejecuta el bloque de código asociado. Para ello, se utiliza la sentencia break para separar cada caso y evitar que se sigan evaluando el resto de casos.*/

const dia = "jueves"

switch (dia) {
    case "jueves":
        console.log("Hoy es jueves")
        break;

    default:
        console.log("Hoy no es jueves!")
        break; 
}



/* Vamos a hacer esto un poco más interesante. En JavaScript podemos recuperar la información de la hora y la fecha usando el objeto Date. Este objeto tiene un método llamado getDay() que nos devuelve el día de la semana en formato numérico, siendo 0 el domingo y 6 el sábado.*/

const DIA = new Date().getDay()

switch (DIA) {
    case 0:
        console.log("Hoy es Domingo")
        break;
    case 1:
        console.log("Hoy es lunes")
        break;
    case 2:
        console.log("Hoy es martes")
        break
    case 3:
        console.log("Miercoles de junta")
        break;
    case 4:
        console.log("Jueves romantico")
        break;
    default:
        console.log("Dios los bendiga!")
        break;
}

// switch vs if

// Muchas veces verás que puedes escribir el mismo código usando switch o if. El ejemplo anterior con un if:

const dia2 = new Date().getDay()

if (dia2 === 0) {
  console.log('¡Hoy es domingo! 😴')
} else if (dia2 === 1) {
  console.log('¡Nooo, es lunes! 😢')
} else if (dia2 === 2) {
  console.log('¡Hoy es martes! 🥵')
} else if (dia2 === 3) {
  console.log('¡Hoy es miércoles! 🤓')
} else {
  console.log('Se acerca el fin de! 🚀')
}

// A veces es más fácil de leer con switch y otras con if. ¡Depende de ti! Aunque más adelante, en el curso, veremos alternativas a switch usando algunas estructuras de datos. 

// AGRUPANDO CASES

// En ocasiones, queremos que varios casos ejecuten el mismo código. En lugar de repetir el mismo código en cada caso, podemos agruparlos usando el mismo case para cada uno de ellos.

const dia3 = new Date().getDay()

switch (dia3) {
  case 0:
  case 6:
    console.log('¡Hoy es fin de semana! 🥳')
    break
  case 1:
  case 2:
  case 3:
  case 4:
    console.log('¡Nooo, a trabajar! 😢')
    break
  case 5:
    console.log('¡Hoy es viernes casi a descanzar ! 🤓')
    break
}


// Como ves, en este caso, tampoco estamos usando el default. Como te comentaba antes, es totalmente opcional, no tienes por qué usarlo siempre

// EL PATRON SWITCH(TRUE) 

/* Existe un patrón que se usa a veces con switch que es switch(true). Esto es, en lugar de evaluar una expresión, evalúa una condición ignorando por completo el valor de la expresión.

Por ejemplo:*/

let edad = 25

switch (true) {
  case edad >= 18 && edad < 25:
    console.log('Eres mayor de edad y eres joven')
    break
  case edad >= 25 && edad < 40:
    console.log('Eres mayor de edad y estás en plena madurez')
    break
  case edad >= 40:
    console.log('Eres mayor de edad y estás en la mejor edad')
    break
  default:
    console.log('Eres menor de edad')
}


