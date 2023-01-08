// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';

// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainer.addEventListener('click', onGalleryItemClick);

function createGalleryItems (galleryItems) {
    return galleryItems
    .map(({ preview, original, description }) => {
    return `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`
}).join('');
}

function onGalleryItemClick (evt){
    evt.preventDefault();

    if (!event.target.classList.contains("gallery__image")) {
        return;
      }

    const lightbox = new SimpleLightbox('.gallery a', { 
        captionsData: 'alt',
        captionDelay: 250,
     });
}
