// Display Mobile Menu ///////////////////////////////////

const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)

// Copy Contacts /////////////////////////////////////////

function copyPhone(){
    navigator.clipboard.writeText("(321)609-1763");
}

function copyEmail(){
    navigator.clipboard.writeText("BSteadman3@gmail.com");
}