<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Usuario extends Model {
    // Implementar lógica para obtener datos del archivo "configuracion.xml"

    private static function getUsuario() {

        $xml = simplexml_load_file('configuracion.xml');

        $usuario = $xml->usuario;
        $clave = $xml->clave;

        return (object) [
            'user' => $usuario,
            'password' => $clave
        ];

    }

    public static function validarUsuario($user, $password) {
        
        $usuario = self::getUsuario();

        if ($user == $usuario->user && $password == $usuario->password) {
            return true;
        } else {
            return "Usuario o contraseña incorrectos";
        }

    }
}

