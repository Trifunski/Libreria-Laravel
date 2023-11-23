<link rel="stylesheet" href="{{ asset('bootstrap/css/bootstrap.css') }}">

<?php

    $logout = $_GET['logout'] ?? null;

    if ($logout) {
        echo '<div class="alert alert-success">Sesión cerrada correctamente</div>';
    }

?>
    
<div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h1 class="m-3">Librería</h1>
            <div class="m-3">
                <form method="get" action="{{ route('iniciar-sesion') }}">
                    <div class="form-group">
                        <label for="email">Usuario</label>
                        <input type="email" id="email" name="email" class="form-control" required autofocus>
                    </div>
                    <div class="form-group">
                        <label for="password">Clave</label>
                        <input type="password" id="password" name="password" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

@if (session('error'))
    <script>
        alert('{{ session('error') }}');
    </script>
@endif