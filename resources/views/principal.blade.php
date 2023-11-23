<link rel="stylesheet" href="{{ asset('bootstrap/css/bootstrap.css') }}">

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Principal</title>
    <style> 
        #contenedor {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 9999;
        }
    </style>
</head>
<body>

    <div class="container mt-5">
    
        @include('cabecera')

        <div id="datos">

        </div>

        <br>

        <div id="libros-genero">

        </div>

        <div id="contenedor">

        </div>

    </div>

</body>
</html>
