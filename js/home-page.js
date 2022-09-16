let date= new Date();

let year = date.getFullYear();

document.getElementById("footer").innerHTML = "© " + year + " .:|:. Justin J. Mikolajcik .:|:. Idaho";

let text = document.lastModified;

document.getElementById("update").innerHTML = "Last Updated: "+ text;

