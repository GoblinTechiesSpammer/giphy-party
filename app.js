console.log("Let's get this party started!");

const searchForm = document.querySelector("#gif-search");

searchForm.addEventListener("submit", async function(e){
    e.preventDefault();
    const searchedGif = document.querySelector("#bar").value;
    console.log(searchedGif);
    let newGif = await axios.get(`http://api.giphy.com/v1/gifs/random`, {params:{api_key: "qaNkPHyjSPSgvBdUWikTAT4doJs8L5Qa", tag: searchedGif}});
    
    console.log(newGif);
    const newImg = document.createElement("img");

    newImg.src = newGif.data.data.images.original.url;      //this line took me 2 hours to figure out why newGif.data.data.embed_url wasn't working. I still dont understand.
    document.querySelector(".gif-board").append(newImg);
    
});

// async function getGif (searchedGif){
//     let res = await axios.get(`http://api.giphy.com/v1/gifs/random`, {params:{api_key: "qaNkPHyjSPSgvBdUWikTAT4doJs8L5Qa", tag: searchedGif}});
//     return res;
// }

const deleteButton = document.querySelector("#delete");

deleteButton.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(".gif-board").innerHTML = "";
});