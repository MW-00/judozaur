    const menuItems = document.querySelectorAll('.menuItem');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {

            menuItems.forEach(items => {
                items.classList.remove('menuItemActive');
            })
                item.classList.add('menuItemActive');
        }, { passive: true });
    })




    $(document).ready(function() {
        $("#menuButton").click(function() {
          $("#collapseMenu").fadeToggle();
        });
    
    $(".menuItem").click(function() {

        if ($(window).width() < 992) {
            $("#collapseMenu").fadeOut();
         }
        
       
    })
        
    
    
    });
   
      
 

 