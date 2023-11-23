<?php

use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\CarritoController;
use App\Http\Controllers\LibroController;
use App\Http\Controllers\GeneroController;

// Rutas de vistas
Route::get('/', function () {
    return view('login');
});

Route::get('principal', function () {
    return view('principal');
})->name('principal');

Route::get('procesar-pedido', function () {
    return view('procesar_pedido');
})->name('procesar-pedido');

// Rutas relacionadas con libros y géneros
Route::group(['prefix' => 'libros'], function () {
    Route::get('/listar', [LibroController::class, 'listarLibros'])->name('listar-libros');
    Route::get('/por-genero', [LibroController::class, 'listarLibrosPorGenero'])->name('libros-por-genero');
});

Route::get('/listar-generos', [GeneroController::class, 'listarGeneros'])->name('listar-generos');

// Rutas relacionadas con el carrito
Route::group(['prefix' => 'carrito'], function () {
    Route::get('/agregar-libro', [CarritoController::class, 'añadirLibroCarrito'])->name('añadir-libro');
    Route::get('/listar', [CarritoController::class, 'listarLibroCarrito'])->name('listar-carrito');
    Route::get('/eliminar-libro', [CarritoController::class, 'eliminarLibroCarrito'])->name('eliminar-libro');
    Route::get('/vaciar', [CarritoController::class, 'vaciarCarrito'])->name('vaciar-carrito');
});

// Rutas de usuario
Route::get('/cerrar-sesion', [UsuarioController::class, 'cerrarSesion'])->name('cerrar-sesion');
Route::get('/iniciar-sesion', [UsuarioController::class, 'iniciarSesion'])->name('iniciar-sesion');