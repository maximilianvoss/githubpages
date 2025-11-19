# React App - GitHub Pages

A modern React application built with Vite, ready to be deployed to GitHub Pages.

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. Clone this repository:
```bash
git clone <your-repo-url>
cd github-pages
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## 📦 Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 🌐 Deploying to GitHub Pages

### First-time Setup

1. **Update `vite.config.js`**: Change the `base` property to match your repository name:
```javascript
base: '/your-repo-name/',
```

2. **Initialize Git** (if not already done):
```bash
git init
git add .
git commit -m "Initial commit"
```

3. **Create a GitHub repository** and push your code:
```bash
git remote add origin https://github.com/your-username/your-repo-name.git
git branch -M main
git push -u origin main
```

### Deploy

Run the deploy command:

```bash
npm run deploy
```

This will:
- Build your app
- Create/update the `gh-pages` branch
- Push the built files to GitHub Pages

### Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** > **Pages**
3. Under "Source", select the `gh-pages` branch
4. Click **Save**

Your site will be available at: `https://your-username.github.io/your-repo-name/`

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **gh-pages** - Deployment tool

## 📝 Project Structure

```
github-pages/
├── src/
│   ├── App.jsx          # Main App component
│   ├── App.css          # App styles
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## 🎨 Customization

- Edit `src/App.jsx` to modify the main component
- Update styles in `src/App.css` and `src/index.css`
- Modify `index.html` to change the page title or meta tags
- Add new components in the `src/` directory

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

## 📄 License

MIT License - feel free to use this project as you wish!

