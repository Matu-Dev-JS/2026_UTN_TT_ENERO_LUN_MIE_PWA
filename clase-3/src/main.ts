
let message : string | number = 'hello world';
let nombre : null | string = null
let estaActivo : boolean = false

//Una forma de hacer tipado de objetos
let persona : {
    nombre: string,
    edad: number
} = {
    nombre: 'pepe',
    edad: 40
}

//Es mejor esta forma
interface Persona {
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

console.log(message)