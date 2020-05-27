AOS.init({   
    duration: 800,   
    delay: 300,   
    once: true,   
    disable: 'mobile'
})
$(document).ready(function(){
    $(".filter-button").click(function(){
        $('.project-selection .active').removeClass('active');
        $(this).addClass('active');
        var value = $(this).attr('data-filter');
        if (value == 'all'){
            $('.filterDiv').show('1000');
        }
        else {
            $('.filterDiv').not('.'+value).hide('3000');
            $('.filterDiv').filter('.'+value).show('3000');
        }
    })
    var yourNavigation = $(".navigation-bar");
    stickyDiv = "sticky";
    yourHeader = $('.intro').height();

    $(window).scroll(function() {
    if( $(this).scrollTop() > yourHeader ) {
        yourNavigation.addClass(stickyDiv);
    } else {
        yourNavigation.removeClass(stickyDiv);
    }
    })
})