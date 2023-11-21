<?php

    namespace App\Http\Controllers;

    use App\Models\Usuario;
    use Illuminate\Http\Request;

    class UsuarioController extends Controller {

        // Funciones para inicio de sesión y cierre de sesión

        public function iniciarSesion(Request $request) {

            $user = $request->input('email');
            $password = $request->input('password');
 
            $usuario = Usuario::validarUsuario($user, $password);

            if ($usuario === true) {

                session(['usuario' => $user]);

                echo session('usuario');

                return redirect('principal');

            } else {

                return redirect('/')->with('error', $usuario);

            }

        }

        public function cerrarSesion() {

            session_destroy();

            header('Location: /');

        }

    }

?>