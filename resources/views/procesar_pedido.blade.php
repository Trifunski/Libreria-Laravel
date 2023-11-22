
<link rel="stylesheet" href="{{ asset('bootstrap/css/bootstrap.css') }}">

<?php

    $carrito = session()->get('carrito', []);

    if (count($carrito) == 0) {

        echo '<div class="container mt-5">';

        echo '<h3>El pedido no se puede realizar. El carrito está vacío...</h3>';

        echo '<a href="/principal">Volver a la página principal</a>';

        echo '</div>';
    } else {

        echo '<div class="container mt-5">';

        echo '<h3>Pedido realizado con éxito. Se enviará un correo de confirmación</h3>';
        
        session()->forget('carrito');

        echo '<a href="/principal">Volver a la página principal</a>';

        echo '</div>';

    }

?>
