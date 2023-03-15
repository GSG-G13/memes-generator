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
  textJoke.textContent = joke;
});

fetch("https://api.imgflip.com/get_memes", (response) => {
  const res = response.data.memes;
  console.log(res);
});
