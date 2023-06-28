const fetch = (url, cb) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const response = JSON.parse(xhr.responseText);
      cb(response);
    }
  };
  xhr.open('GET', url, true);
  xhr.send();
};

fetch('https://geek-jokes.sameerkumar.website/api?format=json', (response) => {
  const joke = response.joke;
  if (textJoke != null) textJoke.textContent = joke;
});

const render = (res) => {
  res.forEach((obj) => {
    const card = createCard(obj, () => {
      const url = `meme.html?id=${obj.id}`;
      window.location.assign(url);
    });
    if (cards != null) cards.appendChild(card);
  });
};

fetch('https://api.imgflip.com/get_memes', (response) => {
  const res = response.data.memes;
  render(res);
});

const urlParams = new URLSearchParams(window.location.search);

const id = urlParams.get('id');
const filterById = (res, idd) => {
  const filtered = res.filter((obj) => obj.id == idd);
  return filtered;
};
const memeCon = document.querySelector('.meme-con');
fetch(`https://api.imgflip.com/get_memes`, (response) => {
  const res = response.data.memes;
  const img = document.createElement('img');
  const obj = filterById(res, id);
  if (memeCon != null) {
    img.setAttribute('src', `${obj[0].url}`);
    img.setAttribute('alt', 'meme');
    img.setAttribute('width', '500');
    img.setAttribute('height', '500');
    memeCon.appendChild(img);
  }
});

const searchMeme = (array, value) => {
  return array.filter((object) => {
    if (object.name.toLowerCase().startsWith(value)) {
      return object;
    }
  });
};

const searchInput = document.querySelector('.search-feild');

if (searchInput != null) {
  searchInput.addEventListener('input', (e) => {
    fetch('https://api.imgflip.com/get_memes', (res) => {
      let array = searchMeme(res.data.memes, searchInput.value.toLowerCase());
      while (cards.firstChild) {
        cards.firstChild.remove();
      }
      render(array);
    });
  });
}

const overlay = document.querySelector('.overlay');
let activeElement = null;
let initialX = 0;
let initialY = 0;
let currentX = 0;
let currentY = 0;
let xOffset = 0;
let yOffset = 0;
if (overlay != null) {
  overlay.addEventListener('mousedown', startDrag);
  overlay.addEventListener('mouseup', endDrag);
  overlay.addEventListener('mousemove', drag);
}
const startDrag = (event) => {
  activeElement = event.target;
  initialX = event.clientX - xOffset;
  initialY = event.clientY - yOffset;
  if (activeElement !== null) {
    activeElement.style.cursor = 'move';
  }
};

const endDrag = () => {
  initialX = currentX;
  initialY = currentY;
  activeElement.style.cursor = 'default';
  activeElement = null;
};

function drag(event) {
  if (activeElement !== null) {
    event.preventDefault();
    currentX = event.clientX - initialX;
    currentY = event.clientY - initialY;

    xOffset = currentX;
    yOffset = currentY;

    activeElement.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
  }
}
