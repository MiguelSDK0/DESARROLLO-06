document.addEventListener('DOMContentLoaded', function () {
    $('[data-toggle="tooltip"]').tooltip();


    $('.navbar-toggler').on('click', function() {
        $('#navbarNav').toggleClass('show');
    });

    $('.dropdown').on('show.bs.dropdown', function () {
        console.log('El menú desplegable se está mostrando.');
    });

    $('.dropdown').on('hide.bs.dropdown', function () {
        console.log('El menú desplegable se está ocultando.');
    });
});
