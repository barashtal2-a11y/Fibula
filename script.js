function renderLinks(section, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const links = FIBULA_LINKS.filter((link) => link.section === section);

  links.forEach((link) => {
    const a = document.createElement("a");
    a.href = link.url;
    a.className = "platform-link";
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.innerHTML = `<span class="icon-dot"></span>${link.name}`;
    container.appendChild(a);
  });
}

renderLinks("listen", "listen-links");
renderLinks("connect", "connect-links");

const bookingEmailEl = document.getElementById("booking-email");
if (bookingEmailEl) {
  bookingEmailEl.href = `mailto:${FIBULA_CONTACT.bookingEmail}`;
  bookingEmailEl.textContent = FIBULA_CONTACT.bookingEmail;
}

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const revealTargets = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && revealTargets.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealTargets.forEach((el) => observer.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add("is-visible"));
}
