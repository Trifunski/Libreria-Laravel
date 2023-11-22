<?php

    namespace App\Http\Controllers;

    use Illuminate\Http\Request;
    use App\Models\Carrito;

    

    class CarritoController extends Controller {

        // Funciones para añadir, eliminar, cargar y procesar carrito

        public function añadirLibroCarrito(Request $request) {
        
            $isbnLibro = $request->input('isbn');
            $cantidadLibro = $request->input('cantidad');
        
            // Se obtiene el carrito de la sesión
            $carrito = session()->get('carrito', []);

            // Se añade el libro al carrito
            if (isset($carrito[$isbnLibro])) {
                // Si el libro ya está en el carrito, suma las cantidades
                $carrito[$isbnLibro] += $cantidadLibro;
            } else {
                // Si el libro no está en el carrito, simplemente asigna la cantidad
                $carrito[$isbnLibro] = (int)$cantidadLibro;
            }
        
            // Se guarda el carrito en la sesión
            session()->put('carrito', $carrito);
        
            // Devuelve la respuesta JSON directamente
            return response()->json($carrito);
        }
        
        public function listarLibroCarrito() {

            $carrito = session()->get('carrito', []);

            $libros = [];

            foreach ($carrito as $isbn => $cantidad) {
                $libro = Carrito::obtenerLibroIsbn($isbn);
                $libro->cantidad = $cantidad;
                $libros[] = $libro;
            }

            return response( $libros, 200 )->header( 'Content-Type', 'text/plain' );;

        }

        public function eliminarLibroCarrito() {

            $isbnLibro = $_GET['isbn'];
            $cantidadLibro = $_GET['cantidad'];

            // Se obtiene el carrito de la sesión

            $carrito = session()->get('carrito', []);

            // Se elimina el libro del carrito

            if (isset($carrito[$isbnLibro]) && $carrito[$isbnLibro] > 0) {
                // Si el libro ya está en el carrito, resta las cantidades
                $carrito[$isbnLibro] -= $cantidadLibro;
            }

            if ($carrito[$isbnLibro] <= 0) {
                unset($carrito[$isbnLibro]);
            }

            // Se guarda el carrito en la sesión

            session()->put('carrito', $carrito);

            // Devuelve la respuesta JSON directamente

            return response()->json($carrito);

        }



        public function procesarLibroCarrito() {

            

        }

    }

?>