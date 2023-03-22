# Chez Mimi Coffee Shop

## Índice

* [1. Descripción](#1-descripción)
* [2. Prototipo](#2-prototipo)
* [3. Referencia de colores](#3-referencias-de-colores)
* [4. Historias de usuarios](#4-historias-de-usuarios)

***

## 1. Descripción

Chez Mimi Coffee Shop es una plataforma para restaurantes que otorga una plataforma para tomar pedidos y recibirlos en la cocina y un back office para el administrador desarrollada con React.js.
Este proyecto utiliza la [Burger Queen API](https://github.com/filletournesols/Burger-queen-api) desarrollada con PostgreSQL y Express.js.

## 2. Prototipo

Este prototipo realizado en Figma cuenta con la vista esperada de todos los roles que pueden ingresar a esta aplicación.
También, se puede hacer una prueba de usabilidad [aquí](https://www.figma.com/proto/EJ304LCLXMduJ4krHDJvGZ/ChezMimi?node-id=10-1084&scaling=scale-down&page-id=0%3A1&starting-point-node-id=10%3A1084&show-proto-sidebar=1).

![waiter-view-1](./assets/WaiterView1.png)
![waiter-view-2](./assets/WaiterView2.png)
![waiter-view-3](./assets/WaiterView3.png)
![chef-view-1](./assets/ChefView1.png)
![chef-view-2](./assets/ChefView2.png)
![admin-view-1](./assets/AdminView1.png)
![admin-view-2](./assets/AdminView2.png)
![admin-view-3](./assets/AdminView3.png)

## 3. Referencia de colores utilizados

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| background | ![#EAE8E0](https://via.placeholder.com/10/EAE8E0?text=+) #EAE8E0 |
| orderBackground | ![#D9D1C9](https://via.placeholder.com/10/D9D1C9?text=+) #D9D1C9 |
| waiter | ![#5b746c](https://via.placeholder.com/10/5b746c?text=+) #5b746c |
| chef | ![#71442a](https://via.placeholder.com/10/71442a?text=+) #71442a |
| admin | ![#B5ACA7](https://via.placeholder.com/10/B5ACA7?text=+) #B5ACA7 |
| mainBtns | ![#AF9696](https://via.placeholder.com/10/AF9696?text=+) #AF9696 |
| inputUnderline | ![#867771](https://via.placeholder.com/10/867771?text=+) #867771 |
| text | ![#403E37](https://via.placeholder.com/10/403E37?text=+) #403E37 |
| alerts | ![#C23B22](https://via.placeholder.com/10/C23B22?text=+) #C23B22 |
| hoverBtns | ![#B1C1C1](https://via.placeholder.com/10/B1C1C1?text=+) #B1C1C1 |
| productsBtn | ![#A3B1A9](https://via.placeholder.com/10/A3B1A9?text=+) #A3B1A9 |
| delivered | ![#8AA7A4](https://via.placeholder.com/10/8AA7A4?text=+) #8AA7A4 |
| canceled | ![#AF9696](https://via.placeholder.com/10/AF9696?text=+) #AF9696 |
| pending | ![#F5ECDB](https://via.placeholder.com/10/F5ECDB?text=+) #F5ECDB |
| delivering | ![#D5BBA6](https://via.placeholder.com/10/D5BBA6?text=+) #D5BBA6 |

## 4. Historias de usuarios

Este proyecto ya contaba con sus propias historias de usuario, criterios de aceptación y definición de terminado, los cuales son:

***

#### [Historia de usuario 1] Mesero/a debe poder ingresar al sistema, si el admin ya le ha asignado credenciales

Yo como meserx quiero poder ingresar al sistema de pedidos.

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario.

* Acceder a una pantalla de login.
* Ingresar email y contraseña.
* Recibir mensajes de error comprensibles, dependiendo de cuál es el error
  con la información ingresada.
* Ingresar al sistema de pedidos si las crendenciales son correctas.

##### Definición de terminado

Lo acordado que debe ocurrir para decir que la historia está terminada.

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 2] Mesero/a debe poder tomar pedido de cliente/a

Yo como meserx quiero tomar el pedido de unx clientx para no depender de mi mala
memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y
que se puedan ir preparando en orden.

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario

* Anotar nombre de clientx.
* Agregar productos al pedido.
* Eliminar productos.
* Ver resumen y el total de la compra.
* Enviar pedido a cocina (guardar en alguna base de datos).
* Se ve y funciona bien en una _tablet_

##### Definición de terminado

Lo acordado que debe ocurrir para decir que la historia está terminada.

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 3] Jefe de cocina debe ver los pedidos

Yo como jefx de cocina quiero ver los pedidos de lxs clientxs en orden y
marcar cuáles están listos para saber qué se debe cocinar y avisar a lxs meserxs
que un pedido está listo para servirlo a un clientx.

##### Criterios de aceptación

* Ver los pedidos ordenados según se van haciendo.
* Marcar los pedidos que se han preparado y están listos para servirse.
* Ver el tiempo que tomó prepara el pedido desde que llegó hasta que se
  marcó como completado.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 4] Meserx debe ver pedidos listos para servir

Yo como meserx quiero ver los pedidos que están preparados para entregarlos
rápidamente a lxs clientxs que las hicieron.

##### Criterios de aceptación

* Ver listado de pedido listos para servir.
* Marcar pedidos que han sido entregados.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).
* Los datos se deben mantener íntegros, incluso después de que un pedido ha
  terminado. Todo esto para poder tener estadísticas en el futuro.

***

#### [Historia de usuario 5] Administrador(a) de tienda debe administrar a sus trabajadorxs

Yo como administrador(a) de tienda quiero gestionar a los usuarios de
la plataforma para mantener actualizado la informacion de mis trabajadorxs.

##### Criterios de aceptación

* Ver listado de trabajadorxs.
* Agregar trabajadorxs.
* Eliminar trabajadoxs.
* Actualizar datos de trabajadorxs.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 6] Administrador(a) de tienda debe administrar a sus productos

Yo como administrador(a) de tienda quiero gestionar los productos
para mantener actualizado el menú.

##### Criterios de aceptación

* Ver listado de productos.
* Agregar productos.
* Eliminar productos.
* Actualizar datos de productos.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***
