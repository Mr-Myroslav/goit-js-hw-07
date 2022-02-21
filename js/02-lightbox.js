import { galleryItems } from './gallery-items.js';
// import SimpleLightbox from "simplelightbox";
// Change code below this line


console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const elements = [];
for (let i = 0; i < galleryItems.length; i++){
    const a = document.createElement("a");
    const image = document.createElement("img");
    image.src = galleryItems[i].preview;
    image.alt = galleryItems[i].description;
    image.width = "340";
    a.classList.add("gallery__link");
    a.href = galleryItems[i].original;
    image.dataset.index = i;
    a.classList.add("gallery__item");
    image.classList.add("gallery__image");
    a.append(image);
    elements.push(a);
}
gallery.append(...elements);

let gallerySimple = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
    captions: true,
    captionsData: "alt",
});

gallerySimple.on('show.simplelightbox', function () {
});




