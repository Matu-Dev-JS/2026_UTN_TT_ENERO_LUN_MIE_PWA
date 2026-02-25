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

