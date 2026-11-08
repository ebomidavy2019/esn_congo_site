document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const nom = document.getElementById("nom").value.trim();
  const email = document.getElementById("email").value.trim();
  const sujet = document.getElementById("sujet").value.trim();
  const message = document.getElementById("message").value.trim();

  const body = `Nom : ${nom}\nE-mail : ${email}\n\n${message}`;
  const mailto = `mailto:justicekaysha@gmail.com?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
});

// Ferme le menu mobile après le clic sur un lien.
document.querySelectorAll(".navbar .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.querySelector(".navbar-collapse");
    if (menu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});
