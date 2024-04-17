const total = document.getElementById("total");
const plusOne = document.getElementById("plusOne");

plusOne.addEventListener("click", function () {
  total.innerText = Number(total.innerText) + 1;
});
