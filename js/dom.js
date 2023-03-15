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

const createHtmlElement = (el, className, id) => {
  const ele = document.createElement(el);
  if (className) {
    ele.className = className;
  }
  if (id) {
    ele.id = id;
  }
  return ele;
};

const appendChildrn = (parent, ...children) => {
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
  appendChildrn(divCard, imageContainer, memeCaption, addBtn);
  return divCard;
};

const cards = document.querySelector(".cards");
const obj = {
  id: "119139145",
  name: "Blank Nut Button",
  url: "https://i.imgflip.com/1yxkcp.jpg",
  width: 600,
  height: 446,
  box_count: 2,
  captions: 0,
};
const cb = () => {
  console.log("Hello meme");
};

const card = createCard(obj, cb);
if (cards != null) cards.appendChild(card);

addListener("#top-text", "input", () => {
    console.log(topText.value);
  changeValue(topTextElement, topText.value);
});
addListener("#bottom-text", "input", () => {
  changeValue(bottomTextElement, bottomText.value);
});
addListener("#right-top-text", "input", () => {
  changeValue(rightTop, rightTopText.value);
});
addListener("#right-bottom-text", "input", () => {
  changeValue(rightBottom, rightBottomText.value);
});
