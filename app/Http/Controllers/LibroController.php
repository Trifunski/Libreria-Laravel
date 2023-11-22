<?php

    namespace App\Http\Controllers;

    use Illuminate\Http\Request;
    use App\Models\Libro;

    class LibroController extends Controller {

        // Funciones para listar libros y libros por género

        public static function listarLibros() {
            
            $libros = Libro::obtenerLibrosEnJSON();

            return response( $libros, 200 )->header( 'Content-Type', 'text/plain' );;

        }

        // Funciones para listar libros por género

        public static function listarLibrosPorGenero() {

            $genero = $_GET['genero'];

            $libros = Libro::obtenerLibrosPorGenero($genero);

            return response( $libros, 200 )->header( 'Content-Type', 'text/plain' );;

        }

    }

?>