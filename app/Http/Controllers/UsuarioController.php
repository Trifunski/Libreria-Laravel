<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;

class UsuarioController extends Controller {

    public function iniciarSesion(Request $request) {
        $user = filter_var($request->input('email'), FILTER_SANITIZE_EMAIL);
        $password = filter_var($request->input('password'), FILTER_SANITIZE_STRING);

        if (Usuario::validarUsuario($user, $password)) { 
            session(['usuario' => $user]);
            return redirect('principal');
        } else {
            return redirect('/')->with('error', 'Credenciales inválidas');
        }
    }

    public function cerrarSesion() {
        session()->forget(['usuario', 'carrito']);
        return response('Sesión cerrada', 200)->header('Content-Type', 'text/plain');
    }

}