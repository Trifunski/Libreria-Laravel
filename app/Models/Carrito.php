<?php

    namespace App\Models;

    use Illuminate\Database\Eloquent\Model;

    class Carrito extends Model {

        public static function obtenerLibroIsbn($isbn) {

            // Implementar la lógica para obtener libros por género
    
            $xml = simplexml_load_file('libros.xml');
    
            foreach ($xml->libro as $libro) {
                if ($libro->isbn == $isbn) {
                    return $libro;
                }
            }
    
            return null;
     
        }

    }

?>