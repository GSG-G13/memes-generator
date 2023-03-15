const fetch = (url , cb) => {
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4 && xhr.status ==200){
            let response = JSON.parse(xhr.responseText)
            cb(response)
        }
    }
    xhr.open("GET" , url , true)
    xhr.send()
}

fetch("https://geek-jokes.sameerkumar.website/api?format=json" , (response) => {
    let joke = response.joke
    textJoke.textContent = joke
})