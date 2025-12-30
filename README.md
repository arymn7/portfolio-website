# Portfolio Website - Aryaman Sharma

A minimal, dark-themed portfolio built with React.

## Features

- Clean, two-column hero with profile image
- Projects grid with tech chips and image previews
- Resume tab with in-page PDF viewer plus download/external link
- Education, About, and Contact sections with structured content
- Smooth section reveals and active nav highlighting

## Tech Stack

- React 18
- JavaScript (ES6+)
- HTML5 / CSS3

## Getting Started

### Prerequisites

- Node.js 14+
- npm (or yarn)

### Install

```bash
npm install
```

### Run

```bash
npm start
```

Open `http://localhost:3000` in your browser.

### Build

```bash
npm run build
```

## Customization

### Profile image

Replace `public/pfp.jpg` with your own photo.

### Projects

Edit the `projects` array in `src/components/Projects.jsx` to change titles, descriptions, images, tech chips, and GitHub links.

### Resume

Replace `public/Resume_AS.pdf` with your own resume file. The Resume tab embeds this file and provides download/external links.

### Contact links

Update the URLs in `src/components/Contact.jsx`.

### Colors and typography

Theme variables and fonts live in `src/index.css`.

## Project Structure

```
portfolio-website/
  public/
    index.html
    Resume_AS.pdf
    pfp.jpg
  src/
    components/
      About.jsx
      Contact.jsx
      Education.jsx
      Home.jsx
      Navbar.jsx
      Projects.jsx
      *.css
    App.jsx
    App.css
    index.js
    index.css
  package.json
  README.md
```

## License

Personal use only.
