### Challenge


###### Paso 1 - configuración <br />
> Instalar o tener instalado docker y docker composer <br />
> Descargar repositorio en un directorio de su preferencia <br />


###### Paso 2 - ejecución de comandos <br />
> docker-compose up -d <br />
> cd html/ <br />
> npm i <br />
> npm start


###### Paso 3 <br />
> Requests


###### Obtenga los productos comprados por un usuario X.
> GET /api/orders/user/:id <br />
> :id -> id del usuario (ej.: 0x0be8add0fc6f11eab8920242ac120008) <br />
> http://localhost:1000/api/orders/user/0x0be8add0fc6f11eab8920242ac120008 <br />


### Explicación





### uuid generados con UUID_TO_BIN(UUID())
> datos para testing
> user_id      0x0be8add0fc6f11eab8920242ac120008
> cart_id      0x5b456bc2fc6f11eab8920242ac120008
> order_id     0x98e91635fc7011eab8920242ac120008
> payment_id   0x7e4ee616fc7111eab8920242ac120008
> products
>    0xd7651958fc7111eab8920242ac120008
>    0xe621216bfc7111eab8920242ac120008
> cart_items
>    0x324c2998fc7211eab8920242ac120008
>    0x37be4a4ffc7211eab8920242ac120008

