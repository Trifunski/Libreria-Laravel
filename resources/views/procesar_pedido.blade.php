
<?php

    $carrito = session()->get('carrito', []);

    if (count($carrito) == 0) {
        echo '<h1>El pedido no se puede realizar. El carrito está vacío...</h1>';
    } else {
        echo '<h1>Pedido realizado con éxito. Se enviará un correo de confirmación</h1>';

        session()->forget('carrito');

        echo '<a href="/principal">Volver a la página principal</a>';

    }

?>
