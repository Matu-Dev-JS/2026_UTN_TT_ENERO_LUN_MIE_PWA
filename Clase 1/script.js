/* 
- Tipos de datos

- Operadores aritmeticos

- Operadores logicos (&&, ||, !)

- Variables, Alcance  

- Condicionales

- Bucles: 
    - For (1)
    - for of  (2)
    - for in  (1)

- funciones
    - parametros
    - retorno
    - callbacks (1)

- Objetos y arrays
    - desestructuracion

- Metodos avanzados de array (3)
    - map
    - filter (1)
    - find (1)
    - findIndex (6)

- spread operator (...) (3)

falsy:
    NaN
    0
    undefined
    null
    ''
    -0
*/

/* 
- findIndex (6)
- Metodos avanzados de array (3)
- spread operator (...) (3)
- for of  (2)
- for in  (1)
- For (1)
- callbacks (1)
*/

const personas = [
    {
        id: 1, 
        nombre: 'Sergio'
    },
    {
        id: 2, 
        nombre: 'Ricardo'
    },
    {
        id: 3, 
        nombre: 'Javier'
    },
]

//Eliminar a el usuario con id 2

//splice
/* 
- el indice del elemento que queremos eliminar
- cuantos elementos quiero eliminar
*/

//Como puedo averigurar el indice del elemento con id 2
//Deberiamos usar findIndex porque es un metodo que te permite determinar el indice de un elemento a partir de una condicion
//findIndex tiene un recorrido interno del array, recibira una funcion y esa funcion la ejecutara por CADA ELEMENTO del array, si la funcion retorna un falsy entonces pasa al sig elemento y si la funcion retorna Thruthy el metodo findIndex retorna el indice de el elemento que estamos recorriendo
/* 
const posicion_del_usuario_2 = personas.findIndex(
    (persona) => {
        return Number(persona.id) === Number(2)
    }
)


personas.splice(posicion_del_usuario_2, 1) 
*/
/* 
const posicion_del_usuario_2 = personas.findIndex(
    function (persona) {
        return Number(persona.id) === Number(2)
    }
)
personas.findIndex(
    (persona) => Number(persona.id) === Number(2)

) */