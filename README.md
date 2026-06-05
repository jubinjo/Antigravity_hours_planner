# AetherHours — Planificateur de Charge de Travail Académique

Developed with **Antigravity** (an advanced agentic AI coding assistant by Google DeepMind).

AetherHours is a premium, reactive, and highly aesthetic workload planning engine designed specifically for academic faculty, researchers, and administrators. It helps users orchestrate, track, and balance academic course preparation hours, research grants, and administrative tasks across the academic year.

Built with a stunning glassmorphic interface, AetherHours operates in a **zero-trust, browser-local architecture**, keeping 100% of your data privately inside your browser.

---

## Key Features

- **Dynamic Visual Analytics**: Custom responsive SVG stacked bar charts displaying monthly fill-rate percentages against targeted capacities.
- **Academic Multiplier Engine**: Automated course workload calculations that multiply raw hours based on institutional levels (APS, BA, PG course multipliers).
- **Responsive Themes**: Three carefully crafted design systems:
  - **Light Mode**: Clean, sleek Elseveir-inspired design.
  - **Dark Mode**: Electric, glassmorphic cyber-neon design.
  - **Institution Mode**: Elegant serif-based layout themed after La Source Lausanne slate-blue palettes.
- **Smart Configurations**: A reactive settings sidebar featuring a live change-detection button that glows dynamically when parameter modifications are pending.
- **Absolute Privacy**: No servers, no cookies, no tracking. Safe, sanitized JSON import and export utilities keep your database portable and secure.

---

## Quick Start Guide

AetherHours is hosted and deployed as a zero-dependency static application. You can use the tool instantly in any modern desktop or mobile web browser.

### Direct Access (Recommended)
Simply navigate to the official web deployment:
👉 **[AetherHours Web App](https://jubinjo.github.io/Antigravity_hours_planner/)**

*(Since all calculations and user schedules remain strictly inside your browser's private local storage, using the online GitHub Pages deployment guarantees 100% of your data remains local, secure, and under your control, with zero data transmitted to any external server.)*

### Initial Configuration
1. Head over to the **Configuration & Paramètres** sidebar.
2. Set your **Cible Annuelle (Heures)** (e.g., 1868 hours) and customize preparation multipliers for course programs (APS, BA, PG).
3. If parameters are modified, the **Appliquer les modifications** button will start glowing. Click it to refresh metrics and charts instantly.
4. Click **Ajouter** on the Planned Entries panel to add your first course or task.

---

## Data Portability

All planning is saved in your browser's `localStorage` automatically.
- **Backing up your data**: Click **Exporter le Plan (JSON)** to download a full snapshot of your current planner configuration and entries.
- **Restoring your data**: Click **Importer le Plan (JSON)** to restore a previously saved snapshot. *Note: All custom JSON imports undergo strict client-side regex sanitization to neutralize Cross-Site Scripting (XSS) vectors.*

---

## Reporting Bugs & Requesting Features

If you encounter incorrect calculations, layout display issues, or wish to suggest new features, please submit a report directly via the public GitHub repository tracker.

### How to File a Bug Report

1. Navigate to the [GitHub Issues](https://github.com/jubinjo/Antigravity_hours_planner/issues) page.
2. Click the green **New Issue** button.
3. Use the following structured template to help resolve the issue quickly:

```markdown
### Bug Description
A clear and concise description of what the bug is.

### Steps to Reproduce
1. Go to '...'
2. Change parameter '...' to '...'
3. Click on '...'
4. See error

### Expected Behavior
A clear description of what you expected to happen.

### Environment Details
- OS: [e.g. Windows 11, macOS Sequoia]
- Browser: [e.g. Chrome 124, Safari 17]
- Application Language: [FR / EN]
- Application Theme: [Light / Dark / Institution]

### Exported Plan (Optional but Highly Recommended)
Please attach or paste the contents of your exported `.json` plan file (with any sensitive names removed) so developers can load your exact workload schedule and debug the calculations.
```

4. Click **Submit new issue**.
