<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;

class UsuarioController extends Controller {

    public function iniciarSesion(Request $request) {
        $user = $request->input('email');
        $password = $request->input('password');

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