import ENVIRONMENT from "./config/environment.config.js"

import express from 'express'

//Crear una app en express
const app = express()

/* 
Esto es un middleware, basicamente una funcion que se antepone al controlador, lo hace en este caso es transformar el body recibido como JSON en el caso de que te envien un JSON.
Express por defecto no espera recibir JSON, por ende si vos envias JSON, por defecto este sera undefined.
*/
app.use(express.json())

const products = [
    {
        id: 1,
        title: 'Mesa negra',
        description: 'lorem',
        price: 200
    },
    {
        id: 2,
        title: 'Mesa blanca',
        description: 'lorem',
        price: 1500
    },
    {
        id: 3,
        title: 'Mesa marron',
        description: 'lorem',
        price: 5000
    }
]



/* app.post(
    '/api/products',
    (request, response) => {
        //Request.body es donde el cliente va a enviar datos
        
        const {title, price, description} = request.body
        const new_product = {
            title, //Un string de almenos 3 caracteres
            price, //Un numero, mayor 1
            description, //Opcional
            id: products.length + 1
        }
        products.push(new_product)
        response.json({
            message: 'Producto creado',
            products: products
        })
    }
)
 */


app.post('/api/products', (req, res) => {
    // t = string al menos 3 caracteres, p = Num > 1, description: Optional  
    const { title, price, description } = req.body;
    if (title.length <= 3) {

        console.error('el titulo tiene que tener mas de 3 caracteres');
        return res.json({ error: 'el titulo tiene que tener mas de 3 caracteres' });
    } else if (price < 1) {

        console.error('Precio tiene que ser mayor a 1');
        return res.json({ error: 'Precio tiene que ser mayor a 1' });
    };
    const new_product = { title, price, description, id: products.length + 1 };
    products.push(new_product);
    return res.json({ message: 'producto creado' });
});

app.get(
    '/api/products',
    (request, response) => {

        const { min_price, max_price } = request.query


        let products_filtered = [...products]
        if (min_price && !isNaN(min_price)) {

            products_filtered = products_filtered.filter(
                (product) => {
                    return product.price >= Number(min_price)
                }
            )
        }


        if (max_price && !isNaN(max_price)) {
            products_filtered = products_filtered.filter(
                (product) => product.price <= Number(max_price)
            )
        }

        //Envio una respuesta JSON al cliente
        return response.json(
            {
                message: 'Lista de productos obtenida',
                products: products_filtered
            }
        )
    }
)

app.get(
    '/api/products/:product_id',
    (request, response) => {

        const { product_id } = request.params
        const product_selected = products.find(
            (product) => Number(product.id) === Number(product_id)
        )
        if (!product_selected) {
            return response.json(
                {
                    message: 'Producto no encontrado'
                }
            )
        }
        else {
            return response.json(
                {
                    message: "Producto encontrado",
                    product: product_selected
                }
            )
        }
    }
)

//Cuando alguien haga un GET a la direccion principal de nuestra API responderemos con un 'Hola desde express'
app.get(
    '/',
    (request, response) => {
        response.send('Hola desde express')
    }
)

app.post(
    '/',
    (request, response) => {
        response.send('hola desde express')
    }
)

//Hacer que nuestra app en express se escuche en cierto puerto de nuestra PC
//Espera recibir 2 parametros
//1: puerto => en que direccion se ejecuta la app
//2: Callback FN => una vez la app se ejecute en ese puerto se activara la callback
app.listen(
    ENVIRONMENT.PORT,
    () => {
        console.log(`La aplicacion se esta ejecutando correctamente en el puerto ${ENVIRONMENT.PORT}`)
    }
)

/* 
Que es express?
Es un framework de desarrollo para crear servidores web, API's.

Las APIs que creamos, como podemos testearlas?
- Postman
- Insomia
- Etc.

Que son y para que sirven los metodos HTTP?
Son verbos que utilizamos para diferenciar que hace especificamente cierto endpoint
- get
- post
- delete
- put
Ejemplo tengo el endpoint /api/product

GET /api/product?limit=200 => trae la lista de productos (NO RECIBE BODY)
POST /api/product => Crear un producto
PUT /api/product/:product_id => Actualizar un producto
DELETE /api/product => Eliminar todos los productos


Pregunta tecnica: El metodo define al 100% el tipo de accion que realmente se hara, es decir podemos asegurar que un POST crea un recurso en el servidor?
NO, el verbo es semantico, es decir es una buena practica que cree un recurso en el servidor si es un POST, pero la eleccion es del desarrollador.

Formas de pasar datos a la API:
- BODY: La carga util (Payload) que enviamos al servidor
    Aclaracion: No te olvides de que si vas a mandar JSON debes configurar tu API para recibir JSON.
    EJEMPLO: Si creo un producto, los datos de ese producto se envian por body al servidor.

- QueryString: Sirven para parametrizar y filtrar tu consulta, tienen la sig sintaxis: /api/products?limit=20&page=2&search=audi&category=autos. 
    { 
        limit: '20',
        page: '2',
        search: 'audi',
        category: 'autos'
    }
    Los puedo obtener del request.query

- PathParams: Sirve para busquedas mas exactas como por ID 
    Ejemplo: GET /api/product/:product_id donde product_id es un path param que representa el id del producto que estamos buscando
    Para acceder a las pathParams debemos hacerlo por medio de request.params y tengan en cuenta que siempre seran STRINGS.


EJERCITACION:
TO DO List

El servidor tendra un estado centralizado donde guardara la informacion de las task a resolver.
Cada tarea tendra el siguiente formato:
    titulo, descripcion, tiempo_estimado_en_hrs, finalizado, id, fecha_creacion

ENDPOINTS:
    POST /api/tareas 
        body: {titulo, descripcion, tiempo_estimado_en_hrs} (el id se lo asigna el servidor)
        Debera crear y agregar la tarea con su id al estado global de tareas (Tener en cuenta la fecha de creacion que sea la actual y fecha_finalizacion que sea null)

    GET /api/tareas
        Debera devolver la lista de tareas

    GET /api/tareas/:tarea_id 
        Devolver la tarea por su ID
    
    PUT /api/tareas/:tarea_id/estatus 
        Enviar por body si finalizado es true o false (Sirve para finalizar una tarea), si finaliza guardar fecha_finalizacion como la fecha actual, si quita el finalizado entonces guardar finalizado como false y fecha_finalizacion como null

    DELETE /api/tareas/:tarea_id
        Eliminar una tarea por ID

Aclaracion: Para guardar una fecha usar new Date()
Si se busca hacer cierta accion sobre una tarea no existe responder con un mensaje que diga que dicho recurso no existe.

*/

const tareas = []

app.post("/api/tareas", (req, res) => {

    const { titulo, descripcion, tiempo_estimado_en_hrs } = req.body;
    //Opcional: Validar el body de la solicitud
    const newTask = {
        id: tareas.length + 1,
        titulo: titulo,
        descripcion: descripcion,
        tiempo_estimado_en_hrs: tiempo_estimado_en_hrs,
        creado_en: new Date(),
        finalizado_en: null,
        finalizado: false
    };
    tareas.push(newTask);
    return res.status(201).json({
        mensaje: "Tarea creada con exito",
        data: {
            tareas
        }
    });
});



/* 

GET /api/tareas
    Debera devolver la lista de tareas

GET /api/tareas/:tarea_id 
    Devolver la tarea por su ID
*/

app.get(
    '/api/tareas',
    (request, response) => {

        return response.json({
            mensaje: "Lista de tareas obtenida con exito",
            data: {
                tareas
            }
        })
    }
)

app.get("/api/tareas/:tarea_id", (req, res) => {
    const { tarea_id } = req.params;
    const tarea_selected = tareas.find(
        (tarea) => Number(tarea.id) === Number(tarea_id),
    );
    if (!tarea_selected) {
    return res.status(404).json({
        mensaje: "Tarea no encontrada",
        status: 404 //ESTE NUMERO ES MI ELECCION, NO SIGUE ALGUNA PRACTICA O CONVENCION DE LOS STATUS DE RESPUESTA HTTP
    });
    } else {
        return res.status(200).json({
            message: "Tarea encontrada",
            status: 200,
            data: { tarea: tarea_selected },
        });
    }
});