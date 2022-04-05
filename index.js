const mobileMenuIcon = document.querySelector('.mobile__menu__icon');
const mobileMenu = document.querySelector('.mobile-menu');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close');
const mobile__product__block = document.querySelector('.mobile__product__block');
const product__block__list = document.querySelector('.product__block');
const toggleMobileMenu = () => {
    console.log(mobileMenu.className)
    mobileMenu.classList.toggle('hide');
    closeIcon.classList.toggle('hide');
    hamburger.classList.toggle('hide');
}

mobileMenuIcon.addEventListener('click', toggleMobileMenu);

const toggleSubMenu = (e) =>{
    console.log(e.target.children)
    e.target.children[0].classList.toggle('rotate')
    e.target.children[1].classList.toggle('hide')
}

mobile__product__block.addEventListener('click', toggleSubMenu)

product__block__list.addEventListener('click', toggleSubMenu);