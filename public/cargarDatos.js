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

            if (libros.length == 0) {
                lista.innerHTML = "";
                var h3 = document.createElement("h3");
                h3.innerHTML = "No hay libros de este género";
                h3.className = "m-3 alert alert-danger";
                lista.appendChild(h3);
                return;
            } else {

                lista.innerHTML = "";

                Object.keys(libros).forEach(function (key) {
                
                    var tablaHTML = "<table border='1'><tr><th>ISBN</th><th>Título</th><th>Escritores</th><th>Género</th><th>Número de Páginas</th><th>Imagen</th><th>Cantidad</th><th>Acción</th></tr>";
    
                    // Recorrer el array de libros y agregar filas a la tabla
                    libros.forEach(function (libro) {
                        tablaHTML += "<tr class='text-center'>";
                        tablaHTML += "<td class='p-3'>" + libro.isbn + "</td>";
                        tablaHTML += "<td>" + libro.titulo + "</td>";
                        tablaHTML += "<td>" + libro.escritores + "</td>";
                        tablaHTML += "<td>" + libro.genero + "</td>";
                        tablaHTML += "<td>" + libro.numpaginas + "</td>";
                        tablaHTML += "<td><img width=100 height=130 src='" + libro.imagen + "' alt='" + libro.titulo + "'></td>";
                        tablaHTML += "<td><input type='number' id='cantidad-" + libro.isbn + "' value='1' min='1'></td>";
                        tablaHTML += "<td><button onclick='añadirLibros(\"" + libro.isbn + "\", document.getElementById(\"cantidad-" + libro.isbn + "\").value)'>Agregar al carrito</button></td>";
                        tablaHTML += "</tr>";
                    });
    
                    // Cerrar la tabla
                    tablaHTML += "</table>";
    
                    // Agregar la tabla al div
    
                    lista.innerHTML = tablaHTML;
                    
                });

            }
            
        }
    }

    xhr.send();

}

function cargarLibros() {
    xhr = new XMLHttpRequest();
    xhr.open("get", "/listar-libros", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var libros = JSON.parse(xhr.responseText);

            var lista = document.getElementById("datos");
            
            lista.innerHTML = "";

            var campoLibro = document.getElementById("libros-genero");

            campoLibro.innerHTML = "";

            var tablaHTML = "<table border='1'><tr><th>ISBN</th><th>Título</th><th>Escritores</th><th>Género</th><th>Número de Páginas</th><th>Imagen</th><th>Cantidad</th><th>Acciones</th></tr>";

            libros.forEach(function (libro) {
                tablaHTML += "<tr class='text-center'>";
                tablaHTML += "<td class='p-3'>" + libro.isbn + "</td>";
                tablaHTML += "<td>" + libro.titulo + "</td>";
                tablaHTML += "<td>" + libro.escritores + "</td>";
                tablaHTML += "<td>" + libro.genero + "</td>";
                tablaHTML += "<td>" + libro.numpaginas + "</td>";
                tablaHTML += "<td><img width=100 height=130 src='" + libro.imagen + "' alt='" + libro.titulo + "'></td>";
                tablaHTML += "<td><input type='number' id='cantidad-" + libro.isbn + "' value='1' min='1'></td>";
                tablaHTML += "<td><button onclick='añadirLibros(\"" + libro.isbn + "\", document.getElementById(\"cantidad-" + libro.isbn + "\").value)'>Agregar al carrito</button></td>";
                tablaHTML += "</tr>";
            });

            tablaHTML += "</table>";
            lista.innerHTML = tablaHTML;
        }
    };

    xhr.send();
}

function añadirLibros(isbn, cantidad) {

    xhr = new XMLHttpRequest();

    xhr.open("get", "/agregar-libro?isbn=" + isbn + "&cantidad=" + cantidad, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            
            var respuesta = xhr.responseText;

            console.log(respuesta);

        }
    }

    xhr.send();

}

function cargarCarrito() {

    xhr = new XMLHttpRequest();

    xhr.open("get", "/listar-carrito", true);

    var libros_genero = document.getElementById("libros-genero");

    libros_genero.innerHTML = "";

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            
            var libros = JSON.parse(xhr.responseText);

            if (libros.length == 0 || libros == null) {
                var lista = document.getElementById("datos");

                lista.innerHTML = "";

                var tablaHTML = "<h3 class='m-3 alert alert-danger'>No hay libros en el carrito</h3>";

                lista.innerHTML = tablaHTML;

                var a = document.createElement("a");

                a.className = "m-3";

                a.innerHTML = "Comprar";

                a.setAttribute("href", "/procesar-pedido");

                lista.appendChild(a);

                return;
            } else {

                var lista = document.getElementById("datos");

                lista.innerHTML = "";

                var tablaHTML = "<table border='1'><tr><th>ISBN</th><th>Título</th><th>Escritores</th><th>Género</th><th>Número de Páginas</th><th>Imagen</th><th>Cantidad</th><th>Acciones</th></tr>";

                libros.forEach(function (libro) {
                    tablaHTML += "<tr class='text-center'>";
                    tablaHTML += "<td class='p-3'>" + libro.isbn + "</td>";
                    tablaHTML += "<td>" + libro.titulo + "</td>";
                    tablaHTML += "<td>" + libro.escritores + "</td>";
                    tablaHTML += "<td>" + libro.genero + "</td>";
                    tablaHTML += "<td>" + libro.numpaginas + "</td>";
                    tablaHTML += "<td><img width=100 height=130 src='" + libro.imagen + "' alt='" + libro.titulo + "'></td>";
                    tablaHTML += "<td><input type='number' id='cantidad-" + libro.isbn + "' value='" + libro.cantidad + "' min='1'></td>";
                    tablaHTML += "<td><button onclick='eliminarLibros(\"" + libro.isbn + "\", document.getElementById(\"cantidad-" + libro.isbn + "\").value)'>Eliminar</button></td>";
                    tablaHTML += "</tr>";
                });

                tablaHTML += "</table>";

                lista.innerHTML = tablaHTML;

                var a = document.createElement("a");

                a.innerHTML = "Comprar";

                a.setAttribute("href", "/procesar-pedido");

                lista.appendChild(a);

            }
            
        }
    }

    xhr.send();

}

function eliminarLibros(isbn, cantidad) {

    xhr = new XMLHttpRequest();

    xhr.open("get", "/eliminar-libro?isbn=" + isbn + "&cantidad=" + cantidad, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            
            var respuesta = xhr.responseText;

            cargarCarrito();

        }
    }

    xhr.send();

}

function logout() {
    
        xhr = new XMLHttpRequest();
    
        xhr.open("get", "/cerrar-sesion", true);
    
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 2) {
                window.location.href = "/?logout=true";
            }
        }
    
        xhr.send();

}

