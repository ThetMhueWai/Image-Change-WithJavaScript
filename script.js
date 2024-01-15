const mainImg = document.querySelector(".main-img")
const subImg = document.querySelectorAll(".sub-img")

for (let i = 0; i < subImg.length; i++) {
    
    subImg[i].addEventListener('click',() => {
        let j = i+1
        mainImg.src = "images/img"+ j +".jpg"
    })
}