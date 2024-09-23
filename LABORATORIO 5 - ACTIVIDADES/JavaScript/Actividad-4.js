document.addEventListener('DOMContentLoaded', function () {
    $('[data-toggle="tooltip"]').tooltip();

    $('a.nav-link').click(function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    $('form').on('submit', function(event) {
        event.preventDefault();
        console.log('Formulario enviado');
    });
});
