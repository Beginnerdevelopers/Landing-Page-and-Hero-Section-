let imges = document.querySelectorAll("img");
let wrapper = document.getElementById("wrapper");
let imgwrapper = document.getElementById("fullimg");
let closeicon = document.querySelector("span");
imges.forEach((img, index) => {
  img.addEventListener("click", () => {
    openModel(`images/img${index}.jpg`);
  });
});
function openModel(imgsrc) {
  wrapper.style.display = "flex";
  imgwrapper.src = imgsrc;
}
closeicon.addEventListener("click", () => {
  wrapper.style.display = "none";
});
