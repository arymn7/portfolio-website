# Portfolio Website - Aryaman Sharma

A modern, sleek portfolio website with a dark theme and purple accents, built with React.

## Features

- 🎨 Dark theme with purple neon accents
- 📱 Fully responsive design
- ⚡ Smooth animations and transitions
- 🔗 Navigation with active section highlighting
- 🎯 Modern, tech-focused UI/UX

## Technologies Used

- React 18
- HTML5
- CSS3 (with CSS Variables)
- JavaScript (ES6+)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Customization

### Update Profile Image

Replace the placeholder image in `src/components/Home.jsx`:
```jsx
<img
  src="your-image-url-here"
  alt="Aryaman Sharma"
  className="profile-image"
/>
```

### Update Contact Links

Edit the links in `src/components/Contact.jsx`:
- Email: Update the `mailto:` link
- GitHub: Update the GitHub URL
- LinkedIn: Update the LinkedIn URL

### Update Projects

Modify the `projects` array in `src/components/Projects.jsx` to showcase your actual projects.

### Color Scheme

The color palette is defined in `src/index.css` using CSS variables. You can customize:
- `--bg-black`: Main background color
- `--purple-primary`: Primary purple accent
- `--purple-hover`: Hover state purple
- And more...

## Project Structure

```
portfolio-website/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── *.css (component styles)
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## License

This project is open source and available for personal use.

