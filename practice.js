let url2 = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
  let link = await getImage();
  let img = document.querySelector("#image");
  img.setAttribute("src", link);
  console.log(link);
  link.innerText = "";
});

async function getImage() {
  try {
    let res = await axios.get(url2);
    return res.data.message;
  }catch(e){
    console.log("error fetching",e);
    return "No data found";
  }
  
}