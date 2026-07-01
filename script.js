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
