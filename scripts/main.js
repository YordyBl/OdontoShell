/* =============================================
   MAIN.JS — Dental SHELL
   ============================================= */

// ---- Navbar scroll shadow ----
const navbar = document.getElementById("navbar");
if (navbar) {
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
  }, { passive: true });
}

// ---- Desktop dropdown ----
document.querySelectorAll(".nav-dropdown").forEach(item => {
  const btn = item.querySelector("button");
  const panel = item.querySelector(".dropdown-panel");

  btn?.addEventListener("click", e => {
    e.stopPropagation();
    const isOpen = item.classList.contains("open");
    closeAllDropdowns();
    if (!isOpen) item.classList.add("open");
  });

  // Keyboard support
  btn?.addEventListener("keydown", e => {
    if (e.key === "Escape") closeAllDropdowns();
  });
});

function closeAllDropdowns() {
  document.querySelectorAll(".nav-dropdown.open").forEach(d => d.classList.remove("open"));
}

document.addEventListener("click", closeAllDropdowns);

// ---- Mobile nav ----
const toggle    = document.getElementById("menuToggle");
const closeBtn  = document.getElementById("menuClose");
const mobileNav = document.getElementById("mobileNav");

function openNav() {
  mobileNav.classList.add("open");
  mobileNav.setAttribute("aria-hidden", "false");
  toggle?.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
  closeBtn?.focus();
}

function closeNav() {
  mobileNav.classList.remove("open");
  mobileNav.setAttribute("aria-hidden", "true");
  toggle?.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
  toggle?.focus();
}

toggle?.addEventListener("click", openNav);
closeBtn?.addEventListener("click", closeNav);
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && mobileNav?.classList.contains("open")) closeNav();
});

// Mobile submenu toggle
document.querySelectorAll(".mobile-submenu-trigger").forEach(btn => {
  btn.addEventListener("click", () => {
    const li = btn.closest("li");
    const sub = li.querySelector(".mobile-submenu");
    const chevron = btn.querySelector(".dropdown-chevron");
    const isOpen = sub.classList.contains("open");
    sub.classList.toggle("open", !isOpen);
    chevron?.style && (chevron.style.transform = isOpen ? "" : "rotate(180deg)");
  });
});

// Close mobile nav on link click (not submenu triggers)
mobileNav?.querySelectorAll("a").forEach(link => link.addEventListener("click", closeNav));

// ---- Scroll reveal ----
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  document.querySelectorAll("[data-reveal]").forEach(el => observer.observe(el));
} else {
  document.querySelectorAll("[data-reveal]").forEach(el => el.classList.add("is-visible"));
}

// ---- FAQ accordion ----
document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".faq-item");
    const isOpen = item.classList.contains("open");
    document.querySelectorAll(".faq-item.open").forEach(i => {
      i.classList.remove("open");
      i.querySelector(".faq-question")?.setAttribute("aria-expanded", "false");
    });
    if (!isOpen) {
      item.classList.add("open");
      btn.setAttribute("aria-expanded", "true");
    }
  });
});

// ---- Footer year ----
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ---- Responsive grid adjustments ----
function adjustGrids() {
  const w = window.innerWidth;

  // Stats grid
  const statsGrid = document.querySelector(".stats-grid");
  if (statsGrid) statsGrid.style.gridTemplateColumns = w <= 640 ? "repeat(2,1fr)" : "repeat(4,1fr)";

  // Footer grid
  const footerGrid = document.querySelector(".footer-grid");
  if (footerGrid) footerGrid.style.gridTemplateColumns = w <= 480 ? "1fr" : w <= 768 ? "1fr 1fr" : "2fr 1fr 1fr 1fr";

  // Two-column sections
  document.querySelectorAll(".two-col").forEach(el => {
    el.style.gridTemplateColumns = w <= 768 ? "1fr" : "1fr 1fr";
  });
}

adjustGrids();
window.addEventListener("resize", adjustGrids, { passive: true });
