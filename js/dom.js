const addListener = (selector, eventName, callback) => {
  if (document.querySelector(selector) !== null)
    document.querySelector(selector).addEventListener(eventName, callback);
};

const getElementById = (id) => {
  const element = document.getElementById(id);
  return element;
};

const querySelector = (query) => {
  const element = document.querySelector(query);
  return element;
};

const topText = getElementById("top-text");
const bottomText = getElementById("bottom-text");
const rightTop = querySelector(".right-top");
const rightBottom = querySelector(".right-bottom");
const rightTopText = getElementById("right-top-text");
const rightBottomText = getElementById("right-bottom-text");
const memeContainer = querySelector(".overlay");
const topTextElement = querySelector(".top-text");
const bottomTextElement = querySelector(".bottom-text");
const textJoke = document.querySelector("header .random-joke");

const changeValue = (element, text) => {
  element.textContent = text;
};

const createHtmlElement = (element, className, id) => {
  const HTMLElement = document.createElement(element);
  if (className) {
    HTMLElement.className = className;
  }
  if (id) {
    HTMLElement.id = id;
  }
  return HTMLElement;
};

const appendChildren = (parent, ...children) => {
  children.forEach((child) => {
    parent.appendChild(child);
  });
};

const createCard = (obj, cb) => {
  const divCard = createHtmlElement("div", "card");
  const imageContainer = createHtmlElement("div", "image-container");
  const img = createHtmlElement("img");
  img.setAttribute("src", obj.url);
  imageContainer.appendChild(img);
  const memeCaption = createHtmlElement("p", "meme-caption");
  memeCaption.textContent = obj.name;
  const addBtn = createHtmlElement("button", "add-button");
  addBtn.textContent = "add meme";
  addBtn.addEventListener("click", cb);
  appendChildren(divCard, imageContainer, memeCaption, addBtn);
  return divCard;
};

const cards = document.querySelector(".cards");

const cb = () => {};


addListener("#top-text", "input", () => {
  changeValue(topTextElement, topText.value);
});
addListener("#bottom-text", "input", () => {
  changeValue(bottomTextElement, bottomText.value);
});

const colorPicker = document.getElementById('color-picker');


if(colorPicker != null)colorPicker.addEventListener('input', function() {
  const color = colorPicker.value;
  topTextElement.style.color = color;
  bottomTextElement.style.color = color;
});
