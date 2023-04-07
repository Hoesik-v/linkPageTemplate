
const btnbaby = document.getElementById("btn-baby");
const btntrip = document.getElementById("btn-trip");
const babyPage = document.getElementById("baby-page");
const tripPage = document.getElementById("trip-page");

btnbaby.style.color = "black";
btntrip.style.color = "gray";
babyPage.style.display = "block";
tripPage.style.display = "none";

btnbaby.addEventListener("mouseover", function() {
  btnbaby.style.color = "#459795";
});

btnbaby.addEventListener("mouseout", function() {
  btnbaby.style.color = "black";
});

btnbaby.addEventListener("click", function() {
  
btnbaby.style.color = "black";
btntrip.style.color = "gray";
babyPage.style.display = "block";
tripPage.style.display = "none";
});

btntrip.addEventListener("mouseover", function() {
  btntrip.style.color = "#459795";
});

btntrip.addEventListener("mouseout", function() {
  btntrip.style.color = "black";
});

btntrip.addEventListener("click", function() {
    tripPage.style.display = "block";
    babyPage.style.display = "none";
    btnbaby.style.color = "gray";
    btntrip.style.color = "black";
});