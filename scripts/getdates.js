let yr = new Date().getFullYear();

let lastModified = document.lastModified;

let author = "Gavin Burch";

let place = "Utah, USA";

document.getElementById("copywrite").innerHTML = `\u00A9 ${yr} | ${author} | ${place}`;

document.getElementById("modified").innerHTML = `Last Modified: ${lastModified}`;