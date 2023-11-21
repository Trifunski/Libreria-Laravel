<?php

use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\CarritoController;
use App\Http\Controllers\LibroController;
use App\Http\Controllers\GeneroController;

Route::get('/', function () {
    return view('login');
});

Route::get('/listar-libros', [LibroController::class, 'listarLibros'])->name('listar-libros');
Route::get('/libros-por-genero', [LibroController::class, 'listarLibrosPorGenero'])->name('libros-por-genero');
Route::get('/listar-generos', [GeneroController::class, 'listarGeneros'])->name('listar-generos');

Route::get('/ver-carrito', [CarritoController::class, 'verCarrito'])->name('ver-carrito');
Route::post('/anadir-libros', [CarritoController::class, 'anadirLibros'])->name('anadir-libros');
Route::post('/eliminar-libros', [CarritoController::class, 'eliminarLibros'])->name('eliminar-libros');
Route::get('/cargar-carrito', [CarritoController::class, 'cargarCarrito'])->name('cargar-carrito');
Route::get('/procesar-pedido', [CarritoController::class, 'procesarPedido'])->name('procesar-pedido');

Route::get('/cerrar-sesion', [UsuarioController::class, 'cerrarSesion'])->name('cerrar-sesion');
Route::post('/iniciar-sesion', [UsuarioController::class, 'iniciarSesion'])->name('iniciar-sesion');

Route::get('principal', function () {
    return view('principal');
})->name('principal');

