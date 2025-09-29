// Animation subtile de la devise
document.addEventListener("DOMContentLoaded", () => {
  const devise = document.getElementById("devise");
  if (devise) {
    let words = ["On régale", "On rassemble", "On partage"];
    let index = 0;
    setInterval(() => {
      devise.textContent = words[index];
      index = (index + 1) % words.length;
    }, 2500);
  }

  // Optionnel : effet de surbrillance sur la devise au survol
  if (devise) {
    devise.addEventListener('mouseenter', () => {
      devise.style.background = "rgba(255,255,240,0.23)";
      devise.style.color = "#8eaf2e";
    });
    devise.addEventListener('mouseleave', () => {
      devise.style.background = "rgba(110, 170, 75, 0.17)";
      devise.style.color = "#fffbe8";
    });
  }
});
