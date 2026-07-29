function renderLinks(section, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const links = FIBULA_LINKS.filter((link) => link.section === section && !link.follow && !link.hidden);

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

function renderFollowCards(section, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const links = FIBULA_LINKS.filter((link) => link.section === section && link.follow && !link.hidden);

  links.forEach((link) => {
    const a = document.createElement("a");
    a.href = link.url;
    a.className = "follow-card";
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.innerHTML = `
      <span class="follow-card-avatar"></span>
      <span class="follow-card-text">
        <span class="follow-card-name">${link.name}</span>
        <span class="follow-card-handle">${link.handle || ""}</span>
      </span>
      <span class="follow-card-arrow">↗</span>
    `;
    container.appendChild(a);
  });
}

renderLinks("listen", "listen-links");
renderLinks("connect", "connect-links");
renderFollowCards("connect", "follow-cards");

const bookingEmailEl = document.getElementById("booking-email");
if (bookingEmailEl) {
  const email = FIBULA_CONTACT.bookingEmail;
  bookingEmailEl.href = "#";
  bookingEmailEl.textContent = email;

  bookingEmailEl.addEventListener("click", (e) => {
    e.preventDefault();

    const showCopied = () => {
      bookingEmailEl.textContent = "Copied!";
      setTimeout(() => { bookingEmailEl.textContent = email; }, 1500);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(showCopied).catch(() => {});
    } else {
      // Fallback for older browsers / non-secure contexts
      const ta = document.createElement("textarea");
      ta.value = email;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); showCopied(); } catch (err) {}
      document.body.removeChild(ta);
    }
  });
}

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
