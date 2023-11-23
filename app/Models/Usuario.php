<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Usuario extends Model {

    public static function validarUsuario($user, $password) {
        
        $xml = simplexml_load_file(\storage_path('app/configuracion/configuracion.xml'));

        if ($user == $xml->usuario && $password == $xml->clave) {
            return true;
        }

        return false;
    }
    
}