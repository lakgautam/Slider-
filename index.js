
const slides = document.querySelectorAll (".Slide")
var counter = 0;
//console.log(slides)
slides.forEach(
    (Slide, index) => {
Slide.style.left = `${index *100}%`
}
)
const goPrev = () => {
    if (counter ==0){
        counter = slides.length-1
        slideImage()
     } else{
            counter--
            slideImage()
        }
}

const goNext = () => {
    if (counter==slides.length-1){
        counter = 0
        slideImage()
    }else{
        counter++
        slideImage()
    }
   
}

const slideImage = () => {
    slides.forEach(
        (Slide)=>{
            Slide.style.transform = `translateX(-${counter *100}%)`
        }
    )
}