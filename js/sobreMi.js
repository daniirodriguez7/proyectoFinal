const headerBtn = document.querySelector(`.Header-button`)
const headerNav = document.querySelector(`.Header-nav`)
const foto = document.querySelector(`.Foto`)
const fotoUl = document.querySelector(`.Foto-ul`)
const fotoSvg = document.querySelector(`.Foto-svg`)

headerBtn.addEventListener(`click`, () => {
    headerNav.classList.toggle(`isVisible`)
})


foto.addEventListener(`mouseover`, () => {
    fotoUl.classList.add(`isVisible`)

})

foto.addEventListener(`mouseout`, () => {
    fotoUl.classList.remove(`isVisible`)

})

fotoUl.addEventListener(`mouseover`, () => {
    fotoUl.classList.add(`isVisible`)

})
fotoUl.addEventListener(`mouseout`, () => {
    fotoUl.classList.remove(`isVisible`)

})
fotoSvg.addEventListener(`click`, () => {
    fotoUl.classList.toggle(`isVisible`)
})