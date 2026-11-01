(function () {
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // Hồ sơ
  $("name").textContent = PROFILE.name;
  $("footerName").textContent = PROFILE.name;
  $("role").textContent = PROFILE.role;
  $("intro").textContent = PROFILE.intro;
  $("goal").textContent = PROFILE.goal;
  $("year").textContent = new Date().getFullYear();
  const av = $("avatar");
  if (PROFILE.avatar) av.style.backgroundImage = `url("${PROFILE.avatar}")`;
  else av.textContent = PROFILE.name.trim().split(/\s+/).pop().charAt(0).toUpperCase();
  $("links").innerHTML = PROFILE.links
    .map((l) => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join("");

  // Ma trận SWOT
  document.querySelectorAll(".quad").forEach((q) => {
    const items = SWOT[q.dataset.key] || [];
    q.querySelector("ul").innerHTML = items
      .map((it) => `<li tabindex="0"><div class="ttl">${esc(it.title)}</div><div class="dt">${esc(it.detail)}</div></li>`).join("");
  });
  document.addEventListener("click", (e) => {
    const li = e.target.closest(".quad li");
    if (li) li.classList.toggle("open");
  });
  document.addEventListener("keydown", (e) => {
    if ((e.key === "Enter" || e.key === " ") && e.target.matches(".quad li")) {
      e.preventDefault(); e.target.classList.toggle("open");
    }
  });

  // TOWS
  ["SO", "WO", "ST", "WT"].forEach((k) => ($(k).textContent = STRATEGIES[k] || ""));

  // Kế hoạch
  const label = { done: "Hoàn thành", doing: "Đang làm", todo: "Chưa bắt đầu" };
  $("timeline").innerHTML = PLAN.map((p) => `
    <li class="${p.status}">
      <span class="time">${esc(p.time)}</span>
      <span class="task">${esc(p.task)}</span>
      <span class="st ${p.status}">${label[p.status] || ""}</span>
    </li>`).join("");
  const score = PLAN.reduce((s, p) => s + (p.status === "done" ? 1 : p.status === "doing" ? 0.5 : 0), 0);
  const pct = PLAN.length ? Math.round((score / PLAN.length) * 100) : 0;
  $("progressText").textContent = `Tiến độ tổng: ${pct}%`;
  requestAnimationFrame(() => ($("progressBar").style.width = pct + "%"));

  // Sáng / tối
  const root = document.documentElement;
  try { const t = localStorage.getItem("theme"); if (t) root.dataset.theme = t; } catch (_) {}
  $("themeToggle").addEventListener("click", () => {
    const dark = root.dataset.theme
      ? root.dataset.theme === "dark"
      : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (_) {}
  });
})();
