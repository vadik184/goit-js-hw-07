import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
let instance;
//let instance;

// function getListOfImg(arry) {
//   const images = arry
//     .map(
//       ({ preview, original, description }) => `<li class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </li>`
//     )
//     .join();
//   console.log(images);
//   gallery.insertAdjacentHTML("beforeend", images);
// }
// getListOfImg(galleryItems);

const images = galleryItems.map((item) => {
  let listOfImg = document.createElement("li");
  listOfImg.classList.add("gallery__item");

  let imgLink = document.createElement("a");
  imgLink.classList.add("gallery__link");
  imgLink.href = item.original;

  let imgItem = document.createElement("img");
  imgItem.classList.add("gallery__image");
  imgItem.src = item.preview;
  imgItem.dataset.source = item.original;
  imgItem.alt = item.description;

  imgLink.append(imgItem);
  listOfImg.append(imgLink);
  return listOfImg;
});

gallery.append(...images);

//import * as basicLightbox from "basiclightbox";

gallery.addEventListener("click", openModal);

const openModal = (event) => {
  if (event.target.nodeName === "IMG") {
    event.preventDefault();
    instance = basicLightbox.create(
      `<img src="${event.target.dataset.source}">`
    );
    instance.show();

    document.addEventListener("keydown", closeModal);
  }
};
const closeModal = (event) => {
  if (event.code === "Escape") instance.close();
};

const bodyScriptLib = document.querySelector("body");
const scriptLib = document.createElement("script");
scriptLib.src =
  "https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js";
const headPart = document.querySelector("head");
const cssLib = document.createElement("link");
cssLib.href =
  "https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css";
cssLib.rel = "stylesheet";
bodyScriptLib.append(scriptLib);
headPart.append(cssLib);
console.log(cssLib);
console.log(scriptLib);
