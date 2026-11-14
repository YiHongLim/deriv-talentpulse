# Deriv TalentPulse — Candidate Application Status Portal

A Deriv-inspired fintech candidate portal built for **DevFest 2026 GDGKL Vibing Lounge (Challenge 04: Keep Job Candidates Informed)**.

## Open the Live Web Link

Click the link below to open the deployed app in your browser:

👉 **https://yihonglim.github.io/deriv-talentpulse/**

> **Note:** If you just deployed, GitHub Pages may take 1–2 minutes to finish its initial build. Refresh the page if you see a 404 right after deployment.

---

## How to Test the Demo

1. Open **https://yihonglim.github.io/deriv-talentpulse/** in any desktop or mobile browser.
2. Use the **Preview Candidate State** bar at the top to switch between 4 live scenarios:
   - **1. Waiting 4 Days (No Action)** — Shows verified receipt, a calm "nothing needed from you" banner, and why the review is taking 4 days.
   - **2. Action Needed: Book Pairing** — Highlights a required action with a 1-click interview time-slot picker.
   - **3. Just Applied (Receipt)** — Immediate confirmation and file verification status.
   - **4. Final Stage (Pre-Offer)** — Post-interview status and offer call ETA.
3. Toggle **Dark Mode / Light Mode** in the top-right navbar, switch **Email / WhatsApp / SMS** stage alerts, or send a quick note to the hiring contact.

---

## Run Locally (Optional)

No build step or dependencies required:

1. Clone the repository:
   ```bash
   git clone https://github.com/YiHongLim/deriv-talentpulse.git
   cd deriv-talentpulse
   ```
2. Open `index.html` directly in your browser, or serve it locally:
   ```bash
   python3 -m http.server 8000
   ```
   Then visit `http://localhost:8000`.
