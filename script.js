function changeColor() {
  var checkBox = document.getElementById("myCheck");
  var text = document.getElementById("learnmore");
  if (checkBox.checked == true) {
    document.getElementById("price1").innerHTML = "199.99";
    document.getElementById("price2").innerHTML = "249.99";
    document.getElementById("price3").innerHTML = "399.99";
  } else {
    document.getElementById("price1").innerHTML = "19.99";
    document.getElementById("price2").innerHTML = "24.99";
    document.getElementById("price3").innerHTML = "39.99";
  }
}
