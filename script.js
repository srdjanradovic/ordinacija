
// Custom JavaScript for Dental Website
$(document).ready(function() {
    // Primer: Smooth scrolling za navigacione linkove
    $('a.nav-link').on('click', function(event) {
        // Ako link ima hash (#), spreči default ponašanje
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
    
    // Dodatne funkcionalnosti se mogu dodati ovde
});
