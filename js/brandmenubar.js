// brandmenubar.js

// Function to show the menu bar
function showMenuBar() {
    const menuBar = document.getElementById("menuBarContainer");
    menuBar.style.display = "block";
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const vectorIcon = document.getElementById("vectorIcon");
    const crossIcon = document.querySelector(".entypocross-icon");
    const menuBarButton = document.querySelector(".menu-barBTN");
  
    // Hide the menu bar initially
    const menuBarContainer = document.getElementById("menuBarContainer");
    menuBarContainer.style.display = "none";
  
    // Show the menu bar when the vector icon is clicked
    vectorIcon.addEventListener("click", function () {
      showMenuBar();
    });
  
    // Hide the menu bar when the cross icon is clicked
    crossIcon.addEventListener("click", function () {
      menuBarContainer.style.display = "none";
    });
  
    // Show the menu bar when the button is clicked
    menuBarButton.addEventListener("click", function () {
      showMenuBar();
    });
  });
  function show(){
    alert("ho Welcome");
  }