
/* 
type Role = 'user' | 'admin' | 'support'
type Number = number

let user_role : Role = 'hola' 

*/
/* type Direction = 'TOP' | "DOWN" | 'RIGHT' | "LEFT"
let current_direction : Direction = 'arriba' */
/* type Person = string | {nombre: string}
let persona : Person = 90 */

/* 
Puestos posibles: 'Developer' | 'Designer' | 'Marketing' | 'Proyect Manager' | 'HR' 

Crear las siguientes clases:

Empleado
- nombre
- sueldo
- fecha_contratacion
- id_empleado
- puesto: Puesto
- presentarse(): Debe decir por consola: "Hola soy {nombre} y trabajo como {puesto}" 

Pasante (es un empleado)
- tiempo_de_contrato_en_meses
- hacerCosasDePasante(): 
  - Si es un dev debe decir por consola "tire mi cafe por error"
  - Sino solo decir "deberia terminar a las 10 pero saldre a las 12"

*/

type Puesto= 'Developer' | 'Designer' | 'Marketing' | 'Proyect Manager' | 'HR'
class Empleado{
  nombre:string;
  sueldo:number;
  fecha_de_contratacion:Date;
  id_empleado:number;
  puesto:Puesto;
  constructor(nombre:string, sueldo:number, fecha_de_contratacion:Date, id_empleado:number, puesto:Puesto){
    this.nombre = nombre
    this.sueldo = sueldo
    this.fecha_de_contratacion = fecha_de_contratacion
    this.id_empleado = id_empleado
    this.puesto = puesto
  }

  presentarse():void{
    console.log(`Hola soy ${this.nombre} y trabajo como ${this.puesto}`)
  }
}


class Pasante extends Empleado{
  tiempo_de_contrato_en_meses:number;
  constructor(nombre:string, sueldo:number, fecha_de_contratacion:Date, id_empleado:number, puesto:Puesto, tiempo_de_contrato_en_meses:number){
    super(nombre, sueldo, fecha_de_contratacion,id_empleado,puesto)
    this.tiempo_de_contrato_en_meses = tiempo_de_contrato_en_meses
  }
  hacerCosasDePasante():void{
    if(this.puesto === 'Developer'){
      console.log("tire mi cafe por error")
    }
    else{
      console.log('deberia terminar a las 10 pero saldre a las 12')
    }
  }
}

/* 
ManejadorEmpleados
Responsabilidad de manejar una lista de empleados en una empresa
- contador_id_empleados
- empleados (Tipo Empleados)
- id_empresa
- agregarEmpleado(nombre, puesto, sueldo, fecha_contratacion) (id_empleado se lo da el sistema)
- obtenerEmpleadoPorId(id_empleado) busqueda de uno
- obtenerEmpleadosPorPuesto(puesto) filtro
- obtenerEmpleadosPorRangoFechas(fecha_inicio, fecha_fin): Traera los empleados que hayan sido contratados en ese rango
- calcularGastoMensualEnSalarios()
- calcularGastoAnualEnSalarios() 

*/

class ManejadorEmpleados  {
  contador_id_empleados: number
  id_empresa: number
  empleados: Empleado[];
  constructor(contador_id_empleados: number, id_empresa: number, empleados: Empleado[]) {
    this.contador_id_empleados = contador_id_empleados;
    this.id_empresa = id_empresa;
    this.empleados = empleados;
  };
  agregarEmpleado(nombre: string, puesto: Puesto, sueldo: number, fecha_contratacion: Date): void {
    const nuevoid = this.contador_id_empleados;
    this.empleados.push(new Empleado(nombre, sueldo, fecha_contratacion, nuevoid, puesto));
    this.contador_id_empleados++;
  };
  obtenerEmpleadoPorId(id_empleado: number): Empleado | undefined {
    return this.empleados.find(e => e.id_empleado === id_empleado);
  };
  obtenerEmpleadosPorPuesto(puesto: Puesto): Empleado[] {
    return this.empleados.filter(e => e.puesto === puesto);
  };
  obtenerEmpleadosPorRangoFechas(fecha_inicio: Date, fecha_fin: Date): Empleado[] {

    return this.empleados.filter((empleado) => {
      return empleado.fecha_de_contratacion > fecha_inicio && empleado.fecha_de_contratacion < fecha_fin
    })

  };
  calcularGastoMensualEnSalarios(): number {
    return this.empleados.reduce((acumulador: any, empleado) => {
      return acumulador += empleado.sueldo;
    }, 0)
  }
  calcularGastoAnualEnSalarios(): number {
    return this.calcularGastoMensualEnSalarios() * 12;
  };
};

/* const empleados_manager = new ManejadorEmpleados(1, 1, []);

empleados_manager.agregarEmpleado('pepe', 'Developer', 1000, new Date());

console.log(empleados_manager.calcularGastoAnualEnSalarios())
console.log(empleados_manager.obtenerEmpleadoPorId(1))

console.log(empleados_manager.obtenerEmpleadosPorPuesto('Developer'))
 */


/* 
Empresa
- id_empresa
- manejador_empleados
- razon_social
- cuit

Accion
- tipo: "contratar" | "despedir" | "promover" 
- fecha
- id
- id_empresa
- descripcion: string

HistorialAcciones
- contador_id_acciones
- acciones: Accion[]
- id_empresa
- agregarAcciones(accion)

Ejemplo:

{
  contador_id_acciones: 2,
  id_empresa: 1,
  acciones: [
    {
      tipo: 'contratar',
      fecha: Date.now(),
      id: 1,
      id_empresa: 1,
      descripcion: 'El empleado Pepe con id 20 ha sido contratado'
    }
  ]
}
ACLARACION: No es necesario que el historial_acciones sea llamado en el manejador_empleados
*/
type TipoAccion = "contratar" | "despedir" | "promover"
class Empresa {
  id_empresa: number
  manejador_empleados: ManejadorEmpleados
  razon_social: string
  cuit: number
  constructor(id_empresa: number, manejador_empleados: ManejadorEmpleados, razon_social: string, cuit: number) {
    this.id_empresa = id_empresa
    this.manejador_empleados = manejador_empleados
    this.razon_social = razon_social
    this.cuit = cuit
  }
}
class Accion {
  tipo: TipoAccion
  fecha: Date
  id_accion: number
  id_empresa: number
  descripcion: string
  constructor(tipo: TipoAccion, fecha: Date, id_accion: number, id_empresa: number, descripcion: string) {
    this.tipo = tipo
    this.fecha = fecha
    this.id_accion = id_accion
    this.id_empresa = id_empresa
    this.descripcion = descripcion
  }
}
class HistorialAcciones {
  contador_id_acciones: number
  acciones: Accion[]
  id_empresa: number
  constructor(id_empresa: number) {
    this.contador_id_acciones = 0
    this.acciones = []
    this.id_empresa = id_empresa
  }
  //Aca seria buena  idea generar laccin
  agregarAccion(tipo: TipoAccion, descripcion: string): void {
    this.contador_id_acciones++
    this.acciones.push(new Accion(tipo, new Date(), this.contador_id_acciones, this.id_empresa, descripcion))
  }
}
