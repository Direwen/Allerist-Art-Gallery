
//FULL IMAGE 
var fullImageView = document.getElementById('fullImageView');
var fullImg = document.getElementById("fullImg");
var artWorkImage = document.querySelector('.artwork_img');
var xButton = document.getElementById('x');

artWorkImage.addEventListener('click', function(){
    fullImg.src = document.querySelector('.artwork_img img').src;
    fullImageView.style.display = "flex";
    
    
})

xButton.addEventListener('click', function(){
    fullImg.src = "";
    fullImageView.style.display = "none";
})