# Portfolio Website - Aryaman

A minimal, dark-themed, responsive tech portfolio built with React.

## Check it out

## Features

- Clean, two-column hero with profile image
- Projects grid with tech chips and image previews
- Professional experience timeline with measurable impact
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

Replace `src/assets/pfp.jpg` with your own photo. The image is imported by
`src/components/Home.jsx`, so keep the filename unchanged or update the import.

### Projects

Edit the `projects` array in `src/components/Projects.jsx` to change titles, descriptions, images, tech chips, and GitHub links.

### Resume

Replace `src/assets/Resume_Aryaman_Sharma.pdf` with your own resume file. The file is
imported by `src/components/Projects.jsx`; keep the filename unchanged or update
the import. The Resume tab embeds the PDF and provides download/external links.

### Contact links

Update the URLs in `src/components/Contact.jsx`.

### Colors and typography

Theme variables and fonts live in `src/index.css`.

## Project Structure

```
portfolio-website/
  public/
    index.html
  src/
    assets/
      pfp.jpg
      Resume_Aryaman_Sharma.pdf
      project-*.*
      tech/
    components/
      About.jsx
      Contact.jsx
      Education.jsx
      Experience.jsx
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
