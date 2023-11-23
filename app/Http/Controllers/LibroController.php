<?php
    namespace App\Http\Controllers;

    use Illuminate\Http\Request;
    use App\Models\Libro;

    class LibroController extends Controller {

        public function listarLibros() {
            $libros = Libro::obtenerLibros();
            return response($libros, 200)->header('Content-Type', 'text/plain');
        }

        public function listarLibrosPorGenero(Request $request) {
            $genero = $request->input('genero');
            $libros = Libro::obtenerLibrosPorGenero($genero);
            return response($libros, 200)->header('Content-Type', 'text/plain');
        }
    }
?>