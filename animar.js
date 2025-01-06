const menuDiv = document.getElementById('menu-mobile')
const animarBtn = document.getElementById('btn-menu')

menuDiv.addEventListener('click', animarMenu)

function animarMenu(){
    menuDiv.classList.toggle('abrirMenu')
    animarBtn.classList.toggle('ativarMenu')
}