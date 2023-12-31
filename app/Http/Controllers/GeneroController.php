<?php

namespace App\Http\Controllers;

use App\Models\Genero;

class GeneroController extends Controller {
    public function listarGeneros() {
        $generos = Genero::obtenerGenerosEnJSON();

        return response($generos, 200)->header('Content-Type', 'text/plain');
    }
}