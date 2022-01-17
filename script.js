const menuContainer = document.querySelector('.menuContainer');
const stickyMenuContainer = menuContainer.offsetTop;
const mobileMenuBtn = document.querySelector('.mobileMenuBtn');

function stickyNavbar() {
    if (document.documentElement.clientWidth > 1000) {
        if(window.pageYOffset >= stickyMenuContainer) {
            menuContainer.classList.add('stickyMenuContainer')
        }
        else {
            menuContainer.classList.remove('stickyMenuContainer')
        }
    }
}

function mobileMenu() {
    if (menuContainer.style.display === 'none') {
        menuContainer.style.display = 'flex';
    }
    else {
        menuContainer.style.display = 'none';
    }
    
}

window.onscroll = function(){stickyNavbar()};

mobileMenuBtn.addEventListener('click', mobileMenu);