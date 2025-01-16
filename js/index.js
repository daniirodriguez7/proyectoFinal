const foto = document.querySelector(`.Foto`)
const fotoUl = document.querySelector(`.Foto-ul`)
const headerSvg = document.querySelector(`.Header-svg`)



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

headerSvg.addEventListener(`click`, () => {
    fotoUl.classList.toggle(`isVisible`)
})



