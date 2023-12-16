
// pogrubienie aktywnego elementu listy menu
const menuItems = document.querySelectorAll('.menuItem');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuItems.forEach(items => {
            items.classList.remove('menuItemActive');
        })
        item.classList.add('menuItemActive');
    }, { passive: true });
})


$(document).ready(function () {
});




$(document).ready(function () {
    //fade in przy otworzeniu strony
    $('body').fadeIn(2000);
    // zachowanie menu i przycisk 
    $("#menuButton").click(function () {
        $("#collapseMenu").fadeToggle();
    });
    $(".menuItem").click(function () {
        if ($(window).width() < 992) {
            $("#collapseMenu").fadeOut();
        }
    })
});



$(document).ready(function () {
    // Ustawienie opóźnień dla fadeIn dla każdego paragrafu
    $('.dialog').each(function (index) {
        $(this).delay(2000 * index).fadeIn(1000);
    });
    // kółka w dziale filozfia są responsywne :
    $('.circle').height($('.circle').width());




 

    $('.circle').on('click', function () {
        var circleIndex = $(this).index();
        $(this).parent().siblings().children().hide();
        $(this).parent().siblings().children().eq(circleIndex).fadeIn(1500);
        
    });

  


});



