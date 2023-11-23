// Función para realizar una solicitud XMLHttpRequest
function hacerSolicitud(method, url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.responseText);
        }
    };
    xhr.send();
}

// Función para cargar géneros
function cargarGeneros() {
    var listaGeneros = document.getElementById("libros-genero");
    listaGeneros.innerHTML = "";

    hacerSolicitud("get", "/listar-generos", function (response) {
        var generos = JSON.parse(response);
        var lista = document.getElementById("datos");
        lista.innerHTML = "";

        Object.keys(generos).forEach(function (key) {
            var genero = generos[key];
            var li = document.createElement("li");
            var a = document.createElement("a");
            a.href = "#";
            a.onclick = function () {
                cargarGeneroLibros(genero.nombre);
            };
            a.innerHTML = genero.nombre;
            li.appendChild(a);
            lista.appendChild(li);
        });
    });
}

// Función para cargar libros por género
function cargarGeneroLibros(genero) {
    hacerSolicitud("get", "/libros/por-genero?genero=" + genero, function (response) {
        var libros = JSON.parse(response);
        var lista = document.getElementById("libros-genero");

        if (libros.length === 0) {
            lista.innerHTML = "<h3 class='m-3 alert alert-danger'>No hay libros de este género</h3>";
        } else {
            var tablaHTML = "<table class='table table-bordered'><thead><tr><th>ISBN</th><th>Título</th><th>Escritores</th><th>Género</th><th>Número de Páginas</th><th>Imagen</th><th>Cantidad</th><th>Acción</th></tr></thead><tbody>";

            libros.forEach(function (libro) {
                tablaHTML += "<tr class='text-center'>";
                tablaHTML += "<td class='p-3'>" + libro.isbn + "</td>";
                tablaHTML += "<td>" + libro.titulo + "</td>";
                tablaHTML += "<td>" + libro.escritores + "</td>";
                tablaHTML += "<td>" + libro.genero + "</td>";
                tablaHTML += "<td>" + libro.numpaginas + "</td>";
                tablaHTML += "<td><img width=100 height=130 src='" + libro.imagen + "' alt='" + libro.titulo + "'></td>";
                tablaHTML += "<td><input type='number' id='cantidad-" + libro.isbn + "' value='1' min='1'></td>";
                tablaHTML += "<td><button class='btn btn-primary' onclick='añadirLibros(\"" + libro.isbn + "\", document.getElementById(\"cantidad-" + libro.isbn + "\").value)'>Agregar al carrito</button></td>";
                tablaHTML += "</tr>";
            });

            tablaHTML += "</tbody></table>";

            lista.innerHTML = tablaHTML;
        }
    });
}

// Función para cargar libros
function cargarLibros() {
    hacerSolicitud("get", "/libros/listar", function (response) {
        var libros = JSON.parse(response);
        var lista = document.getElementById("datos");
        lista.innerHTML = "";

        var campoLibro = document.getElementById("libros-genero");
        campoLibro.innerHTML = "";

        var tablaHTML = "<table class='table table-bordered'><thead><tr><th>ISBN</th><th>Título</th><th>Escritores</th><th>Género</th><th>Número de Páginas</th><th>Imagen</th><th>Cantidad</th><th>Acciones</th></tr></thead><tbody>";

        libros.forEach(function (libro) {
            tablaHTML += "<tr class='text-center'>";
            tablaHTML += "<td class='p-3'>" + libro.isbn + "</td>";
            tablaHTML += "<td>" + libro.titulo + "</td>";
            tablaHTML += "<td>" + libro.escritores + "</td>";
            tablaHTML += "<td>" + libro.genero + "</td>";
            tablaHTML += "<td>" + libro.numpaginas + "</td>";
            tablaHTML += "<td><img width=100 height=130 src='" + libro.imagen + "' alt='" + libro.titulo + "'></td>";
            tablaHTML += "<td><input type='number' id='cantidad-" + libro.isbn + "' value='1' min='1'></td>";
            tablaHTML += "<td><button class='btn btn-primary' onclick='añadirLibros(\"" + libro.isbn + "\", document.getElementById(\"cantidad-" + libro.isbn + "\").value)'>Agregar al carrito</button></td>";
            tablaHTML += "</tr>";
        });

        tablaHTML += "</tbody></table>";

        lista.innerHTML = tablaHTML;
    });
}

// Función para añadir libros al carrito
function añadirLibros(isbn, cantidad) {
    hacerSolicitud("get", "/carrito/agregar-libro?isbn=" + isbn + "&cantidad=" + cantidad, function (response) {
        
        mostrarAlertaExito("Libro añadido al carrito");

    });
}

// Función para cargar el carrito
function cargarCarrito() {
    hacerSolicitud("get", "/carrito/listar", function (response) {
        var libros = JSON.parse(response);
        var genero_libro = document.getElementById("libros-genero");
        genero_libro.innerHTML = "";

        var lista = document.getElementById("datos");
        lista.innerHTML = "";

        if (libros.length === 0 || libros === null) {
            lista.innerHTML = "<h3 class='m-3 alert alert-danger'>No hay libros en el carrito</h3>";

            var comprar = document.createElement("a");
            comprar.innerHTML = "Comprar";
            comprar.className = "btn btn-primary mx-3";
            comprar.href = "/procesar-pedido";

            lista.appendChild(comprar);
        } else {
            var tablaHTML = "<table class='table table-bordered'><thead><tr><th>ISBN</th><th>Título</th><th>Escritores</th><th>Género</th><th>Número de Páginas</th><th>Imagen</th><th>Cantidad</th><th>Acciones</th></tr></thead><tbody>";

            libros.forEach(function (libro) {
                tablaHTML += "<tr class='text-center'>";
                tablaHTML += "<td class='p-3'>" + libro.isbn + "</td>";
                tablaHTML += "<td>" + libro.titulo + "</td>";
                tablaHTML += "<td>" + libro.escritores + "</td>";
                tablaHTML += "<td>" + libro.genero + "</td>";
                tablaHTML += "<td>" + libro.numpaginas + "</td>";
                tablaHTML += "<td><img width=100 height=130 src='" + libro.imagen + "' alt='" + libro.titulo + "'></td>";
                tablaHTML += "<td><input type='number' id='cantidad-" + libro.isbn + "' value='" + libro.cantidad + "' min='1'></td>";
                tablaHTML += "<td><button class='btn btn-danger' onclick='eliminarLibros(\"" + libro.isbn + "\", document.getElementById(\"cantidad-" + libro.isbn + "\").value)'>Eliminar</button></td>";
                tablaHTML += "</tr>";
            });

            tablaHTML += "</tbody></table>";

            lista.innerHTML = tablaHTML;

            var comprar = document.createElement("a");
            comprar.innerHTML = "Comprar";
            comprar.className = "btn btn-primary mr-3";
            comprar.href = "/procesar-pedido";

            var borrar = document.createElement("a");
            borrar.innerHTML = "Eliminar carrito";
            borrar.className = "btn btn-danger";
            borrar.onclick = vaciarCarrito;

            lista.appendChild(comprar);
            lista.appendChild(borrar);
        }
    });
}

// Función para vaciar el carrito
function vaciarCarrito() {
    hacerSolicitud("get", "/carrito/vaciar", cargarCarrito);
}

// Función para eliminar libros del carrito
function eliminarLibros(isbn, cantidad) {
    var libros_genero = document.getElementById("libros-genero");
    libros_genero.innerHTML = "";

    mostrarAlertaExito("Libro eliminado del carrito");

    hacerSolicitud("get", "/carrito/eliminar-libro?isbn=" + isbn + "&cantidad=" + cantidad, cargarCarrito);
}

// Función para cerrar sesión
function logout() {
    hacerSolicitud("get", "/cerrar-sesion", function () {
        window.location.href = "/?logout=true";
    });
}

function mostrarAlertaExito(mensaje) {

    var contenedor = document.getElementById("contenedor");

    var divAlerta = document.createElement("div");
    divAlerta.id = "alerta";

    var divAlert = document.createElement("div");

    divAlert.className = (mensaje === "Libro añadido al carrito") ? "alert alert-success d-flex align-items-center" : "alert alert-danger d-flex align-items-center";
    
    divAlert.setAttribute("role", "alert");

    var divMensaje = document.createElement("div");
    divMensaje.textContent = mensaje;

    divAlert.appendChild(divMensaje);
    divAlerta.appendChild(divAlert);
    contenedor.appendChild(divAlerta);

    setTimeout(function () {
        contenedor.removeChild(divAlerta);
    }, 5000);
}