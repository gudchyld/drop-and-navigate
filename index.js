const dropBtn = document.querySelectorAll(".arrow");

// dropBtn.addEventListener("click", () => {
//   dropBtn.style.color = "red";
//   //   document.getElementById("dropdown-content").classList.add("show");
// });

dropBtn.forEach((button) => {
  button.addEventListener("click", () => {
    button.style.color = "red";
    let dropDown = button.nextElementSibling;
    dropDown.classList.toggle("show");
  });
});

window.onclick = function (event) {
  let dropdowns = document.getElementsByClassName("dropdown-content");
  for (let dropDown of dropdowns) {
    if (!event.target.matches(".arrow")) {
      if (dropDown.classList.contains("show"))
        dropDown.classList.remove("show");
    }
  }
};
