import { products } from "./data.js"

function showProducts() {
    for(let prad of products) {
        
        if(prad.type === "meat") {
            const card = document.createElement('div');
            card.className = 'card';
    
            const cardEl = document.createElement('div');
            cardEl.className = 'card-el';
            
            const img = document.createElement('img');
            img.className = 'card-img';
    
            const productName = document.createElement('p');
            productName.className = 'card-title';
    
            img.src = prad.image;
            productName.textContent = prad.name;
            cardEl.append(productName);
            card.append(img, cardEl);
            document.querySelector('.products').append(card);

        }

        
    } 
}

function main() {
    showProducts();
}

main();