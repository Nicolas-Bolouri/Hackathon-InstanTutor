// Fetching DOM elements for student center
const algebraS = document.querySelector("#algebraS");
const chemistryS = document.querySelector("#chemistryS");
const biologyS = document.querySelector("#biologyS");
const mechanicsS = document.querySelector("#mechanicsS");
const calculus_IS = document.querySelector("#calculus_IS");
const calculus_IIS = document.querySelector("#calculus_IIS");

// Adding event listeners to each student element
algebraS.addEventListener("click", function () {
  window.location.href = "waiting_algebra.html";
});

chemistryS.addEventListener("click", function () {
  window.location.href = "waiting_chemistry.html";
});

biologyS.addEventListener("click", function () {
  window.location.href = "waiting_biology.html";
});

mechanicsS.addEventListener("click", function () {
  window.location.href = "waiting_mechanics.html";
});

calculus_IS.addEventListener("click", function () {
  window.location.href = "waiting_calculus_I.html";
});

calculus_IIS.addEventListener("click", function () {
  window.location.href = "waiting_calculus_II.html";
});
