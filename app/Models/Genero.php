<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Genero extends Model {

    public static function obtenerGenerosEnJSON() {

        $xml = simplexml_load_file('libros.xml');

        $generos = array();
        
        if (isset($xml->libro)) {

            foreach ($xml->libro as $libro) {

                $generos[] = (string) $libro->genero;

                $genero = (string) $libro->genero;
    
                if (!in_array($genero, $generos)) {
    
                    $generos[] = $genero;
                }
            }   
        } else {
            $generos[] = "No hay géneros";
        }

        $generos = array_unique($generos);

        $generos = array_values($generos);

        $generosCodificados = array();

        foreach ($generos as $key => $genero) {
            $generosCodificados[] = array("cod" => $key + 1, "nombre" => $genero);
        }

        return json_encode($generosCodificados);

    }

}