let brands_list = document.querySelector(".brands__list");
let brands_arrows = document.querySelector(".arrows-link");
let show_hide = document.getElementById("show_hide");

function show_delete() {
  brands_list.classList.toggle("brands__list--expand");
  brands_arrows.classList.toggle("arrows-link--reverse");
  show_hide.innerHTML == "Показать все"
    ? (show_hide.innerHTML = "Скрыть")
    : (show_hide.innerHTML = "Показать все");
}

if (window.innerWidth < 568)
  new Swiper(".brands", {
    slidesPerView: "auto",
    wrapperClass: "brands__list",
    slideClass: "brands__item",
    pagination: { el: ".brands-pagination", clickable: !0 },
  });
