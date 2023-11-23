<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Libro extends Model {

    // Implementar lógica para obtener datos del archivo "libros.xml"

    public static function obtenerLibros() {
        // Implementar la lógica para obtener libros en formato JSON

        $xml = simplexml_load_file(\storage_path('app/configuracion/libros.xml'));

        $libros = [];

        foreach ($xml->libro as $libro) {
            $libros[] = $libro;
        }

        $json = json_encode($libros);

        return $json;

    }

    public static function obtenerLibrosPorGenero($genero) {

        // Implementar la lógica para obtener libros por género

        $genero = ucfirst($genero);

        $xml = simplexml_load_file(\storage_path('app/configuracion/libros.xml'));

        $libros = [];

        foreach ($xml->libro as $libro) {
            if ($libro->genero == $genero) {
                $libros[] = $libro;
            }
        }

        return $libros;
 
    }

}
