// Tab switching
const tabs = document.querySelectorAll(".tab");
const homeTab = document.getElementById("homeTab");
const solvedTab = document.getElementById("solvedTab");
const postTab = document.getElementById("postTab");
const profileTab = document.getElementById("profileTab");
const floatingPostBtn = document.getElementById("floatingPostBtn");

function showTab(name) {
    homeTab.style.display = name === "home" ? "flex" : "none";
    solvedTab.style.display = name === "solved" ? "flex" : "none";
    postTab.style.display = name === "post" ? "block" : "none";
    profileTab.style.display = name === "profile" ? "block" : "none";

    tabs.forEach(t => t.classList.toggle("active", t.dataset.tab === name));
}

tabs.forEach(tab => {
    tab.addEventListener("click", () => showTab(tab.dataset.tab));
});

floatingPostBtn.addEventListener("click", () => {
    showTab("post");
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Upvote interactions (fake, front-end only)
document.addEventListener("click", e => {
    if (e.target.closest(".upvote-btn")) {
    const btn = e.target.closest(".upvote-btn");
    const countSpan = btn.querySelector(".count");
    const curr = parseInt(countSpan.textContent || "0", 10);
    countSpan.textContent = curr + 1;
    btn.style.boxShadow = "0 12px 32px rgba(56, 189, 248, 0.85)";
    }
});

// Fake auto-locate
function fakeLocate() {
    const input = document.getElementById("locationInput");
    if (!input.value) {
    input.value = "Near your current GPS pin";
    }
}

// Toast helper
const toast = document.getElementById("toast");
function showToast() {
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2300);
}

// New issue form – prepend a card to Home list (front-end only)
const issueForm = document.getElementById("issueForm");
issueForm.addEventListener("submit", e => {
    e.preventDefault();
    const title = document.getElementById("titleInput").value.trim();
    const location = document.getElementById("locationInput").value.trim();
    const severityText = document.getElementById("severityInput").value;
    const depth = document.getElementById("depthInput").value || "Unknown";

    if (!title || !location) return;

    const severityScore = severityText === "High" ? 9 : severityText === "Medium" ? 7 : 5;
    const rainfallScore = Math.min(100, severityScore * 10);

    const card = document.createElement("article");
    card.className = "issue-card";
    card.dataset.status = "open";
    card.dataset.severity = severityScore * 10;
    card.dataset.upvotes = 0;
    card.dataset.time = 0;

    card.innerHTML = `
    <div class="issue-media">
        <img src="https://images.pexels.com/photos/1902948/pexels-photo-1902948.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Newly reported waterlogging" />
        <div class="issue-media-badge">
        <span style="font-size: 9px;">Rainfall score</span>
        <strong>${rainfallScore} / 100</strong>
        </div>
    </div>
    <div class="issue-body">
        <div class="issue-header">
        <div>
            <div class="issue-title">
            ${title}
            <span class="issue-tag">New report</span>
            </div>
            <div class="issue-location">
            <div class="issue-location-icon">📍</div>
            <span>${location} • Just now</span>
            </div>
        </div>
        <div class="status-chip status-open">
            <span class="status-dot open"></span>
            OPEN
        </div>
        </div>
        <div class="issue-meta-row">
        <div class="issue-meta">
            <div class="meta-pill">
            🌀 Depth: ${depth} cm
            </div>
            <div class="severity-pill">
            <span class="severity-dot"></span>
            Severity ${severityScore} / 10
            </div>
        </div>
        <div class="badge-score">
            🌧 Auto-estimated from your input
        </div>
        </div>
        <div class="issue-footer">
        <button class="upvote-btn">
            ⬆ Upvote
            <span class="count">0</span>
        </button>
        <div style="display:flex;align-items:center;gap:6px;">
            <div class="time-pill">
            ⏱ Est. response • TBA
            </div>
            <div class="time-pill">
            🏛 Govt seen • Pending
            </div>
        </div>
        </div>
    </div>
    `;

    homeTab.prepend(card);
    showTab("home");
    showToast();
    issueForm.reset();
});