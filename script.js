document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const darkModeBtn = document.getElementById("darkModeBtn");
  const ctaButtons = document.querySelectorAll(".cta-btn");

  function showSectionsOnLoad() {
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.classList.add("show");
      }, index * 150);
    });
  }

  showSectionsOnLoad();

  darkModeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      darkModeBtn.textContent = "Light Mode";
    } else {
      darkModeBtn.textContent = "Dark Mode";
    }
  });

  ctaButtons.forEach((button) => {
    button.addEventListener("click", function () {
      alert("Thank you! Your booking request is ready.");
    });
  });
});
