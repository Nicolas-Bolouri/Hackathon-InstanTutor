// Fetching DOM elements for tutor center
const algebraT = document.querySelector("#algebraT");
const chemistryT = document.querySelector("#chemistryT");
const biologyT = document.querySelector("#biologyT");
const mechanicsT = document.querySelector("#mechanicsT");
const calculus_IT = document.querySelector("#calculus_IT");
const calculus_IIT = document.querySelector("#calculus_IIT");

// Adding event listeners to each tutor element
algebraT.addEventListener("click", function () {
  window.location.href = "videochat_algebra.html";
});

chemistryT.addEventListener("click", function () {
  window.location.href = "videochat_chemistry.html";
});

biologyT.addEventListener("click", function () {
  window.location.href = "videochat_biology.html";
});

mechanicsT.addEventListener("click", function () {
  window.location.href = "videochat_mechanics.html";
});

calculus_IT.addEventListener("click", function () {
  window.location.href = "videochat_calculus_I.html";
});

calculus_IIT.addEventListener("click", function () {
  window.location.href = "videochat_calculus_II.html";
});
