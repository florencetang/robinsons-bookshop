/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

// Sort filter side panel 
function openNav() {
  document.getElementById("sidePanel").style.width = "25rem";
}

function closeNav() {
  document.getElementById("sidePanel").style.width = "0";
}

