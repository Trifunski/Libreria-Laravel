# Proyecto UT03 - Aplicación Web de Tienda de Libros Online

Este repositorio contiene el código fuente de una pequeña aplicación web desarrollada en Laravel para gestionar pedidos en una tienda de libros online. La aplicación hace uso de documentos XML para almacenar información relevante, como la configuración de usuarios y los detalles de los libros.

## Funcionalidades Principales

1. **Inicio de Sesión:**
   - Los usuarios deben autenticarse mediante un nombre de usuario y contraseña almacenados en el archivo `configuracion.xml`.
   - Se crea una sesión de usuario y se gestionan variables de sesión para el carrito de compras.

2. **Listado de Libros:**
   - Se pueden listar todos los libros disponibles.
   - Los libros se obtienen desde el archivo `libros.xml`.
   - Se visualiza la información esencial de cada libro, incluyendo título, escritores, género y número de páginas.

3. **Listado por Género:**
   - Se pueden listar libros filtrados por género.
   - Los géneros se obtienen y muestran dinámicamente mediante AJAX.

4. **Carrito de Compra:**
   - Los usuarios pueden ver los libros añadidos al carrito.
   - Pueden agregar o eliminar unidades de libros en el carrito.

5. **Procesar Pedido:**
   - Se simula la finalización del proceso de compra.
   - El carrito se vacía una vez que se procesa el pedido con éxito.

6. **Cerrar Sesión:**
   - Los usuarios pueden cerrar sesión, eliminando la sesión actual mediante una petición AJAX a la ruta `logout`.

## Estructura del Proyecto

### Modelos

- **Usuario:** Obtiene datos de autenticación desde `configuracion.xml`.
- **Libro:** Representa los datos de los libros y los obtiene desde `libros.xml`.
- **Genero:** Define los géneros de libros en formato JSON.
- **Carrito:** Gestiona operaciones de carga, añadir y eliminar elementos del carrito utilizando sesiones.

### Controladores

- **UsuarioController:** Maneja operaciones de inicio y cierre de sesión.
- **CarritoController:** Gestiona operaciones relacionadas con el carrito.
- **LibroController:** Maneja operaciones de listado de libros.
- **GeneroController:** Gestiona operaciones relacionadas con los géneros.

### Vistas

- **Principal:** Crea dinámicamente contenido mediante AJAX, incluyendo listados de libros, géneros y detalles del carrito.
- **Cabecera:** Contiene el menú con opciones como "Listado de Géneros", "Listado de Libros", "Ver Carrito" y "Cerrar Sesión".
- **Procesar_Pedido:** Simula la finalización del proceso de compra.

### Archivos Adicionales

- **cargarDatos.js:** Contiene acciones AJAX para cargar géneros, libros, añadir al carrito, etc.
- **Rutas:** Define las rutas necesarias para la aplicación.

## Instrucciones para Desarrolladores

1. Clona este repositorio en tu máquina local.
2. Configura un entorno de desarrollo Laravel.
3. Ejecuta las migraciones y los seeders para inicializar la base de datos (si es necesario).
4. ¡Comienza a desarrollar!

## Uso de la Aplicación

1. Inicia sesión con tu nombre de usuario y contraseña proporcionados en `configuracion.xml`.
2. Explora las diferentes opciones del menú, añade libros al carrito y procesa tus pedidos.
3. Cierra sesión cuando hayas terminado.

¡Gracias por utilizar nuestra aplicación de tienda de libros online desarrollada en Laravel! ¡Esperamos que disfrutes explorando y comprando libros de tu elección!