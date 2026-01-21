/* 
Programacion orientada a objetos

Paradigma de la programacion
Los estados y variables seran manejados en objetos
Las acciones de la aplicacion y funcionalidades seran manejadas en metodos
La gran ventaja de programacion orientada a objetos es la estructura y robustez obligatoria
*/

/* 
function calcularIva (precio: number){
  return precio * 0.21
}


monstrarResultado( darFormatoPrecio( calcuarIva(100) ) ) 
*/

/* 
Vamos a tener los datos/estado, variables en objetos
Como vamos a crear muchos objetos JS nos ofrece una herramienta para crearlos
la funcion constructora
*/

class Persona {
  nombre: string = ''
  edad: number

  constructor (nombre: string, edad: number){
    this.edad = edad
    this.nombre = nombre
  }

  presentarse(): void{
    console.log("Hola mi nombre es " + this.nombre)
  }
}

const persona_1 = new Persona('pepe', 40)
persona_1.presentarse()

/* 
Item
  - id
  - precio
  - nivel
  - titulo
  - descripcion

Personaje
  - nombre
  - vida
  - id
  - items (esto debe ser de tipo array de Items)

Crear 3 items y un personaje con datos random
*/