
// Select some elements...

let header = document.querySelector('#page-header')
header.style.textAlign = "left"

let footerText = document.querySelector('.footer')
footerText.style.color = "green"

let dogNames = document.querySelectorAll('.dog-name')
let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
	dogImages[i].style.borderRadius = '50px'
    dogNames[i].style.textAlign = "left"
    // dogImages[i].style.transform = "rotate(180deg)"
    dogImages[i].style.transform = "scale(-1, -1)"
}

