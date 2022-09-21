

/* mudar o header da página quando der scroll */
window.addEventListener('scroll', onScroll)

function onScroll() {
    let header = document.getElementById('header')
    if(scrollY > 0) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
    }

function abrirMenu() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}

function mostrarListaAtividades1() {
    let lista = document.querySelector('#emprego1')
    if (lista.style.display == 'block') {
        lista.style.display = 'none'
    } else {
        lista.style.display = 'block'
    }
}
function mostrarListaAtividades2() {
    let lista = document.querySelector('#emprego2')
    if (lista.style.display == 'block') {
        lista.style.display = 'none'
    } else {
        lista.style.display = 'block'
    }
}
function mostrarListaAtividades3() {
    let lista = document.querySelector('#emprego3')
    if (lista.style.display == 'block') {
        lista.style.display = 'none'
    } else {
        lista.style.display = 'block'
    }
}

