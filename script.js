// -------------------- DARK MODE --------------------
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}


// -------------------- TYPING EFFECT --------------------
const texts = ["Student", "Web Developer", "Creative Thinker"];
let i = 0;
let j = 0;
let isDeleting = false;

function typeEffect() {
  const typingElement = document.getElementById("typing");

  if (!typingElement) return; // prevent error if element not found

  let currentText = texts[i];

  if (!isDeleting) {
    typingElement.innerHTML = currentText.substring(0, j + 1);
    j++;

    if (j === currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  } else {
    typingElement.innerHTML = currentText.substring(0, j - 1);
    j--;

    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % texts.length;
    }
  }

  setTimeout(typeEffect, 100);
}


// -------------------- GPA CALCULATOR --------------------
function calculateGPA() {
  let m1 = Number(document.getElementById("m1").value);
  let m2 = Number(document.getElementById("m2").value);
  let m3 = Number(document.getElementById("m3").value);
  let m4 = Number(document.getElementById("m4").value);
  let m5 = Number(document.getElementById("m5").value);

  let marks = [m1, m2, m3, m4, m5];

  // Validation (0–100 only)
  for (let i = 0; i < marks.length; i++) {
    if (marks[i] > 100 || marks[i] < 0) {
  document.getElementById("m" + (i+1)).style.border = "2px solid red";
  document.getElementById("result").innerHTML =
        "Marks must be between 0 and 100";

  return;
}
    
      
  }

  // Calculation
  let total = m1 + m2 + m3 + m4 + m5;
  let percentage = (total / 500) * 100;
  let gpa = (percentage / 100) * 10;

  document.getElementById("result").innerHTML =
    "Percentage: " + percentage.toFixed(2) +
    "% | GPA: " + gpa.toFixed(2);
}


// -------------------- START FUNCTIONS AFTER PAGE LOAD --------------------
window.onload = function () {
  typeEffect();
};
function toggleDarkMode() {
      document.body.classList.toggle("dark-mode");
    }

    function showMore() {
      document.getElementById("moreContent").style.display = "block";
    }

    function showLess() {
      document.getElementById("moreContent").style.display = "none";
    }

    window.onload = function () {
      document.getElementById("htmlBar").style.width = "90%";
      document.getElementById("cssBar").style.width = "85%";
      document.getElementById("jsBar").style.width = "75%";
      document.getElementById("pythonBar").style.width = "80%";
    };


    function toggleDarkMode() {
      document.body.classList.toggle("dark-mode");
    }

    function filterProjects(type) {
  const cards = document.querySelectorAll(".project-card");

  cards.forEach(card => {
    if (type === "all" || card.classList.contains(type)) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
}

const images = [
  "home.png",
  "loan.png",
  "form.png"
];

let index = 0;

function showSlide() {
  document.getElementById("sliderImage").src = images[index];
}

function nextSlide() {
  index = (index + 1) % images.length;
  showSlide();
}

function prevSlide() {
  index = (index - 1 + images.length) % images.length;
  showSlide();
}

setInterval(nextSlide, 3000);


    function submitForm(event) {
      event.preventDefault();

      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let message = document.getElementById("message").value;

      if (name === "" || email === "" || message === "") {
        document.getElementById("formMessage").innerHTML = "Please fill all fields.";
        document.getElementById("formMessage").style.color = "red";
        return;
      }

      document.getElementById("formMessage").innerHTML =
        "Thank you, " + name + "! Your message has been submitted successfully.";
      document.getElementById("formMessage").style.color = "green";

      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    }
function openPopup(title, img, desc) {
  document.getElementById("popup").style.display = "block";
  document.getElementById("popupTitle").innerText = title;
  document.getElementById("popupImg").src = img;
  document.getElementById("popupDesc").innerText = desc;
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
