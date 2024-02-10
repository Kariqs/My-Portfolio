//Adding the animation on.
let developmentSpan = document.getElementById("text");
const texts = [
  "Frontend Development",
  "Backend Development",
  "Mobile App Development",
];
let currentIndex = 0;

const animateText = () => {
  developmentSpan.style.animation = "none"; // Reset animation
  void developmentSpan.offsetWidth; // Trigger reflow
  developmentSpan.style.animation = "slideText 2s linear"; // Apply animatio

  // Set new text after deletion animation completes
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % texts.length;
    developmentSpan.textContent = texts[currentIndex];
  }, 1000); // Half the duration of the animation
};

setInterval(animateText, 3000);

//update the greeting according to time
const greetingSpanElement = document.getElementById("time");
const currentTime = new Date().getHours();

if (currentTime >= 0 && currentTime < 12) {
  greetingSpanElement.textContent = "Good Morning.";
} else if (currentTime >= 12 && currentTime < 16) {
  greetingSpanElement.textContent = "Good Afternoon.";
} else {
  greetingSpanElement.textContent = "Good Evening.";
}

//display a wanted tab and close the others.
let frontendButtonElement = document.getElementById("frontend");
let frontendDiv = document.querySelector(".frontend");
let backendButtonElement = document.getElementById("backend");
let backendDiv = document.querySelector(".backend");
let othersButtonElement = document.getElementById("others");
let othersDiv = document.querySelector(".others");

const showFrontEnd = () => {
  frontendDiv.style.display = "block";
  frontendButtonElement.classList.remove("btn-alt");
  backendButtonElement.classList.add("btn-alt");
  backendDiv.style.display = "none";
  othersButtonElement.classList.add("btn-alt");
  othersDiv.style.display = "none";
};
frontendButtonElement.addEventListener("click", showFrontEnd);

const showBackEnd = () => {
  backendDiv.style.display = "block";
  backendButtonElement.classList.remove("btn-alt");
  frontendButtonElement.classList.add("btn-alt");
  frontendDiv.style.display = "none";
  othersButtonElement.classList.add("btn-alt");
  othersDiv.style.display = "none";
};
backendButtonElement.addEventListener("click", showBackEnd);

const showOthers = () => {
  backendDiv.style.display = "none";
  backendButtonElement.classList.add("btn-alt");
  frontendButtonElement.classList.add("btn-alt");
  frontendDiv.style.display = "none";
  othersButtonElement.classList.remove("btn-alt");
  othersDiv.style.display = "block";
};
othersButtonElement.addEventListener("click", showOthers);

showFrontEnd();

//change between experience and education
let experienceButtonElement = document.getElementById("experience");
let experienceDiv = document.querySelector(".experience");
let educationButtonElement = document.getElementById("education");
let educationDiv = document.querySelector(".education");

const showExperience = () => {
  experienceButtonElement.classList.remove("btn-alt");
  experienceDiv.style.display = "block";
  educationButtonElement.classList.add("btn-alt");
  educationDiv.style.display = "none";
};
experienceButtonElement.addEventListener("click", showExperience);

const showEducation = () => {
  educationButtonElement.classList.remove("btn-alt");
  educationDiv.style.display = "block";
  experienceButtonElement.classList.add("btn-alt");
  experienceDiv.style.display = "none";
};
educationButtonElement.addEventListener("click", showEducation);

showExperience();
