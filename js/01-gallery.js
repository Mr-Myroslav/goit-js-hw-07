import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
let instenceImage = null;
const gallary = document.querySelector(".gallery");

const elements = [];
for (let i = 0; i < galleryItems.length; i++){
    const div = document.createElement("div");
    const a = document.createElement("a");
    const image = document.createElement("img");
    image.src = galleryItems[i].preview;
    image.alt = galleryItems[i].description;
    image.width = "340";
    a.classList.add("gallery__link");
    a.href = galleryItems[i].original;
    a.rel = "noopener";
    a.rel = "noreferrer";
    a.onclick = (event) => { event.preventDefault()}
    image.dataset.index = i;
    div.classList.add("gallery__item");
    image.classList.add("gallery__image");
    a.append(image);
    div.append(a);
    elements.push(div);
}
gallary.append(...elements);


function selectImage(event) {
  if (event.target.nodeName !== "IMG"){
    return;
  }
    const selectedImage = event.target.dataset.index;
    const instance = basicLightbox.create(
    `<img src="${galleryItems[selectedImage].original}" index="${selectedImage}" class="gallery__image">`
    )
    instance.show();
    instenceImage = instance;
    let visible = instance.visible();
    
}


gallary.addEventListener("click", selectImage);

const closeImage = (event) => {
    if (instenceImage !== null && event.keyCode == 27 ) {
      instenceImage.close();
    }
}

window.addEventListener("keyup", closeImage)