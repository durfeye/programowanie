const menuContainer = document.querySelector('.menuContainer');
const stickyMenuContainer = menuContainer.offsetTop;

function stickyNavbar() {
    if(window.pageYOffset >= stickyMenuContainer) {
        menuContainer.classList.add('stickyMenuContainer')
    }
    else {
        menuContainer.classList.remove('stickyMenuContainer')
    }
}

window.onscroll = function(){stickyNavbar()};