const header = document.querySelector('.header')
const main = document.querySelector('.main')

//*Menu
const links = document.querySelector('.menu__links')
const toggle = document.querySelector('.header__mobile__toggle')
const menu = document.querySelector('.menu')

//*submenu Desktop
const submenuButton = document.querySelector('.link__two')
const submenu = document.querySelector('.submenu')

//*submenu movil
const submenuButtonMovil = document.querySelector('.link_movil_two')
const submenuMovil = document.querySelector('.menu__links__submenu')

function toggleMenu() {
	menu.classList.toggle('menu--active')
}

function SubmenuDesktop(){
	submenu.classList.toggle('submenu--active')
	submenuButton.classList.toggle('header__desktop__pages--two--active')
}

function DeleteMenu() {
	menu.classList.remove('menu--active')
}
function toggleMenu() {
	menu.classList.toggle('menu--active')
}

function SubmenuMovil(){
	submenuMovil.classList.toggle('menu__links__submenu--active')
}

window.onscroll = function(){
	const scrollY = window.scrollY

	scrollY > 100 ? header.classList.add('header--hide') : header.classList.remove('header--hide')
	scrollY < 100 ? header.classList.remove('header--show') : false

}

main.addEventListener('click', DeleteMenu)
toggle.addEventListener('click', toggleMenu)
submenuButton.addEventListener('click', SubmenuDesktop)
submenuButtonMovil.addEventListener('click',SubmenuMovil )
