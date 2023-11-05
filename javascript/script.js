$('document').ready(function(){
    if(window.innerWidth < 999){
        $('.nav-link').click(function() {
            $('.dropdown-menu').slideToggle();
        });
    }else{
            $('.dropdown-menu').show();
        }
    });