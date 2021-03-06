import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const galleryImages = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryImages)

function createGalleryMarkup(item) {
    return galleryItems.map(({preview, original, description}) => {
return item = 
        `
  <a class="gallery__item"
  href="${original}">
  <img class="gallery__image"
  src="${preview}" 
  alt="${description}" />
</a>
    `
    }).join('')       
}

let gallery = new SimpleLightbox('.gallery a',
    {
        captionsData: 'alt',
        captionDelay: 250
    });
gallery.on('show.sipmlelightbox', function () {
});


