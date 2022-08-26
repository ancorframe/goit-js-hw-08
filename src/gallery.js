// // Add imports above this line
import { galleryItems } from "./items";
// // Change code below this line

export * from "./css/simple-lightbox.css";
export * from "./css/common.css";
export * from "./css/01-gallery.css";
import SimpleLightbox from "simplelightbox";

console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");

const galleryItemsRender = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a>`;
  })
  .join("");

galleryEl.innerHTML = galleryItemsRender;

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
