const headerBtn = document.querySelector(`.Header-button`)
const headerNav = document.querySelector(`.Header-nav`)
const foto = document.querySelector(`.Foto`)
const fotoUl = document.querySelector(`.Foto-ul`)
const fotoSvg = document.querySelector(`.Foto-svg`)
const imgList = document.querySelectorAll(`.Section-imgX`)
const imgListY = document.querySelectorAll(`.Section-imgY`)
const lightbox = document.querySelector(`.Lightbox-X`)
const imgGrande = document.querySelector(`.Lightbox-X-img`)
const btn = document.querySelector(`.Lightbox-X-button`)
const lightboxY = document.querySelector(`.Lightbox-Y`)
const imgGrandeY = document.querySelector(`.Lightbox-Y-img`)
const btnY = document.querySelector(`.Lightbox-Y-button`)


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
imgList.forEach((_, i) => {
    imgList[i].addEventListener(`click`, () => {
        lightbox.classList.add(`isActive`)
        imgGrande.src = imgList[i].src
    })
})

btn.addEventListener(`click`, () => {
    lightbox.classList.remove(`isActive`)
})

imgListY.forEach((_, i) => {
    imgListY[i].addEventListener(`click`, () => {
        lightboxY.classList.add(`isActive`)
        imgGrandeY.src = imgListY[i].src
    })
})

btnY.addEventListener(`click`, () => {
    lightboxY.classList.remove(`isActive`)
})
