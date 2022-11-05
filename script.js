let btnDelete = document.querySelectorAll(".delete");
let btnRestore = document.querySelectorAll(".restore");
let track = document.querySelectorAll(".table2 tbody tr");
// let tr1 = document.querySelector("tbody .d-none");
let pauseTrack = document.querySelectorAll(".pause-track");
let playTack = document.querySelectorAll(".tr2");
let background = document.querySelectorAll(".play2");
console.log(playTack);
let seeAll = document.querySelector(".btn-see-more");
let seeMore = document.querySelector(".see-more");
let displayTrack = document.querySelectorAll(".card-mgn.d-none");
seeAll.addEventListener("click", () => {
  seeAll.classList.add("d-none");
  seeMore.classList.add("d-none");
  for (let i = 0; displayTrack.length; i++) {
    displayTrack[i].classList.remove("d-none");
  }
});

for (let i = 0; i < pauseTrack.length; i++) {
  pauseTrack[i].addEventListener("click", () => {
    pauseTrack[i].style.display = "none";
    background[i].style.backgroundColor = "yellow";
    playTack[i].style.display = "block";
  });
}
for (let i = 0; i < pauseTrack.length; i++) {
  playTack[i].addEventListener("click", () => {
    pauseTrack[i].style.display = "block";
    background[i].style.backgroundColor = "red";
    playTack[i].style.display = "none";
  });
}

let bin = [];
for (let i = bin.length - 1; i >= 0; i--) {
  btnRestore.addEventListener("click", () => {
    bin[i].style.display = "block";
  });
}
for (let i = 0; i < track.length; i++) {
  btnDelete[i].addEventListener("click", () => {
    track[i].style.display = "none";
    bin.push(track[i]);
  });
}
