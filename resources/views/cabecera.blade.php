<link rel="stylesheet" href="{{ asset('bootstrap/css/bootstrap.css') }}">

<script src="cargarDatos.js"></script>


<h1 class="m-3">Librería</h1>

<?php
    if (session('usuario')) {
        echo '<div class="m-3">Usuario: ' . session('usuario') . '</div>';
    }
?>

<div class="m-3">
    Menú: <a href="#" onclick="cargarGeneros()">Listado de Generos</a> / <a href="#">Listado de Libros</a> / <a href="#">Ver Carrito</a> / <a href="#">Cerrar Sesión</a>
</div>

<hr class="m-3">

