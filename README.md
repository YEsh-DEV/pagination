# 👥 UserDirectory — Premium Pagination & Search Dashboard

[![React Version](https://img.shields.io/badge/React-19.2.8-61dafb?style=for-the-badge&logo=react)](https://react.dev)
[![Vite Version](https://img.shields.io/badge/Vite-8.2.0-646cff?style=for-the-badge&logo=vite)](https://vite.dev)
[![CSS3](https://img.shields.io/badge/CSS3-Vanilla-1572b6?style=for-the-badge&logo=css3)](https://w3.org)
[![License](https://img.shields.io/badge/License-Academic-brightgreen?style=for-the-badge)](https://choosealicense.com/)

**Student Roll Number:** AP24110011233  
**Project Name:** AP24110011233_pagination  
**Technology Stack:** Pure React 19, JavaScript (ES6+), Vite, Vanilla CSS System with Custom Variables, Lucide Icons.

---

## 🌟 Project Overview

**UserDirectory** is a modern, production-quality, responsive React Pagination Web Application designed to deliver seamless user navigation and search dashboards. The application fetches 100 random user profiles from the public Random User REST API, and supports client-side pagination, real-time multi-field search, configurable page sizing, theme customization, and beautiful modal drawers for detailed user data.

The project runs 100% on the frontend with custom CSS variables and utility classes, ensuring fast loading speeds and fully responsive visual interfaces across all form factors.

---

## ✨ Features & Visual Components

| Feature | Description | Interaction |
| :--- | :--- | :--- |
| 📊 **Dynamic Pagination** | Client-side pagination with configurable page sizes (10, 20, 50). | Smooth page transitions and auto-scroll to top |
| 🔍 **Multi-Field Filter** | Search matching first names, last names, emails, or nationalities instantly. | Clear search input trigger & real-time counts |
| 🎨 **Theme Switcher** | Toggle between Curated Light, Midnight Dark, and Cyberpunk presets. | Seamless variable color transformations |
| ✍️ **Font Selector** | Interactive typography switcher (Playfair Serif, Jakarta Sans, Monospace). | Dynamically adjusts directory typography |
| 🪞 **Glassmorphic Cards** | Responsive user cards featuring scale transitions, borders, and gradients. | Floating cursor transforms |
| 🗂️ **Profile Details Modal** | Dialog popups for contact information, DOBs, postcodes, and timezones. | Closeable via Escape key, button, or backdrop click |

---

## 🎹 Keyboard Shortcuts

*   `[ Escape ]` ── Close active Profile Modal panel from anywhere

---

## 📁 Architecture & File Structure

```
AP24110011233_pagination/
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── public/
│   └── favicon.svg
└── src/
    ├── App.jsx             # Root Layout & Page Slicing Controller
    ├── App.css             # Main Layout Styles
    ├── main.jsx            # Entrypoint
    ├── components/         # Modular Visual Components
    │   ├── Header/         # Dashboard Header & Settings Controls
    │   ├── SearchBar/      # Live search filter with Match Indicator
    │   ├── PageSizeSelect/ # Configurable rows-per-page dropdown
    │   ├── UserGrid/       # Grid layout for User Card subsets
    │   ├── UserCard/       # Individual user profile card
    │   ├── Pagination/     # Page number lists, Next & Previous buttons
    │   ├── UserModal/      # Overlay modal containing full contact details
    │   ├── Loading/        # Skeletons and spinning indicators
    │   ├── Error/          # Error state fallback with Retry trigger
    │   ├── EmptyState/     # Fallback display for search mismatches
    │   └── Footer/         # Dashboard copyright and status details
    ├── hooks/              # Custom React Hooks
    │   └── useFetch.js     # API fetching & manual refetch trigger
    ├── styles/             # Global CSS Variables & Layout Reset
    │   ├── global.css
    │   └── variables.css
    └── utils/              # Utility helper modules
        └── pagination.js   # Pure sorting, slicing, and filtering logic
```

---

## 🚀 Installation & Running

### Prerequisites

Ensure you have **Node.js** (v18.0.0 or higher) and **npm** installed.

### Steps

1.  **Navigate to the Directory**:
    ```bash
    cd AP24110011233_pagination
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

3.  **Start Development Server**:
    ```bash
    npm run dev
    ```

4.  **Production Compilation**:
    ```bash
    npm run build
    ```

5.  **Local Preview**:
    ```bash
    npm run preview
    ```

---

## 🎨 Theme & Styling System

Designed with a premium warm beige and light gold base palette:
- **Fonts**: **Playfair Display** (Classic/Editorials) & **Plus Jakarta Sans** (Functional UI elements).
- **Core themes**: Classic Warm, Midnight Dark, and Neon Cyberpunk.
