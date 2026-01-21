//Quiero crear personas


//Objeto literal (en general lo evitamos usar en POO)
/* const persona_1 = {
    nombre: 'pepe',
    edad: 40
}

const persona_2 = {
    nombre: 'maria'
} */

/* function crearPersona (nombre, edad){
    return {
        nombre: nombre,
        edad: edad
    }
}

const persona_1 = crearPersona('pepe', 40)
const persona_2 = crearPersona('maria', 70)
 */
//Persona 1 pertenece al mismo grupo que persona 2


//Funcion constructora
/* 
this es una palabra reservada que cambia de valor dependiendo el contexto
en el contexto de una funcion constructora es una autoreferencia a la instancia de la funcion
Esta autoreferencia inicialmente es un objeto vacio
Este objeto this es modificable
La instancia de la funcion se genera cada vez que hay un new Persona()
Esta funcion va a retornar al objeto this
*/

/* function Persona (nombre, edad){

    this.nombre = nombre
    this.edad = edad
} */

//Metodo
//Son funciones directamente asociadas a la clase Persona
/* Persona.prototype.presentarse = function (){
    console.log("hola me llamo " + this.nombre)
}

const persona_1 = new Persona('pepe', 30)

console.log(persona_1 instanceof Persona)
persona_1.presentarse() */

//Class ES6
//Por buenas practicas las class deben ir en mayuscula
/* class Persona {
    constructor (nombre, edad){
        this.nombre = nombre,
        this.edad = edad
    }

    presentarse(){
        console.log("hola me llamo " + this.nombre)
    }
}

const persona_1 = new Persona('pepe', 40)
persona_1.presentarse() */