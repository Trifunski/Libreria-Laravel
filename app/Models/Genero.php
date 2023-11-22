<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Genero extends Model {

    public static function obtenerGenerosEnJSON() {

        $generos = [
            ["cod" => '1', "nombre" => "Ciencia Ficción"],
            ["cod" => '2', "nombre" => "Comedia"],
            ["cod" => '3', "nombre" => "Distopía"],
            ["cod" => '4', "nombre" => "Drama"],
            ["cod" => '5', "nombre" => "Histórica"],
            ["cod" => '6', "nombre" => "Terror"],
        ];

        return $generos;

    }

}