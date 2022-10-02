function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  let date= new Date();

let year = date.getFullYear();
document.querySelector("#footer").innerHTML = "Vacaville Chamber Site Plan © " + year;