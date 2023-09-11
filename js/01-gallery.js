import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

let instance;
//---------Питання до перевіряючого - "Чому "Варіант 1" створює зображення у шаховому порядку, а "Варіант 2" ні? Дякую!"
// ----------варіант 1-----------
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

// ----------варіант 2-----------
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

//
const openModal = (event) => {
  if (event.target.nodeName === "IMG") {
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

gallery.addEventListener("click", openModal);

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

console.log(galleryItems); // Change code below this line
document.body.insertAdjacentHTML(
  "beforeend",
  `<script src="https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.14.2/simple-lightbox.min.js"></script>`,

  document.head.insertAdjacentHTML(
    "beforeend",
    `<link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.14.2/simple-lightbox.min.css"
    />`
  )
);
