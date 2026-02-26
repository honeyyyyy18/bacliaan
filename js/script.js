const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    themeToggle.textContent =
      document.body.classList.contains("dark-mode")
        ? "Light Mode"
        : "Dark Mode";
  });
}

const toggleSkills = document.getElementById("toggleSkills");
const skillsSection = document.getElementById("skillsSection");
if (toggleSkills && skillsSection) {
  toggleSkills.addEventListener("click", function () {
    skillsSection.classList.toggle("hidden");
  });
}

const submitBtn = document.getElementById("submitBtn");
if (submitBtn) {
  submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name === "" || email === "") {
      alert("Please fill in all required fields.");
    } else {
      alert("Form submitted successfully!");
    }
  });
}
