(function () {
  const data = window.SITE_DATA || {};
  const $ = (id) => document.getElementById(id);
  const text = (id, value) => { const node = $(id); if (node) node.textContent = value || ""; };
  const escapeHtml = (value) => String(value || "").replace(/[&<>'"]/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
  }[c]));

  document.title = `${data.name || "Academic Homepage"} | Academic Homepage`;
  text("nav-name", data.name || "Academic Homepage");
  text("hero-name", data.name || "YOUR NAME");
  text("hero-title", data.title || "");
  text("hero-affiliation", data.affiliation || "");
  text("hero-one-line", data.oneLine || "");
  text("hero-location", data.location || "");
  text("target-fit", data.targetFit || "");
  text("research-vision", data.researchVision || "");
  text("footer-name", data.name || "YOUR NAME");
  text("year", new Date().getFullYear());

  const email = $("hero-email");
  if (email && data.email) {
    email.textContent = data.email;
    email.href = `mailto:${data.email}`;
  }

  const headshot = $("headshot");
  if (headshot && data.headshot) {
    headshot.src = data.headshot;
    headshot.alt = `${data.name || "Profile"} headshot`;
  }

  const cvLink = $("cv-link");
  if (cvLink && data.cvUrl) cvLink.href = data.cvUrl;

  const renderLinks = (links = []) => links
    .filter(item => item && item.label && item.url)
    .map(item => `<a href="${escapeHtml(item.url)}" target="_blank" rel="noopener">${escapeHtml(item.label)}</a>`)
    .join("");

  const heroActions = $("hero-actions");
  if (heroActions) {
    const primary = data.cvUrl ? `<a class="button" href="${escapeHtml(data.cvUrl)}">Download CV</a>` : "";
    const secondary = data.email ? `<a class="button secondary" href="mailto:${escapeHtml(data.email)}">Email</a>` : "";
    const scholar = data.scholarUrl ? `<a class="button secondary" href="${escapeHtml(data.scholarUrl)}" target="_blank" rel="noopener">Google Scholar</a>` : "";
    heroActions.innerHTML = primary + secondary + scholar;
  }

  const tags = $("keyword-tags");
  if (tags) {
    tags.innerHTML = (data.keywords || []).map(k => `<span class="tag">${escapeHtml(k)}</span>`).join("");
  }

  const bio = $("bio");
  if (bio) {
    bio.innerHTML = (data.bio || []).map(p => `<p>${escapeHtml(p)}</p>`).join("");
  }

  const research = $("research-themes");
  if (research) {
    research.innerHTML = (data.researchThemes || []).map(theme => `
      <article class="card">
        <h3>${escapeHtml(theme.title)}</h3>
        <p>${escapeHtml(theme.description)}</p>
        <ul class="method-list">${(theme.methods || []).map(m => `<li>${escapeHtml(m)}</li>`).join("")}</ul>
      </article>
    `).join("");
  }

  const pubs = $("publication-list");
  if (pubs) {
    pubs.innerHTML = (data.publications || []).map(pub => `
      <article class="pub-card">
        <div>
          <h3>${escapeHtml(pub.title)}</h3>
          <p class="pub-meta">${escapeHtml(pub.authors)}</p>
          <p class="pub-meta"><strong>${escapeHtml(pub.venue)}</strong></p>
          ${pub.note ? `<p class="pub-note">${escapeHtml(pub.note)}</p>` : ""}
          ${pub.abstract ? `<p>${escapeHtml(pub.abstract)}</p>` : ""}
          <div class="pub-links">${renderLinks(pub.links)}</div>
        </div>
        <div class="pub-side">
          ${pub.image ? `
            <figure class="pub-figure">
              <img src="${escapeHtml(pub.image)}" alt="${escapeHtml(pub.imageAlt || `${pub.title} figure`)}">
            </figure>
          ` : ""}
          <div class="tags pub-tags">${(pub.tags || []).map(t => `<span class="tag">${escapeHtml(t)}</span>`).join("")}</div>
        </div>
      </article>
    `).join("");
  }

  const projects = $("project-list");
  if (projects) {
    projects.innerHTML = (data.projects || []).map(project => `
      <article class="project-card">
        <h3>${escapeHtml(project.title)}</h3>
        ${project.subtitle ? `<p><strong>${escapeHtml(project.subtitle)}</strong></p>` : ""}
        <p>${escapeHtml(project.description)}</p>
        <div class="project-links">${renderLinks(project.links)}</div>
      </article>
    `).join("");
  }

  const news = $("news-list");
  if (news) {
    news.innerHTML = (data.news || []).map(item => `
      <li><time>${escapeHtml(item.date)}</time><span>${escapeHtml(item.text)}</span></li>
    `).join("");
  }

  const renderCvItems = (id, items = [], type = "default") => {
    const node = $(id);
    if (!node) return;
    node.innerHTML = items.map(item => {
      const role = type === "teaching" ? item.course : item.role;
      return `
        <div class="cv-item">
          <div class="cv-period">${escapeHtml(item.period)}</div>
          <div>
            <div class="cv-role">${escapeHtml(role)}</div>
            <div class="cv-place">${escapeHtml(item.place || item.role || "")}</div>
            <div class="cv-detail">${escapeHtml(item.detail)}</div>
          </div>
        </div>
      `;
    }).join("");
  };
  renderCvItems("education-list", data.education || []);
  renderCvItems("experience-list", data.experience || []);
  renderCvItems("teaching-list", data.teaching || [], "teaching");

  const honorsService = $("honors-service");
  if (honorsService) {
    honorsService.innerHTML = `
      <ul class="simple-list">${(data.honors || []).map(x => `<li>${escapeHtml(x)}</li>`).join("")}</ul>
      <ul class="simple-list">${(data.service || []).map(x => `<li>${escapeHtml(x)}</li>`).join("")}</ul>
    `;
  }

  text("contact-heading", data.contact?.heading || "Interested in collaboration?");
  text("contact-text", data.contact?.text || "");
  const contactActions = $("contact-actions");
  if (contactActions) {
    const emailButton = data.email ? `<a class="button" href="mailto:${escapeHtml(data.email)}">Email Me</a>` : "";
    const links = renderLinks(data.links || []);
    contactActions.innerHTML = emailButton + links;
  }

  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = $("nav-links");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
    navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }));
  }
})();
