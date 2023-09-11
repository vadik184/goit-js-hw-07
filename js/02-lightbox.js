import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

// В ДЗ сказано нічого не міняти у вихідному коді, як так розумію це в HTML?
//я пробував різними способами підключити CSS і JS, та безуспішно, тому вніс їх вручну

const images = galleryItems.map((item) => {
  let listOfImg = document.createElement("li");
  listOfImg.classList.add("gallery__item");

  let imgLink = document.createElement("a");
  imgLink.classList.add("gallery__link");
  imgLink.href = item.original;

  let imgItem = document.createElement("img");
  imgItem.classList.add("gallery__image");
  imgItem.src = item.preview;
  imgItem.alt = item.description;

  imgLink.append(imgItem);
  listOfImg.append(imgLink);
  return listOfImg;
});

gallery.append(...images);

let options = {
  captionsData: "alt",
  captionDelay: 250,
};

new SimpleLightbox(".gallery a", options);

//const bodyScriptLib = document.querySelector("body");
//const headPart = document.querySelector("head");

// const scriptSimple = document.createElement("script");
// scriptSimple.src =
//   "https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.14.2/simple-lightbox.min.js";

// const cssSimple = document.createElement("link");
// cssSimple.href =
//   "https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.14.2/simple-lightbox.min.css";
// cssSimple.rel = "stylesheet";
// bodyScriptLib.append(scriptSimple);
// headPart.append(cssSimple);

// document.body.insertAdjacentHTML(
//   "beforeend",
//   `<script src="https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.14.2/simple-lightbox.min.js"></script>`
// );
// document.head.insertAdjacentHTML(
//   "beforeend",
//   `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.14.2/simple-lightbox.min.css" />`
// );

console.log(galleryItems);
