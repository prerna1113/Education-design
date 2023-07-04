

function createCard(img1,img2,title,texts){
    
    let container = document.createElement("div");
    container.className = "Container";

    let image1=document.createElement("img");
    image1.src = (img1);

    let image2=document.createElement("img");
    image2.src = (img2);

    let tit = document.createElement("h4");
    tit.innerHTML=(title);

    let text = document.createElement("h5");
    text.innerHTML=(texts); 

   
    let box = document.querySelector(".card-container");

    container.append(image1,image2,tit,text);
    box.append(container);

   
}



let card1 = createCard('Image/icon1.png','Image/circle1.png',"Certificate"," certificate that an educator has them to perform a task requiring. has them to perform a task requiring ");
