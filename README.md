# WaterLogging-Hotspot-Reporter
# 🌧 JalGuard – Waterlogging Hotspot Watch (Public View)

A minimal, login‑free public interface to report and track waterlogging hotspots in the city.  
Citizens log issues with location and photos, while authorities can later plug into the same feed for urban drainage planning and monsoon preparedness. [web:12][web:100]

---

## 🧠 What is this?

This repo contains a **pure frontend prototype** of the JalGuard public view:

- No auth, no backend – just HTML, CSS and vanilla JS.
- Focus on a **clean, card‑based UI** that feels like a live monsoon dashboard.
- Built so it can later be wired to any backend (Java/Spring, Node, etc.). [web:104][web:110]

---

## ✨ Core Features (Public View)

- 🏠 **Home feed – persistent issues**  
  Card layout showing waterlogging hotspots with:
  - Issue title, location, distance, and time logged  
  - Rainfall score, severity pill, drainage score  
  - Upvote button to crowd‑rank critical spots

- ✅ **Solved issues tab**  
  - Shows resolved hotspots with post‑resolution photo  
  - Displays time taken to resolve and responsible authority

- ➕ **Post new issue**  
  - Title, location (with “Auto‑locate” button), description  
  - Severity + optional depth in cm  
  - Optional photo upload (UI only for now)  
  - On submit, the issue is added to the Home feed on the client side

- 👤 **Profile (anonymous)**  
  - Shows stats like total issues logged and average response time  
  - No login, no personal data – only contribution footprint

- 🛰 **Live risk panel**  
  - Active hotspots count, monsoon load and average city score  
  - Rainfall stress bar and micro‑pills explaining how rainfall + drainage + “kharabness” form the risk index

---

## 🏗 Tech Stack

- **Frontend:** HTML5, CSS3 (custom, no framework), vanilla JavaScript  
- **Design style:** Dark, glassmorphism‑inspired monsoon dashboard with card UI and pills  
- **Icons/Fonts:**  
  - Google Fonts – `Urbanist`  
  - Minimal inline SVG icons / emojis for quick prototyping [web:50][web:53]

---

## 🚀 Getting Started

1. Clone the repo:

   ```bash
   git clone https://github.com/<your-username>/jalguard-public-view.git
   cd jalguard-public-view
   ```
Open the app:

Just double‑click index.html, or

Serve with a simple dev server:

  ```bash
#Python
  python -m http.server 5173
#then open http://localhost:5173 in browser

```
Explore:

🏠 Home: Scroll through sample hotspots

✅ Solved: See a before → after example

➕ Post new issue: Log a fake issue and watch it appear in the feed

👤 Profile: Check the anonymous stats block

---

🧩 Project Structure
```bash
.
├── index.html      # Main UI – public view
├── style.css       # All styling (theme, cards, layout)
└── script.js       # Tab switching, upvotes, in-memory issue posting
index.html – Shell layout (header, tabs, sections for Home/Solved/Post/Profile).

```

style.css –
```
CSS variables for theme

Card layout for issues and right‑side panels

Responsive tweaks for mobile
````


script.js –
```
Handles tab switching

Fake upvotes (front‑end only)

Creates a new issue card on form submit
```

---

🧭 How this fits into a full system
This public view is designed to plug into a larger ecosystem:

Citizen side:
```
Crowd‑source waterlogging reports with photos and approximate depth

Let people upvote hotspots that block their daily routes
```

Government side (future work):
```
Region/date/upvote wise filters over the same dataset

Action logging (who resolved, how long it took)

Use rainfall history + drainage data + citizen “kharabness” to assign a rainfall score used in planning dashboards
```

---

Possible future enhancements:

🔔 Realtime updates via WebSocket

🗺 Map overlay view for hotspots

📊 Analytics page for monsoon planning and drainage upgrades

---

🤝 Contributing / Ideas
Feel free to:

Open an issue with UI suggestions or new card states (e.g. “Escalated”, “Ignored this monsoon”).

Fork and experiment with:

Different color themes (e.g. light mode)

Alternative layouts (single‑column mobile‑first)

Integrations with your own backend API.
