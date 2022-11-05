let btnDelete = document.querySelector(".delete");
let track = document.querySelectorAll(".table2 tbody tr");
console.log(track);
btnDelete.addEventListener("click", () => {
  for (let i = 0; i < track.length; i++) {
    track[i].remove();
  }
});
let seeAll = document.querySelector(".btn-see-more");
let seeMore = document.querySelector(".see-more");
let displayTrack = document.querySelectorAll(".card-mgn.d-none");
console.log(displayTrack);
seeAll.addEventListener("click", () => {
  seeAll.classList.add("d-none");
  seeMore.classList.add("d-none");
  for (let i = 0; displayTrack.length; i++) {
    displayTrack[i].classList.remove("d-none");
  }
});
