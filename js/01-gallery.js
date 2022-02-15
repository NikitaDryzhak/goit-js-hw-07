import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryImages = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryImages)

function createGalleryMarkup(item) {
    return galleryItems.map(({preview, original, description}) => {
return item = 
        `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `
    }).join('')       
}

galleryContainer.addEventListener('click', openModalClick);

function openModalClick(evt) {
    evt.preventDefault();

    if (evt.currentTarget === evt.target) {
        return
    }
    const image = evt.target.dataset.source
    const modal = basicLightbox.create(`<img src="${image}" width="800" height="600">`)
    modal.show()
    
    document.addEventListener('keydown', modalClose)
function modalClose(e) {
    if (e.key === 'Escape') {
        modal.close()
    }
}
}




