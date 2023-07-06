

function createCard(img1,title,texts){
    
    let container = document.createElement("div");
    container.className = "FContainer";

    let image1=document.createElement("img");
    image1.src = (img1);
    image1.className= "FfirstImg";


    let tit = document.createElement("h4");
    tit.innerHTML=(title);
    tit.className="Ftitle";

    let text = document.createElement("h5");
    text.innerHTML=(texts); 
    text.className="Ftext";

   
    let box = document.querySelector(".Fcard-container");

    let sndContainer = document.querySelector(".FscndCard-Container");
    

container.append(image1,tit,text);

sndContainer.append(container);

box.appendChild(sndContainer);
    
   
}


let card1 = createCard('Image/Group 52.png',"Find Course"," certificate that an educator has <br> them to perform a task requiring. <br>has them to perform a task requiring.<br> ");

let card2 = createCard('Image/icon (2).png',"Book Your Seat","Life Programer educator has them <br> to perform a task requiring. <br>has them to perform a task requiring");

let card3 = createCard('Image/Rectangle.png',"Get Certificate","Life Programer educator has them <br> to perform a task requiring. <br>has them to perform a task requiring");
