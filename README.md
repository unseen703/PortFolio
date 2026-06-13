# Dipak Kanzariya — Portfolio

A modern, animated portfolio built with **React, Vite, Tailwind CSS, Framer Motion, and Three.js**, showcasing my work in **deep learning, data science, and full-stack engineering**.

🔗 **Live:** https://dipak2dev.netlify.app

---

## Featured Projects

| Project | What it is | Stack | Repo |
|---|---|---|---|
| **Neural Network from Scratch** | Configurable MLP in pure NumPy for MNIST / Fashion-MNIST — backprop, 6 optimizers, 100+ config W&B sweep (~98% acc) | NumPy | [da6401_assignment_1](https://github.com/unseen703/da6401_assignment_1) |
| **Multi-Task Visual Perception** | VGG11 shared encoder with classification, localization, and U-Net segmentation heads on Oxford-IIIT Pet | PyTorch | [da6401_assignment_2](https://github.com/unseen703/da6401_assignment_2) |
| **Transformer for Translation** | "Attention Is All You Need" implemented from scratch for DE→EN on Multi30k, with Noam scheduling, label smoothing & 5 ablations | PyTorch | [da6401_assignment_3](https://github.com/unseen703/da6401_assignment_3) |
| **Planty** | Photo-sharing social app with REST APIs | React · Node · MongoDB | [Planty](https://github.com/unseen703/Planty) |
| **Expense Easy** | Expense tracker with voice input & charts | React · Supabase | [BudgetTracker](https://github.com/unseen703/BudgetTracker) |
| **MoviesMania** | Trending movie/TV discovery platform | React · Material-UI | [MoviesHUB](https://github.com/unseen703/MoviesHUB) |

---

## Getting Started

### 1. Clone
```bash
git clone https://github.com/unseen703/PortFolio.git
cd PortFolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run locally
```bash
npm run dev
```

### 4. Build for production
```bash
npm run build
```

---

## Project Structure

- **`src/components`** — section components (Hero, About, Experience, Works, Tech, Contact).
- **`src/constants/index.js`** — all editable content: services, technologies, experiences, and projects.
- **`src/assets`** — images, tech icons, and project covers.
- **`src/assets/index.js`** — central asset imports.

### Customizing content

Most updates only require editing **`src/constants/index.js`**:
- Add a project to the `projects` array (with a cover image imported in `src/assets/index.js`).
- Add a role to `experiences`.
- Add a tool to `technologies`.

### Contact form

`src/components/Contact.jsx` uses EmailJS. Set these in a `.env` file:
```
VITE_APP_EMAILJS_SERVICE_ID=...
VITE_APP_EMAILJS_TEMPLATE_ID=...
VITE_APP_EMAILJS_PUBLIC_KEY=...
```

---

Built and maintained by **Dipak Kanzariya**.
