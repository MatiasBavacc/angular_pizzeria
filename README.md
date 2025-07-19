# Pizzeria :pizza:
  - [ ] App para realizar pedidos a domicilio o retiro para disfrutar de una buena comida.
  - [x] Capaz de seleccionar entre pizzas, empanadas, tartas, snguches, tortillas, papas fritas y bebidas.
  - [ ] Se desea incorporar la capacidad de agregar diferentes productos de forma eficiente.


## Tabla de Contenidos
- [Uso](#uso)
- [Secciones](#secciones)
- [Endpoints](#endpoints)
  - [Producto](#producto)
    - [Get Productos](#get-productos)
    - [Put Producto](#put-producto)
  - [Compra](#compra)
    - [Get Compras](#get-compras)
    - [Post Compra](#post-compras)
- [Instalación](#instalación)
- [Despliegue](#despliegue)
- [Autores](#autores)

# Uso
1. Al navegar por el incio, podemos encontrar una barra de navegacion, que nos introduce a promociones 
o un carta con varidad de productos, una caja de pizza como *carrito*, que al contener un producto, se llenara con una pizza.
2. Luego en el cuerpo central de la app nos podemos encontrar con tres listas distintas de articulos para 
adquirir, seleccionando una cantidad podemos sumar al *carrito* precionando en **Agregar**.
3. Aparecera una lista nueva de productos a la derecha, que son los que queremos adquirir, en este *carrito* se podran quitar articulos
que no queremos comprar, ya sea por el boton **Vaciar Carrito** que elimina todos los articulos o el boton **Quitar**.
4. Adicionalmente podremos utilizar el boton **Comprar** para enviar el pedido a la casa de comida y realizar nuestra compra.
5. Si por algun la lista de productos se quedara sin stock, existe una forma de restaurarlo, mediante el boton **Restaurar** que se encuentra
en la *barra de navegacion*.
6. Si no le convence la busqueda de articulo por articulo, cuenta con un buscador de productos, que busca dentro de la pagina actual en la
que se encuentra.

## Secciones
### Home
- Esta seccion esta compuesta por multiples listas de productos. Engloba solamente Pizza, Empanadas y Bebidas.
### Promociones
- Esta propuesta selecciona unicamente los articulos que estan en promocion y es en la unica seccion donde se encuentran los precios
reducidos, seleccionar los articulos de esta seccion tendra una reduccion importante en su costo.
### Contacto
- Es una seccion generica, que no tiene ningun tipo de utilidad, mas que la de agregar los creditos de recursos con licencia que utiliza esta pagina.
### Carta
- Forma parte de la *Barra de navegacion* de la pagina y es el unico medio para ir a todas las secciones de la app.
#### Pizzas
- En este apartado se encuentran las pizzas especialidad de la casa.
#### Empanadas
- En esta seccion podremos encontrar las mejores empanadas del condado.
#### Tartas
- Si de tartas hablamos, las que aparecen en esta seccion, son las de los sabores mas variados y elejidos por los clientes.
#### Sanguches
- Nada como un buen *Chegusan* para bajonear con esos amigos que todos queremos, en esta lista encontraremos los mas llenadores.
#### Guarniciones
- Si Algo bueno tiene esta seccion, es el riquisimo sabor de una buena tortilla de papas fritas, como la que cocinaban en casa.
#### Bebidas
- ¿~~Una Birra~~?... :man_shrugging:
- ¿*Una coca*? Esa pregunta tiene una unica respuesta y es, *"estan fresquitas en la heladera"*, nada mejor para acompañar la cena si estas estas 
tomando medicacion.  En esta seccion encontraras toda la linea de cola, mas consumida en la **Republica Argentina**.

# Endpoints
- Podemos hablar de dos *"tablas"*, una de **Compras** y otra de **Product**.
## Producto
- Es una api que tiene todos los los datos de los productos que se muestan en la app.
- https://6674c3b275872d0e0a9779cd.mockapi.io/api/product
###  Get Productos
- Este enpoint sirve para obtener todos los articulos de la lista de productos.

### Put Product
- Este endpoint sirve para modificar un productos de la *"tabla"*, por lo genereral, el stock.

## Compra
- Es una api que tiene todos los datos de las compras realizadas por la aplicacion.
- https://6674c3b275872d0e0a9779cd.mockapi.io/api/compras
###  Get Compras
- Este enpoint sirve para obtener todos los datos de la lista de compras.

### Post Compra
- Este endpoint sirve para crear una compra en la *"tabla"* dejando registrado todos los **Productos** y los *usuarios*.

## Instalación
```bash
git clone https://github.com/MatiasBavacc/angular_pizzeria.git
cd angular_pizzeria
npm install
```

## Despliegue

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.9.

### Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

### Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

### Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

### Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

### Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

### Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


# Autores

| Nombre   | Apellido | Dni        | E-mail                 | Sede   |
|----------|----------|------------|------------------------|--------|
| Matías   | Bava     | 38.961.362 | matiasbavacc@gmail.com | Tandil |