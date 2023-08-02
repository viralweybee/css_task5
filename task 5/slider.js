const slides=document.querySelectorAll(".slider");
var count=0;
slides.forEach(
    (slide,index)=>{
        slide.style.left=`${index*100}%`
    }
)
// console.log(slides)
const slideImage=()=>{
    slides.forEach(
        (slide)=>{
            slide.style.transform=`translateX(-${count*100}%)`
        }
    )
}
const gonext=()=>{
    count++;
    slideImage()
}
const goPrev=()=>{
    count--;
    slideImage();
}