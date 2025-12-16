/* La diferencia entre null y undefined
Mientras que null es un valor que significa que algo no tiene valor, undefined significa que algo no ha sido definido. Por ejemplo, si creamos una variable sin asignarle ningún valor, su valor será undefined:*/

let rolloDePapel // -> undefined

// También podemos asignar directamente el valor undefined a una variable:

let otroRolloDePapel = undefined // -> undefined

// En cambio, para que una variable tenga el valor null, sólo podemos conseguirlo asignándole explícitamente ese valor:

let Papel = null


/* Comparaciones con null y undefined:
Al usar la igualdad estricta que hemos visto en la clase anterior, null y undefined son considerados diferentes entre sí*/

null === undefined // -> false

// Sólo cuando comparamos null con null o undefined con undefined obtenemos true:

null === null // -> true
undefined === undefined // -> true

