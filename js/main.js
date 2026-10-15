// mostrar y ocultar formas de contacto

// espera que cargue la pagina
document.addEventListener("DOMContentLoaded", function () {

    // busca el boton y la lista
    const boton = document.getElementById("btnContacto");
    const bloque = document.getElementById("bloqueContacto");

    // si no existen no hace nada
    if (!boton || !bloque) {
        return;
    }

    // click en el boton
    boton.addEventListener("click", function () {

        // revisa si la lista se ve
        const estaVisible = !bloque.hidden;

        // muestra u oculta la lista
        bloque.hidden = estaVisible;

        // cambia el signo mas o menos
        boton.setAttribute("aria-expanded", String(!estaVisible));

        // baja la pagina al abrir
        if (!estaVisible) {
            bloque.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
    });
});