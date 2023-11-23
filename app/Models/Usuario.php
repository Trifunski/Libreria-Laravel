<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Usuario extends Model {
    
    private static $usuario;

    private static function cargarConfiguracion() {
        if (!self::$usuario) {
            $xml = simplexml_load_file(\storage_path('app/configuracion/configuracion.xml'));
            self::$usuario = (object) [
                'user' => $xml->usuario,
                'password' => $xml->clave
            ];
        }
        return self::$usuario;
    }

    public static function validarUsuario($user, $password) {
        $usuario = self::cargarConfiguracion();

        return ($user == $usuario->user && $password == $usuario->password) ? true : "Usuario o contraseña incorrectos";
    }
}