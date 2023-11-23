<?php
    namespace App\Models;

    use Illuminate\Database\Eloquent\Model;

    class Carrito extends Model {

        public static function obtenerLibroIsbn($isbn) {
        
            $xml = simplexml_load_file(\storage_path('app/configuracion/libros.xml'));
        
            foreach ($xml->libro as $libro) {
                if ($libro->isbn == $isbn) {
                    return $libro;
                }
            }
        
            return null;
        }
    }
?>