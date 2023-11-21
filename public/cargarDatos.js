function cargarGeneros() {

        var lista = document.getElementById("libros-genero");

        lista.innerHTML = "";

        xhr = new XMLHttpRequest();

        xhr.open("get", "/listar-generos", true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                
                var generos = JSON.parse(xhr.responseText);

                // cargar los datos con un titulo y los datos dentro de una lista desordenada

                var lista = document.getElementById("datos");

                lista.innerHTML = "";

                Object.keys(generos).forEach(function (key) {
                    var genero = generos[key];
                    var li = document.createElement("li");
                    var a = document.createElement("a");
                    a.setAttribute("href", "#");
                    a.setAttribute("onclick", "cargarGeneroLibros('" + genero.nombre + "')");
                    a.innerHTML = genero.nombre;
                    li.appendChild(a);
                    lista.appendChild(li);
                });

                
            }
        }

        xhr.send();

}

function cargarGeneroLibros(genero) {

    xhr = new XMLHttpRequest();

    xhr.open("get", "/libros-por-genero?genero=" + genero, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            
            var libros = JSON.parse(xhr.responseText);

            // cargar los datos con un titulo y los datos dentro de una lista desordenada

            var lista = document.getElementById("libros-genero");

            Object.keys(libros).forEach(function (key) {
                
                var tablaHTML = "<table border='1'><tr><th>ISBN</th><th>Título</th><th>Escritores</th><th>Género</th><th>Número de Páginas</th><th>Imagen</th></tr>";

                // Recorrer el array de libros y agregar filas a la tabla
                libros.forEach(function (libro) {
                tablaHTML += "<tr class='text-center'><td class='p-3'>" + libro.isbn + "</td><td>" + libro.titulo + "</td><td>" + libro.escritores + "</td><td>" + libro.genero + "</td><td>" + libro.numpaginas + "</td><td><img width=100 height=130 src='" + libro.imagen + "' alt='" + libro.titulo + "'></td></tr>";
                });

                // Cerrar la tabla
                tablaHTML += "</table>";

                // Agregar la tabla al div

                lista.innerHTML = tablaHTML;
                
            });
            
        }
    }

    xhr.send();

}

function cargarLibros() {


}

function anadirLibros(libros) {


}

function eliminarLibros(libros) {


}

function cargarCarrito() {


}

