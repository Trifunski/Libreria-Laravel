<?php

use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\CarritoController;
use App\Http\Controllers\LibroController;
use App\Http\Controllers\GeneroController;

Route::get('/', function () {
    return view('login');
});

Route::get('principal', function () {
    return view('principal');
})->name('principal');

Route::get('procesar-pedido', function () {
    return view('procesar_pedido');
})->name('procesar-pedido');

Route::get('/listar-libros', [LibroController::class, 'listarLibros'])->name('listar-libros');
Route::get('/libros-por-genero', [LibroController::class, 'listarLibrosPorGenero'])->name('libros-por-genero');
Route::get('/listar-generos', [GeneroController::class, 'listarGeneros'])->name('listar-generos');

Route::get('/agregar-libro', [CarritoController::class, 'añadirLibroCarrito'])->name('añadir-libro');
Route::get('/listar-carrito', [CarritoController::class, 'listarLibroCarrito'])->name('listar-carrito');
Route::get('/eliminar-libro', [CarritoController::class, 'eliminarLibroCarrito'])->name('eliminar-libro');

Route::get('/cerrar-sesion', [UsuarioController::class, 'cerrarSesion'])->name('cerrar-sesion');
Route::post('/iniciar-sesion', [UsuarioController::class, 'iniciarSesion'])->name('iniciar-sesion');


