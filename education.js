

function createCard(img1,img2,title,text){
    let contain= document.getElementById("divs");
    let container = document.createElement("div");
    let image1=document.createElement("img");
    image1.src = "Image/heart.png";
    container.appendChild(image1);
    contain.append(container);

}
createCard();