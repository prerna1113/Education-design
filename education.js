

function createCard(img1,img2,title,texts){
    
    let container = document.createElement("div");
    container.className = "Container";

    let image1=document.createElement("img");
    image1.src = (img1);
    image1.className= "firstImg";

    let image2=document.createElement("img");
    image2.src = (img2);
    image2.className= "scndImg";

    let tit = document.createElement("h4");
    tit.innerHTML=(title);
    tit.className="title";

    let text = document.createElement("h5");
    text.innerHTML=(texts); 
    text.className="text";

   
    let box = document.querySelector(".card-container");

    let sndContainer = document.querySelector(".scndCard-Container");
    

container.append(image1,image2,tit,text);

sndContainer.append(container);

box.appendChild(sndContainer);
    
   
}


let card1 = createCard('Image/icon1.png','Image/circle1.png',"Certificate"," certificate that an educator has <br> them to perform a task requiring. <br>has them to perform a task requiring.<br> ");

let card2 = createCard('Image/heart.png',"Image/circle2.png","Life Programs","Life Programer educator has them <br> to perform a task requiring. <br>has them to perform a task requiring");

// let card3 = createCard('Image/icon3.png',"Image/circle3.png","Life Program","Life Programer educator has them <br> to perform a task requiring. <br>has them to perform a task requiring");

const FContent = document.querySelector('.scndCard-Container');

const h5Tag = document.createElement('h5');
h5Tag.innerHTML = "Why Choose Us ?";
h5Tag.className = "h5-tag";

const MContent = document.querySelector('.MContent');


const h1Tag = document.createElement("h1");
h1Tag.innerHTML = "Our Education System <br>  Will Give You Solution"
h1Tag.className = "h1-tag";

const h6Tag = document.createElement( 'h6');
h6Tag.innerHTML = "we Provide a comprehensive range of data protection and cyber <br> security servies to protect your buisness infromation  and to <br>give you a piece-of-mind";
h6Tag.className = "h6-tag";

const h7Tag = document.createElement( 'h6');
h7Tag.innerHTML = "we Provide a comprehensive range of data protection and cyber <br> security servies to protect your buisness infromation  and to <br>give you a piece-of-mind";
h7Tag.className = "h7-tag";

FContent.append(h5Tag);

MContent.append(h1Tag,h6Tag,h7Tag);
let Card3 = document.querySelector('.d');

// let card3 = createCard('Image/icon1.png','Image/circle1.png',"Certificate"," certificate that an educator has <br> them to perform a task requiring. <br>has them to perform a task requiring.<br> ");

// let card4 = createCard('Image/heart.png',"Image/circle2.png","Life Programs","Life Programer educator has them <br> to perform a task requiring. <br>has them to perform a task requiring");


//  Card3.append(card3,card4);




