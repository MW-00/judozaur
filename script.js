    const menuItems = document.querySelectorAll('.menuItem');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {

            menuItems.forEach(items => {
                items.classList.remove('menuItemActive');
            })
                item.classList.add('menuItemActive');
        })
    })