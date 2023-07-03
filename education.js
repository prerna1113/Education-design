


const cardsData = [
    
    {
      imageSrc: 'Image/image2.png',
      title: 'Card 2',
      description: 'Description for Card 2',
    },
    {
      imageSrc: 'Image/image3.png',
      title: 'Card 3',
      description: 'Description for Card 3',
    },
  ];
  const cardContainer = document.getElementsByClassName('cards');
  for (const cardData of cardsData) {
    const card = document.createElement('div');
    card.className = 'card';
    
    const image = document.createElement('img');
    image.src = cardData.imageSrc;
    image.className = 'card-img-top';
    image.alt = 'Image';
    card.appendChild(image);
    
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    
    const title = document.createElement('h5');
    title.className = 'form-control';
    title.textContent = cardData.title;
    cardBody.appendChild(title);
    
    const description = document.createElement('p');
    description.className = 'card-text';
    description.textContent = cardData.description;
    cardBody.appendChild(description);
      
    card.append(cardBody);
    cardContainer.appendChild(card);
  }