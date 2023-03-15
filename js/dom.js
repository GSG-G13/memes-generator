const addListener = (selector, eventName, callback) => {
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

const changeValue = (element, text) => {
  element.textContent = text;
};

addListener("#top-text", "input", () => {
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
