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

const sectionH3 = document.querySelectorAll(`.Section-h3`)
const sectionImg = document.querySelectorAll(`.Section-img`)
const sectionA = document.querySelectorAll(`.Section-a`)

sectionA.forEach((_, i) => {
    sectionA[i].addEventListener(`mouseover`, () => {

        sectionImg.forEach((_, i) => {

            sectionImg[i].classList.remove(`isVisible`)

        })

        sectionImg[i].classList.add(`isVisible`)


        sectionH3.forEach((_, i) => {

            sectionH3[i].classList.remove(`isVisible`)


        })
        sectionH3[i].classList.add(`isVisible`)


    })

})

sectionA.forEach((_, i) => {
    sectionA[i].addEventListener(`mouseout`, () => {

        sectionImg.forEach((_, i) => {

            sectionImg[i].classList.remove(`isVisible`)

        })



        sectionH3.forEach((_, i) => {

            sectionH3[i].classList.remove(`isVisible`)

        })


    })

})






