

// nav  openmenu or close menu
function openMenu() {
    document.getElementById("navbar").style.width ="100%";
}
function closeMenu() {
    document.getElementById("navbar").style.width ="0";
}

 

//smooth scroller

$(function(){
    $('.menu-list a, .next-section a').on('click', function(){
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 2000);
        return false
    });
});

//mixitup
var mixer = mixitup('#grid-wrkpro');