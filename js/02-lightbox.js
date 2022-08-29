import { galleryItems } from './gallery-items.js';
// Change code below this line

const imgContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryCardsMarkup(galleryItems);
imgContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createGalleryCardsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {

        return `
        <a class="gallery__item" 
        href="${original}">
  <img class="gallery__image" 
  src="${preview}" 
  alt="${description}" 
  />
</a>
        `;
    })
        .join('');
}

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 100,
    captionPosition: 'bottom',
    // nav: true,
    // close: true,
    // caption: true,
    
});
console.log(galleryItems);
