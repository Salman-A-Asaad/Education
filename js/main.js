let bars = document.getElementById("bars");
let list = document.getElementById("list");
let teachers = document.querySelectorAll(".teachers .container .item ");
let comunication = document.querySelectorAll(
  ".teachers .container .item .comunication"
);
teachers.forEach((element, index) => {
  element.addEventListener("click", () => {
    comunication[index].classList.toggle("show");
  });
});
bars.addEventListener("click", () => {
  list.classList.toggle("show");
});
