var Search = document.getElementById("Search");
var Comics = document.getElementById("Comics");
var test = document.getElementById("test");
var icon = document.getElementById("iconLogo");


icon.addEventListener("click", function () {
  window.location.href = "index.html";
});


Search.addEventListener("click", function () {
  window.location.href = "search.html";
});

Comics.addEventListener("click", function () {
  window.location.href = "index.html";
});

test.addEventListener("click", function () {
  window.location.href = "Test.html";
});

// Hamberger

function hamberger() {
  var sideBar = document.getElementById("sideBar");
  if (sideBar.style.display == "none") {
    sideBar.style.display = "block";
    document.body.style.paddingLeft = '100px';
  }
  else {
    sideBar.style.display = "none";
    document.body.style.paddingLeft = '30px';
  }
};






