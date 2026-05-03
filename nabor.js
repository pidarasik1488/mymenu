import { products } from "./data.js"

function showProducts() {
    for(let prad of products) {
        
        if(prad.type === "nabor") {
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

            // Добавляем обработчик клика на карточку
            card.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleCardZoom(this);
            });
        
        document.querySelector('.products').append(card);
        }
    } 
}

function toggleCardZoom(card) {
    if (card.classList.contains('zoomed')) {
        // Убираем увеличение
        card.classList.remove('zoomed');
        
        // Убираем затемнение фона
        const overlay = document.querySelector('.zoom-overlay');
        if (overlay) {
            overlay.remove();
        }
        
        // Возвращаем прокрутку
        document.body.style.overflow = '';
    } else {
        // Убираем увеличение с других карточек
        document.querySelectorAll('.card.zoomed').forEach(zoomedCard => {
            zoomedCard.classList.remove('zoomed');
        });
        
        // Удаляем существующий оверлей
        const existingOverlay = document.querySelector('.zoom-overlay');
        if (existingOverlay) {
            existingOverlay.remove();
        }
        
        // Добавляем увеличение
        card.classList.add('zoomed');
        
        // Создаем оверлей
        const overlay = document.createElement('div');
        overlay.className = 'zoom-overlay';
        document.body.appendChild(overlay);
        
        // Блокируем прокрутку
        document.body.style.overflow = 'hidden';
        
        // Клик по оверлею - закрыть
        overlay.addEventListener('click', function() {
            card.classList.remove('zoomed');
            this.remove();
            document.body.style.overflow = '';
        });
    }
}

function main() {
    showProducts();
}

main();