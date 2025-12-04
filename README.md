# Personal Portfolio

A modern, responsive personal portfolio website built with React and Vite.

## Features

- 🎨 Modern and beautiful UI design
- 📱 Fully responsive layout
- ⚡ Fast performance with Vite
- 🎯 Smooth scrolling navigation
- 💼 Project showcase section
- 📧 Contact form
- 🎭 Smooth animations and transitions

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

1. **Personal Information**: Update the following files with your information:
   - `src/components/Hero.jsx` - Name, title, and description
   - `src/components/About.jsx` - About section content
   - `src/components/Contact.jsx` - Contact information
   - `src/components/Projects.jsx` - Your projects
   - `src/components/Skills.jsx` - Your skills

2. **Colors**: Modify CSS variables in `src/index.css`:
   ```css
   --primary-color: #6366f1;
   --secondary-color: #8b5cf6;
   ```

3. **Social Links**: Update social media links in:
   - `src/components/Hero.jsx`
   - `src/components/Footer.jsx`

## Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Technologies Used

- React 18
- Vite
- React Icons
- CSS3 (Custom Properties, Flexbox, Grid)

## License

MIT License - feel free to use this project for your own portfolio!

