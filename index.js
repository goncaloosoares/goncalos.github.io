// Botão para voltar ao top
window.onscroll = function() {
    const btn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

// Função para subir suavemente
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

// Adiciona classe "fade-in" a todos os elementos com a classe .animate-on-load
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".animate-on-load");
  elements.forEach((el, i) => {
    setTimeout(() => el.classList.add("fade-in"), i * 100);
  });
});

// Navbar a encolher ao fazer scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

// Alternar entre tema claro e escuro
const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const isDark = localStorage.getItem("theme") === "dark";

if (isDark) {
  body.classList.add("dark-theme");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  const isNowDark = body.classList.contains("dark-theme");
  themeToggle.textContent = isNowDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isNowDark ? "dark" : "light");
});

// Função de animação do contador
function animateCounter(element, target, suffix = "") {
    let start = 0;
    const duration = 2000; // duração em ms
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        element.textContent = target.toLocaleString('pt-PT') + suffix;
        clearInterval(timer);
      } else {
        element.textContent = Math.ceil(start).toLocaleString('pt-PT') + suffix;
      }
    }, 16);
  }

// Iniciar contadores quando a página carregar
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".counter").forEach(el => {
      const target = parseInt(el.dataset.target);
      const suffix = el.dataset.suffix || "";
      if (!isNaN(target)) {
        setTimeout(() => animateCounter(el, target, suffix), 300);
      }
    });
  });