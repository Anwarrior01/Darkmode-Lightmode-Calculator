var nom = document.getElementById("nom");
var pnom = document.getElementById("pnom");
var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var n3 = document.getElementById("n3");
var n4 = document.getElementById("n4");
var n5 = document.getElementById("n5");

var nomcomp =
  document.getElementById("nom").value + document.getElementById("pnom").value;

document.getElementById("btn").addEventListener("click", function (hh) {
  let moy =
    (Number(n1.value) * 7 +
      Number(n2.value) * 7 +
      Number(n3.value) * 5 +
      Number(n4.value) * 2 +
      Number(n5.value) * 2) /
    23;
  document.getElementById("result").innerText =
    " la moyenne de " + nom.value + " est " + parseInt(moy);
});
