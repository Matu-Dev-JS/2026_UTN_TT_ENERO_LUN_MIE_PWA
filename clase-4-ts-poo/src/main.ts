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

  constructor(nombre: string, edad: number) {
    this.edad = edad
    this.nombre = nombre
  }

  presentarse(): void {
    console.log("Hola mi nombre es " + this.nombre)
  }
}

const persona_1 = new Persona('pepe', 40)
persona_1.presentarse()

class Caballero extends Persona {
  profesion: string = 'caballero'
  ingresoMensual: number
  aniosExperiencia: number
  constructor(nombre: string, edad: number, ingresoMensual: number, aniosExperiencia: number) {
    super(nombre, edad)
    this.ingresoMensual = ingresoMensual
    this.aniosExperiencia = aniosExperiencia

  }

  //Ojo, presentarse ya esta en la clase padre, por ende por buenas practicas debe tener los mismos parametros y valores de devolucion
  presentarse(): void {
    console.log("Hola soy el caballero sir " + this.nombre)
  }
}

const lancelot = new Caballero('Lancelot', 42, 1000, 10)
lancelot.presentarse()

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

class Item {
  id: number;
  price: number;
  level: number;
  title: string;
  description: string;

  constructor(
    id: number,
    price: number,
    level: number,
    title: string,
    description: string,
  ) {
    this.id = id;
    this.price = price;
    this.level = level;
    this.title = title;
    this.description = description;
  }

  showInfo(): string {
    return `Item: ${this.title} - (Id: ${this.id}) \n Precio: ${this.price} \n Nivel: ${this.level} \n Descripción: ${this.description}`;
  }
}
class Character {
  id: number;
  name: string;
  life: number;
  items: Item[];

  constructor(id: number, name: string, life: number, items: Item[]) {
    this.id = id;
    this.name = name;
    this.life = life;
    this.items = items;
  }
}

const item1 = new Item(
  1,
  100,
  5,
  "Espada de Fuego",
  "Una espada que arde con llamas intensas.",
);
const item2 = new Item(
  2,
  150,
  7,
  "Escudo de Madera",
  "Un escudo resistente hecho de madera.",
);
const item3 = new Item(
  3,
  200,
  10,
  "Poción de Vida",
  "Una poción que restaura la salud.",
);

const character = new Character(1, "Aragorn", 100, [item1, item2, item3]);

console.log(
  `Personaje: ${character.name} (Id: ${character.id}) - Vida: ${character.life} \n Items: \n${item1.showInfo()} \n ${item2.showInfo()} \n ${item3.showInfo()}`,
);

/* 

ItemInventario
Se usara para representar cada item dentro del Inventario
  - id
  - precio
  - nivel
  - titulo
  - descripcion
  - cantidad

Inventario
Tendra la responsabilidad de manejar el sistema de items de la app
- propiedades:
  - limite_items
  - items[] : ItemInventario
- parametro configurable: 
  - limite de items: Es el limite de items distintos que puede almacenar un inventario.
    Ejemplo: Si el limite es 4 significa que no puedo tener en inventario mas de 4 lapiceras distintas, pero si puedo tener 100 de cada tipo

- metodos
  - agregarItem(item: Item) 
    Evaluara si el id del item agregado ya esta en la lista de items y en caso de estar solo incrementara la cantidad
    Si no esta entonces evaluara si no se llego al limite y en caso de no haber llegado agregara el item con cantidad 1
  
  - eliminarItem(item_id)
    Eliminar el item de la lista de items

  - soltarUnItem(item_id)
    Evaluara si la cantidad de items con ese id es mayor a 1 y en ese caso disminuira la cantidad en 1
    Sino lo eliminara


new ItemManager ({max_size: 4})

//Por el el momento no vamos a conectar el inventario al personaje
*/


class ItemInventario{
  id: number
  precio: number
  nivel: number
  titulo: string
  description: string
  cantidad: number
  constructor(
    id: number,
    precio: number,
    nivel: number,
    titulo: string,
    description: string,
    cantidad: number = 1
  ) {
    this.id = id
    this.precio = precio
    this.nivel = nivel
    this.titulo = titulo
    this.description = description
    this.cantidad = cantidad
  }
}

class Inventario {
  limite_de_items: number
  items: ItemInventario[] = [] // Inicializamos la propiedad
  constructor(limite_de_items: number){
    this.limite_de_items = limite_de_items
  }

  buscarItemPorId (id: number): null | ItemInventario {
    return this.items.find(item => item.id === id) || null
  } 
  // Metodo agregarUnItem para agregar items al inventario:
  agregarUnItem(item: Item): void{
    const itemExistente = this.buscarItemPorId(item.id)
    if (itemExistente){
      itemExistente.cantidad++
      return
    }
    if (this.items.length < this.limite_de_items){
      const nuevo_item = new ItemInventario(item.id, item.price, item.level, item.title, item.description, 1)
      this.items.push(nuevo_item)
    }
  }
  
    // Método eliminarUnItem para eliminar items del inventario:
    eliminarUnItem(item_id: number): void {
      this.items = this.items.filter(item => item.id !== item_id)
    }
    // Método soltarUnItem para soltar items del inventario:
    soltarUnItem(item_id: number): void{
      const item = this.buscarItemPorId(item_id)
      if (!item) return
      if (item.cantidad > 1){
        item.cantidad--
      } else {
        this.eliminarUnItem(item_id)
      }
    }
}
const inventarioNaruto = new Inventario(4)
/* 
inventarioNaruto.agregarUnItem(item1)
inventarioNaruto.agregarUnItem(item1)
inventarioNaruto.soltarUnItem(item1.id)
inventarioNaruto.soltarUnItem(item1.id)
console.log(inventarioNaruto.items) */