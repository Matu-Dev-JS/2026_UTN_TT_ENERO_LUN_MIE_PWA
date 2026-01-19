
/* let message : string | number = 'hello world';
let nombre : null | string = null
let estaActivo : boolean = false
 */
//Una forma de hacer tipado de objetos
/* let persona : {
    nombre: string,
    edad: number
} = {
    nombre: 'pepe',
    edad: 40
} */

//Es mejor esta forma
/* interface Persona {
    nombre: string,
    edad?: number,
    dni?: string
}

let persona_2 : Persona = {
    nombre: 'pepe',
    edad: 50
}

let persona_3 : Persona = {
    nombre: 'Juan',
    edad: 43,
    dni: '11222333'
}

const notas : string[] = ['pepe']
const personas : Persona[] = [persona_2, persona]

function sumar (a: number, b: number): number{
    return a + b
}

function saludar (nombre: string): void{
    alert('Hola ' + nombre)
}

let dato_random : any = undefined
 */

/* Carrito de compras */
/* 
Guardar en una variable el estado del carrito de compras
Cada elemento del carrito sera { id: number, quantity: number, title: string, precio: number }
Crear las siguientes funciones:
    - agregarAlCarrito(id, title, cantidad, precio)
    - eliminarDelCarrito(id) : Busca el item por id y lo elimina
    - quitarUnaUnidadDelCarrito(id) : Busca el item por id y verifica la cantidad
        - si es 1 entonces lo elimina
        - si es mas de uno entonces decrementa su cantidad en 1
    - vaciarCarrito() : Vacia el carrito
    - calcularTotal() : Retornara un numero con el precio total del carrito
*/