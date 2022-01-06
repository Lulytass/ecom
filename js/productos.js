// imagen con miniaturas
const productImages = document.querySelectorAll(".product-images img");
const productImageSlide = document.querySelector(".image-slider");

let activeImageSlide = 0;

productImages.forEach((item, i) =>{
    item.addEventListener("click", () => {
        productImages[activeImageSlide].classList.remove("active");
        item.classList.add("active");
        productImageSlide.style.backgroundImage = `url("${item.src}")`
        activeImageSlide = i;
    })
});


// botones de talles

const talleBtn = document.querySelectorAll(".size-radio-btn");
let checkedBtn = 0;

talleBtn.forEach((item , i) => {
    item.addEventListener("click", () =>{
        talleBtn[checkedBtn].classList.remove("check");
        item.classList.add("check");
        checkedBtn = i
    })
    
    
});
