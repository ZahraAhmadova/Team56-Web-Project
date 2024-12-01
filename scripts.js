/*
    Code sample for SITE 1101 Principles of Information Systems 
    (c)2024 by Araz Yusubov 
    DISCLAIMER: All code examples we will look at are quick hacks intended to present working prototypes.
    Hence they do not follow best practice of programming or software engineering.    
*/

// Global variables for Artist's position and orientation
var x, y;
var angle;

function radian(degree) {
    return degree * Math.PI / 180;
}

function moveForward(distance, context) {
    let a = radian(angle);
    x = x + distance * Math.cos(a);
    y = y + distance * Math.sin(a);
    context.lineTo(x, y);    
}

function turnRight(degree) {
    angle = angle - degree;
    if (angle < 0) angle = angle + 360;
}

function turnLeft(degree) {
    angle = angle + degree;
    if (angle > 360) angle = angle - 360;
}

function DrawSpiral(context) {
    // Inspired by Express Course (2024) Lesson 29: For Loops with Artist
    // https://studio.code.org/s/express-2024/lessons/29/levels/5

    // The initial position is in the center of the canvas
    x = context.canvas.width / 2;
    y = context.canvas.height / 2;
    // The initial orientation is zero degrees i.e. facing East
    angle = 0.0; 
    context.moveTo(x, y);
    context.beginPath();
    for (let counter = 3; counter < 600; counter += 3) {
        moveForward(counter, context);
        context.stroke();
        turnRight(89);
    }
}

function toggleInfo(memberId) {
    var info = document.getElementById(memberId);
    info.style.display = (info.style.display === "block") ? "none" : "block";
}

window.onload = function() {
    var greetingElement = document.getElementById("custom-greeting");
    var currentTime = new Date().getHours();

    if (currentTime >= 5 && currentTime < 12) {
        greetingElement.innerHTML = "Good Morning, ";
    } else if (currentTime >= 12 && currentTime < 18) {
        greetingElement.innerHTML = "Good Afternoon, ";
    } else {
        greetingElement.innerHTML = "Good Evening, ";
    }
};
  // Open modal and display clicked image
  function openModal(imgElement) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const caption = document.getElementById("caption");

    modal.style.display = "block"; // Show modal
    modalImg.src = imgElement.src; // Set the modal image source
    caption.innerText = imgElement.alt; // Set the caption
  }

  // Close the modal
  function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
  }

  // Close modal on click outside the image
  window.onclick = function (event) {
    const modal = document.getElementById("imageModal");
    if (event.target === modal) {
      closeModal();
    }
  };


