const fetch = (url, cb) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const response = JSON.parse(xhr.responseText);
      cb(response);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
};

fetch("https://geek-jokes.sameerkumar.website/api?format=json", (response) => {
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

fetch("https://api.imgflip.com/get_memes", (response) => {
  const res = response.data.memes;
  render(res);
});

const urlParams = new URLSearchParams(window.location.search);

const id = urlParams.get("id");
const filterById = (res, idd) => {
  const filtered = res.filter((obj) => obj.id == idd);
  return filtered;
};
const memeCon = document.querySelector(".meme-con");
fetch(`https://api.imgflip.com/get_memes`, (response) => {
  const res = response.data.memes;
  const img = document.createElement("img");
  const obj = filterById(res, id);

  img.setAttribute("src", `${obj[0].url}`);
  img.setAttribute("alt", "meme");
  img.setAttribute("width", "500");
  img.setAttribute("height", "500");
  memeCon.appendChild(img);
});



const searchMeme = (array, value) => {
  return array.filter((object) => {
    if (object.name.toLowerCase().startsWith(value)) {
      return object;
    }
  });
};



const searchInput = document.querySelector(".search-feild");

searchInput.addEventListener("input", (e) => {
  fetch("https://api.imgflip.com/get_memes" , (res) => {
    let array = searchMeme(res.data.memes, searchInput.value.toLowerCase());
    while(cards.firstChild){
      cards.firstChild.remove()
    }
    render(array)
  })
});

