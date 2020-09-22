### Challenge


###### Paso 1 - configuración <br />
> Instalar o tener instalado docker y docker composer <br />
> Descargar repositorio en un directorio de su preferencia <br />


###### Paso 2 - ejecución de comandos <br />
> docker-compose up -d <br />
> cd html/ <br />
> npm i <br />
> npm start


###### Paso 3 - aplicar casos de uso y ver los resultados <br />
> Requests


###### Obtenga los productos comprados por un usuario X.
> GET /api/orders/user/:id <br />
> :id -> id del usuario (ej.: 0x0be8add0fc6f11eab8920242ac120008) <br />
> http://localhost:1000/api/orders/user/0x0be8add0fc6f11eab8920242ac120008 <br />

###### Obtenga los productos asociados a una orden de acuerdo al external_reference_id de un pago.
> GET /api/orders/payment/:order_id/:ext_ref_id <br />
> :order_id -> id de la orden (ej.: 0x98e91635fc7011eab8920242ac120008) <br />
> :ext_ref_id -> external reference id (ej.: EXTERNAL_ID_001) <br />
> http://localhost:1000/api/orders/payment/0x98e91635fc7011eab8920242ac120008/EXTERNAL_ID_001

###### Obtenga los productos del carro de compras de un usuario X.
> GET /api/orders/cart/user/:id
> :id -> id del usuario (ej.: 0x0be8add0fc6f11eab8920242ac120008) <br />
> http://localhost:1000/api/orders/cart/user/0x0be8add0fc6f11eab8920242ac120008








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

