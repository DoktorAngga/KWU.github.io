const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};



//togel class active search
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#searh-box");

document.querySelector("#search-btn").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};
// active shop
const sc = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-btn").onclick =(e)=>{
  sc.classList.toggle("active");
  e.preventDefault();
};
// penghapusan ero function
const hamburger = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#searh-btn");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
