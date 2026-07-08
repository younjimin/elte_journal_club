/* ==============================================================
   ELTE Journal Club — rendering logic
   ============================================================== */

const CATEGORY_LABEL = {
  tech: "Tech Ethics",
  ai: "AI",
  policy: "Policy",
  env: "Environment",
};
const CATEGORY_CLASS = {
  tech: "stamp--tech",
  ai: "stamp--ai",
  policy: "stamp--policy",
  env: "stamp--env",
};

function formatDate(iso) {
  if (!iso) return "";
  const d = new Date(iso + "T00:00:00");
  if (isNaN(d)) return iso;
  return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

function sortByDateDesc(list) {
  return [...list].sort((a, b) => new Date(b.date) - new Date(a.date));
}

function stampFor(category) {
  const label = CATEGORY_LABEL[category] || category;
  const cls = CATEGORY_CLASS[category] || "stamp--social";
  return `<span class="stamp ${cls}">${label}</span>`;
}

/* ---------------- Articles ---------------- */

function articleCardHTML(a) {
  const hasBody = a.body && a.body.trim().length > 0;
  const readControl = a.url
    ? `<a class="card__link" href="${a.url}" target="_blank" rel="noopener">Read →</a>`
    : hasBody
    ? `<button class="card__toggle" data-toggle="${a.id}">Read</button>`
    : "";
  const bodyBlock = hasBody
    ? `<div class="card__body" id="body-${a.id}">${a.body}</div>`
    : "";

  return `
    <article class="card">
      <div class="card__meta">
        ${stampFor(a.category)}
        <span class="card__date">${formatDate(a.date)}</span>
      </div>
      <h3>${a.title}</h3>
      ${a.author ? `<p class="card__byline">by ${a.author}</p>` : ""}
      <p class="summary">${a.summary || ""}</p>
      ${bodyBlock}
      ${readControl}
    </article>
  `;
}

function renderArticleGrid(list, el) {
  if (!list.length) {
    el.innerHTML = `<div class="empty">No articles yet — check back soon.</div>`;
    return;
  }
  el.innerHTML = sortByDateDesc(list).map(articleCardHTML).join("");
  el.querySelectorAll("[data-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const body = document.getElementById(`body-${btn.dataset.toggle}`);
      const open = body.classList.toggle("open");
      btn.textContent = open ? "Close" : "Read";
    });
  });
}

function initArticlesPage() {
  const el = document.getElementById("articles-grid");
  if (!el) return;
  const filterBar = document.getElementById("articles-filters");
  let active = "all";

  function apply() {
    const list = active === "all" ? ARTICLES : ARTICLES.filter((a) => a.category === active);
    renderArticleGrid(list, el);
  }

  if (filterBar) {
    const cats = ["all", ...Object.keys(CATEGORY_LABEL)];
    filterBar.innerHTML = cats
      .map(
        (c) =>
          `<button data-cat="${c}" aria-pressed="${c === "all"}">${
            c === "all" ? "All" : CATEGORY_LABEL[c]
          }</button>`
      )
      .join("");
    filterBar.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", () => {
        active = btn.dataset.cat;
        filterBar.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", b === btn));
        apply();
      });
    });
  }

  apply();
}

/* ---------------- Home preview ---------------- */

function initHomePreview() {
  const el = document.getElementById("home-articles");
  if (el) {
    const latest = sortByDateDesc(ARTICLES).slice(0, 3);
    renderArticleGrid(latest, el);
  }
  const actEl = document.getElementById("home-activities");
  if (actEl) {
    const upcoming = ACTIVITIES.filter((a) => new Date(a.date) >= stripTime(new Date()))
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .slice(0, 3);
    renderTimeline(upcoming, actEl);
  }
}

/* ---------------- Tips ---------------- */

function tipCardHTML(t) {
  return `
    <article class="card">
      <div class="card__meta">
        <span class="stamp stamp--social">${t.category || "Tip"}</span>
      </div>
      <h3>${t.title}</h3>
      <p class="summary">${t.body || ""}</p>
    </article>
  `;
}

function initTipsPage() {
  const el = document.getElementById("tips-grid");
  if (!el) return;
  if (!TIPS.length) {
    el.innerHTML = `<div class="empty">No tips yet — check back soon.</div>`;
    return;
  }
  el.innerHTML = TIPS.map(tipCardHTML).join("");
}

/* ---------------- Projects ---------------- */

const STATUS_LABEL = { ongoing: "Ongoing", done: "Done", paused: "Paused" };
const STATUS_CLASS = { ongoing: "", done: "badge--done", paused: "badge--paused" };

function projectCardHTML(p) {
  return `
    <article class="card">
      <div class="card__meta">
        <span class="badge ${STATUS_CLASS[p.status] || ""}">${STATUS_LABEL[p.status] || p.status}</span>
        <span class="card__date">${formatDate(p.date)}</span>
      </div>
      <h3>${p.title}</h3>
      <p class="summary">${p.description || ""}</p>
      ${p.link ? `<a class="card__link" href="${p.link}" target="_blank" rel="noopener">View →</a>` : ""}
    </article>
  `;
}

function initProjectsPage() {
  const el = document.getElementById("projects-grid");
  if (!el) return;
  if (!PROJECTS.length) {
    el.innerHTML = `<div class="empty">No projects yet — check back soon.</div>`;
    return;
  }
  el.innerHTML = sortByDateDesc(PROJECTS).map(projectCardHTML).join("");
}

/* ---------------- Activities (timeline) ---------------- */

function stripTime(d) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

function timelineItemHTML(a) {
  const isPast = new Date(a.date) < stripTime(new Date());
  return `
    <li class="${isPast ? "is-past" : ""}">
      <div class="date-line">${formatDate(a.date)} · ${a.type || "event"}</div>
      <h3>${a.title}</h3>
      <p>${a.description || ""}</p>
    </li>
  `;
}

function renderTimeline(list, el) {
  if (!list.length) {
    el.innerHTML = `<div class="empty">No upcoming activities right now.</div>`;
    return;
  }
  el.innerHTML = `<ul class="timeline">${list.map(timelineItemHTML).join("")}</ul>`;
}

function initActivitiesPage() {
  const el = document.getElementById("activities-list");
  if (!el) return;
  if (!ACTIVITIES.length) {
    el.innerHTML = `<div class="empty">No activities yet — check back soon.</div>`;
    return;
  }
  const sorted = sortByDateDesc(ACTIVITIES).reverse();
  renderTimeline(sorted, el);
}

/* ---------------- boot ---------------- */

document.addEventListener("DOMContentLoaded", () => {
  initHomePreview();
  initArticlesPage();
  initTipsPage();
  initProjectsPage();
  initActivitiesPage();

  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});
