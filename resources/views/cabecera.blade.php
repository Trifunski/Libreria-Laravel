<link rel="stylesheet" href="{{ asset('bootstrap/css/bootstrap.css') }}">

<script src="cargarDatos.js"></script>


<h1 class="m-3">Librería</h1>

<?php
    if (session('usuario')) {
        echo '<div class="m-3">Usuario: ' . session('usuario') . '</div>';
    } else {
        echo '<div class="m-3">Usuario: Invitado</div>';
    }
?>

<div class="m-3">
    Menú: <a href="#" onclick="cargarGeneros()">Listado de Generos</a> / <a onclick="cargarLibros()" href="#">Listado de Libros</a> / <a onclick="cargarCarrito()" href="#">Ver Carrito</a> / <a onclick="logout()" href="#">Cerrar Sesión</a>
</div>



<hr class="m-3">

