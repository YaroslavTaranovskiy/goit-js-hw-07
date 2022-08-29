import { galleryItems } from './gallery-items.js';
// Change code below this line

const imgContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryCardsMarkup(galleryItems);
imgContainer.insertAdjacentHTML('beforeend', cardsMarkup);
imgContainer.addEventListener('click', onImgContainerClick);

function createGalleryCardsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" 
             href="large-image.jpg">
                <img class="gallery__image"
                   src="${preview}"
                   data-source="${original}"
                   alt="${description}"
                />
            </a>
        </div>
    `;})
    .join('');
}

function onImgContainerClick(event) {
    event.preventDefault();

    const isGallerySwatchEl = event.target.classList.contains('gallery__image');
    
    if (!isGallerySwatchEl) {
       return;
        
    }
    
    const swatchUrlEl = event.target.dataset.source;
         
    const instance = basicLightbox.create(`<img class="modal__image" src="${swatchUrlEl}"/>`);
    instance.show();

    window.addEventListener('keydown', onEscKeyPress);

  
    function onEscKeyPress(event) {
        const ESC_KEY_CODE = 'Escape';

        if (event.code === ESC_KEY_CODE) {
           instance.close();
        
            window.removeEventListener('keydown', onEscKeyPress); 
        }
    }

}
console.log(galleryItems);
