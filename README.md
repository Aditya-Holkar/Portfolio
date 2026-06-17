<div align="center">
  <br/>
  <img src="src/assets/hero.png" alt="Aditya Holkar" width="120" style="border-radius: 50%;"/>
  <br/>
  <h1>Aditya Holkar</h1>
  <p><b>Frontend Developer</b> · React · Design Systems · AI-Augmented Engineering</p>

  <p>
    <a href="https://github.com/Aditya-Holkar">
      <img src="https://img.shields.io/badge/GitHub-333?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
    </a>
    <a href="https://www.linkedin.com/in/aditya-holkar-life-is--unfair/">
      <img src="https://img.shields.io/badge/LinkedIn-0a66c2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/>
    </a>
    <a href="https://leetcode.com/u/aditya-holkar/">
      <img src="https://img.shields.io/badge/LeetCode-ffa116?style=for-the-badge&logo=leetcode&logoColor=black" alt="LeetCode"/>
    </a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React"/>
    <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite"/>
    <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS"/>
    <img src="https://img.shields.io/badge/GSAP-88CE02?style=flat-square&logo=greensock&logoColor=white" alt="GSAP"/>
    <img src="https://img.shields.io/badge/Zustand-443e38?style=flat-square&logo=react&logoColor=white" alt="Zustand"/>
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript"/>
  </p>

  <br/>
</div>

---

## Portfolio Website

A dark-themed single-page portfolio built with React 19, featuring smooth scroll animations, theme switching, and a fully responsive layout.

🔗 **Live:** [Portfolio](https://github.com/Aditya-Holkar/Portfolio)

---

## ✨ Features

| | |
|---|---|
| 🌙 **Dark/Light Theme** | Zustand-persisted toggle with CSS custom properties |
| 🎬 **Splash Screen** | Animated "AH" logo with 0→100 loading counter |
| 🧭 **Smooth Scroll** | Lenis-powered with GSAP ScrollTrigger section reveals |
| 📊 **Scroll Progress** | Fixed top bar showing page scroll position |
| 🧱 **Responsive Layout** | Desktop sidebar + mobile top bar with hamburger |
| 🕐 **Live Clock** | IST time display in the sidebar |
| 💬 **Portfolio Chat** | AI assistant answering questions about my work |
| 🎨 **Noise Texture** | Subtle monochrome background pattern |
| 🚀 **Route Loader** | Animated page transition overlay |

---

## 🧩 Sections

| Section | Description |
|---|---|
| **Hero** | Intro, profile image, email, Chess.com link |
| **Social** | GitHub, LinkedIn, LeetCode links |
| **Skills** | Tech stack with icons |
| **Experience** | Capslock Studio — Frontend Developer |
| **Education** | BSc Computer Science, Pune University |
| **Projects** | 12 projects with live links |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 19 + Vite 8 |
| **Routing** | react-router v7 (BrowserRouter) |
| **Styling** | Tailwind CSS v4 |
| **Animation** | GSAP v3 + ScrollTrigger + Lenis v1 |
| **State** | Zustand v5 |
| **Icons** | react-icons v5 |
| **Chat AI** | Groq / OpenRouter / DeepSeek (7 provider fallback) |

---

## 🖼️ Screenshots

### Dark Theme
<img src="src/assets/screenshots/home-dark.svg" alt="Dark Theme" width="700"/>

### Light Theme
<img src="src/assets/screenshots/home-light.svg" alt="Light Theme" width="700"/>

### Projects Page
<img src="src/assets/screenshots/projects.svg" alt="Projects" width="700"/>

### Splash Screen
<img src="src/assets/screenshots/splash.svg" alt="Splash" width="700"/>

---

## 📁 Project Structure

```
src/
├── Component/            # React components
│   ├── App.jsx           # Root layout
│   ├── Home.jsx          # Scroll-triggered section composer
│   ├── Navbar.jsx        # Sidebar + mobile nav
│   ├── First.jsx         # Hero
│   ├── Second.jsx        # Social links
│   ├── Third.jsx         # Skills
│   ├── Fourth.jsx        # Experience
│   ├── Fifth.jsx         # Projects list
│   ├── Sixth.jsx         # Education
│   ├── Splash.jsx        # Opening animation
│   ├── RouteLoader.jsx   # Route transition
│   ├── Projects.jsx      # Full projects page
│   ├── Resume.jsx        # Full resume page
│   └── Button.jsx        # Reusable styled button
├── components/           # Feature components
│   └── PortfolioChat.jsx # AI chat assistant
├── hooks/                # Custom hooks
│   └── usePortfolioChat.js
├── lib/                  # API client
│   └── api.js
├── Data/                 # Project data
│   └── ProjectsData.js
├── Zu-Store/             # Zustand state
│   └── Store.js
└── index.css             # Tailwind + theme CSS vars
```

---

## 📦 Getting Started

```bash
# Clone
git clone https://github.com/Aditya-Holkar/Portfolio.git
cd Portfolio

# Install
npm install

# Start dev server
npm run dev

# Build
npm run build

# Preview
npm run preview
```

---

## 📬 Contact

- **Email:** adiholkar555@gmail.com
- **GitHub:** [github.com/Aditya-Holkar](https://github.com/Aditya-Holkar)
- **LinkedIn:** [linkedin.com/in/aditya-holkar](https://www.linkedin.com/in/aditya-holkar-life-is--unfair/)
- **LeetCode:** [leetcode.com/u/aditya-holkar](https://leetcode.com/u/aditya-holkar/)

---

<div align="center">
  <sub>Built with React · Vite · Tailwind CSS · GSAP</sub>
</div>
