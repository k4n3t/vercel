const slider = document.querySelector('.sliderImages')
const btnRight = document.querySelector('.slider-left')
const btnLeft = document.querySelector('.slider-right')
const images = document.querySelectorAll('.sliderImages img')
let indexSlide = 0
let imgvisibles = Math.floor(document.querySelector('.slider').offsetWidth/300)


function moveSlide() {
    const value = indexSlide * 300
    slider.style.transform = `translateX(-${value}px)`
}

btnLeft.addEventListener('click', () => {
    if (indexSlide < images.length- imgvisibles) {
        indexSlide++
        moveSlide()
    }
})
btnRight.addEventListener('click', () => {
    if (indexSlide > 0) {
        indexSlide--
        moveSlide()
    }
})

window.addEventListener("resize", function(){
    imgvisibles = Math.floor(document.querySelector('.slider').offsetWidth/300)
    slider.style.transform = `translateX(0px)`
 });