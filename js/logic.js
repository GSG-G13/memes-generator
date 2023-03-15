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
console.log(id);
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
  console.log(obj[0].url);
  img.setAttribute("alt", "meme");
  img.setAttribute("width", "500");
  img.setAttribute("height", "500");
  memeCon.appendChild(img);
});

const testArray = [
  {
    id: "181913649",
    name: "Drake Hotline Bling",
    url: "https://i.imgflip.com/30b1gx.jpg",
    width: 1200,
    height: 1200,
    box_count: 2,
    captions: 0,
  },
  {
    id: "87743020",
    name: "Two Buttons",
    url: "https://i.imgflip.com/1g8my4.jpg",
    width: 600,
    height: 908,
    box_count: 3,
    captions: 0,
  },
  {
    id: "112126428",
    name: "Distracted Boyfriend",
    url: "https://i.imgflip.com/1ur9b0.jpg",
    width: 1200,
    height: 800,
    box_count: 3,
    captions: 0,
  },
  {
    id: "131087935",
    name: "Running Away Balloon",
    url: "https://i.imgflip.com/261o3j.jpg",
    width: 761,
    height: 1024,
    box_count: 5,
    captions: 0,
  },
  {
    id: "217743513",
    name: "Running 25 Cards",
    url: "https://i.imgflip.com/3lmzyx.jpg",
    width: 500,
    height: 494,
    box_count: 2,
    captions: 0,
  },
  {
    id: "124822590",
    name: "Running 12 Off Ramp",
    url: "https://i.imgflip.com/22bdq6.jpg",
    width: 804,
    height: 767,
    box_count: 3,
    captions: 0,
  },
];
const searchMeme = (array, value) => {
  return array.filter((object) => {
    if (object.name.startsWith(value)) {
      return object;
    }
  });
};

const searchInput = document.querySelector(".search-feild");
console.log();

searchInput.addEventListener("input", (e) => {
  console.log(e.target.value);
  let array = searchMeme(testArray, searchInput.value);
  console.log(array);
});
