document.addEventListener("DOMContentLoaded", function() {
  var backToTopBtn = document.getElementById("back-to-top");

  if (backToTopBtn) {
    // Afficher/Masquer le bouton selon le scroll
    window.addEventListener("scroll", function() {
      if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
        // Petit délai pour l'animation d'opacité si CSS configuré
        setTimeout(function() {
            backToTopBtn.style.opacity = "1";
        }, 10);
      } else {
        backToTopBtn.style.opacity = "0";
        // Attendre la fin de transition avant de cache complètement (optionnel)
        setTimeout(function() {
            if (window.scrollY <= 300) backToTopBtn.style.display = "none";
        }, 300);
      }
    });

    // Clic pour remonter
    backToTopBtn.addEventListener("click", function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});
