# نقلتكم - Naqltkom Moving Services

React single-page application for Naqltkom moving services in Kuwait.

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to GitHub Pages

### Option 1: Using npm script (Recommended)

1. **If your repo is NOT named `username.github.io`** (regular repo):

   - Update `vite.config.js` and set the base path to your repo name:

   ```js
   const base = "/your-repo-name/";
   ```

   - Or set it via environment variable:

   ```bash
   VITE_BASE_PATH=/your-repo-name/ npm run build
   ```

2. **If your repo IS named `username.github.io`** (root domain):

   - Keep the base path as `/` in `vite.config.js`

3. Deploy:

   ```bash
   npm run deploy
   ```

4. Go to your repository Settings → Pages and ensure the source is set to `gh-pages` branch

### Option 2: Using GitHub Actions (Automatic)

The included GitHub Actions workflow will automatically deploy on every push to `main` branch.

1. Make sure your repository name is correct in the workflow file (`.github/workflows/deploy.yml`)
2. Push to `main` branch
3. GitHub Actions will automatically build and deploy

**Note:** Make sure to update the `VITE_BASE_PATH` in the workflow file if your repo is not at the root domain.

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   └── sections/
│       ├── HeroSection.jsx
│       ├── AboutSection.jsx
│       ├── WhyChooseUsSection.jsx
│       ├── ServicesSection.jsx
│       └── ContactSection.jsx
└── App.jsx
```

## Technologies

- React 19
- Vite
- Tailwind CSS v4
- React Icons
