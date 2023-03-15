const addListener = (selector, eventName, callback) => {
  document.querySelector(selector).addEventListener(eventName, callback);
};

const getElementwithId = (id) => {
  const element = document.getElementById(id);
  return element;
};

const topText = document.getElementById("top-text");
const bottomText = document.getElementById("bottom-text");
const rightTop = document.querySelector(".right-top");
const rightBottom = document.querySelector(".right-bottom");
const rightTopText = document.getElementById("right-top-text");
const rightBottomText = document.getElementById("right-bottom-text");

const memeContainer = document.querySelector(".overlay");
const topTextElement = memeContainer.querySelector(".top-text");
const bottomTextElement = memeContainer.querySelector(".bottom-text");

topText.addEventListener("input", () => {
  topTextElement.textContent = topText.value;
});

bottomText.addEventListener("input", () => {
  bottomTextElement.textContent = bottomText.value;
});

rightTopText.addEventListener("input", () => {
  rightTop.textContent = rightTopText.value;
});

rightBottomText.addEventListener("input", () => {
  rightBottom.textContent = rightBottomText.value;
});
