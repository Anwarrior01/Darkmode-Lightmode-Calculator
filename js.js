document.getElementById("btn").addEventListener("click", function (hh) {
  let day = document.getElementById("day");
  let month = document.getElementById("month");
  let year = document.getElementById("year");
  let yearvar = "basita";

  if (year.value % 4 == 0) {
    if (month.value == 2 && day.value <= 29) {
      document.getElementById("result").innerText =
        "Today's date is " +
        (Number(day.value) + 1) +
        "/" +
        Number(month.value) +
        "/" +
        year.value;
      if (day.value == 29) {
        document.getElementById("result").innerText =
          "Today's date is " +
          "1" +
          "/" +
          (Number(month.value) + 1) +
          "/" +
          year.value;
      }
      if (day.value > 29) {
        alert("erreur");
      }
    }
  }
  if (year.value % 4 != 0) {
    if (month.value == 2 && day.value <= 28) {
      document.getElementById("result").innerText =
        "Today's date is " +
        (Number(day.value) + 1) +
        "/" +
        Number(month.value) +
        "/" +
        year.value;
      if (day.value == 28) {
        document.getElementById("result").innerText =
          "Today's date is " +
          "1" +
          "/" +
          (Number(month.value) + 1) +
          "/" +
          year.value;
      }
      if (day.value > 28) {
        alert("erreur");
      }
    }
  }
  if (day.value <= 31 && day.value >= 1) {
    if (
      month.value == 12 ||
      month.value == 1 ||
      month.value == 3 ||
      month.value == 5 ||
      month.value == 7 ||
      month.value == 8 ||
      month.value == 10
    ) {
      if (day.value < 31) {
        document.getElementById("result").innerText =
          "Today's date is " +
          (Number(day.value) + 1) +
          "/" +
          Number(month.value) +
          "/" +
          year.value;
      }
      if (day.value == 31) {
        document.getElementById("result").innerText =
          "Today's date is " + "1" + "/" + 1 + "/" + year.value;
      }
    }
    if (month.value == 12) {
      if (day.value <= 30) {
        document.getElementById("result").innerText =
          "Today's date is " +
          (Number(day.value) + 1) +
          "/" +
          Number(month.value) +
          "/" +
          year.value;
      }
      if (day.value == 31) {
        document.getElementById("result").innerText =
          "Today's date is " + "1" + "/" + 1 + "/" + (Number(year.value) + 1);
      }
    }
  }
  if (day.value <= 30 && day.value >= 1) {
    if (
      month.value == 4 ||
      month.value == 6 ||
      month.value == 9 ||
      month.value == 11
    ) {
      if (day.value < 30 && day.value >= 1) {
        document.getElementById("result").innerText =
          "Today's date is " +
          (Number(day.value) + 1) +
          "/" +
          Number(month.value) +
          "/" +
          year.value;
      }
      if (day.value == 30) {
        document.getElementById("result").innerText =
          "Today's date is " +
          "1" +
          "/" +
          (Number(month.value) + 1) +
          "/" +
          year.value;
      }
    }
  }
  if (
    month.value == 4 ||
    month.value == 6 ||
    month.value == 9 ||
    month.value == 11
  ) {
    if (day.value > 30) {
      alert("erreur");
    }
  }
});
