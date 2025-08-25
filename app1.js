let url = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
  let link = await getImage();
  let img = document.querySelector("#image");
  img.setAttribute("src", link);
  console.log(link);
});

async function getImage() {
  try {
    let res = await axios.get(url); // Use the variable url, not "url"
    return res.data.message; // Correct key is 'message', not 'masseges'
  } catch (e) {
    console.log("Error fetching image:", e);
    return "No data found";
  }
}


// let delBtns = document.querySelectorAll(".delete");
//for (delBtn of delBtns){
//delBtn.addEventListener("click", function(){
  // let par = this.parentElement;
   //console.log(par);
   //par.remove();
//});

//}