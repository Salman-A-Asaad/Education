let bars = document.getElementById("bars");
let list = document.getElementById("list");
let teachers = document.querySelectorAll(".teachers .container .item ");
let year = document.getElementById("year");
let comunication = document.querySelectorAll(
  ".teachers .container .item .comunication"
);
let itemsCourse = document.querySelector(".courses .container .items");
let itemsCourseOne = document.getElementById("item-one");
let next = document.getElementById("next");
let pre = document.getElementById("pre");
year.innerHTML = `${new Date().getFullYear()}`;
teachers.forEach((element, index) => {
  element.addEventListener("click", () => {
    comunication[index].classList.toggle("show");
  });
});
bars.addEventListener("click", () => {
  list.classList.toggle("show");
});

next.onclick = () => {
  let widthItem = parseFloat(window.getComputedStyle(itemsCourseOne).width);
  itemsCourse.scrollLeft += widthItem + 33;
};
pre.onclick = () => {
  let widthItem = parseFloat(window.getComputedStyle(itemsCourseOne).width);
  itemsCourse.scrollLeft -= widthItem + 33;
};
