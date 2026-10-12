# 🚀 Kunal Rayate — Personal Developer Portfolio

> A modern, responsive developer portfolio built with **Angular, TypeScript, HTML, and CSS**, featuring a dark navy and cyan theme. Showcases my technical skills, full-stack projects, education, career goals, resume, and contact information.


---

## 📖 Overview

I built this personal portfolio to present my technical skills, development projects, education, and career aspirations in one place. It serves as my professional online presence and provides recruiters, developers, and potential collaborators with an overview of my capabilities as a Java Full Stack Developer.

The portfolio uses a clean, dark navy interface with cyan accents, responsive layouts, and dedicated sections for my introduction, skills, projects, education, resume, career goals, and contact information.

My primary development focus is building full-stack web applications using Java, Spring Boot, Hibernate/JPA, REST APIs, Angular, and MySQL. Through my projects, I aim to strengthen my understanding of backend architecture, database design, API development, frontend integration, and software engineering best practices.

## ✨ Key Features

1. **Personal Introduction:** A dedicated hero section introducing me as a Java Full Stack Developer, with a profile picture and quick links to my projects and resume.
2. **About Me:** Highlights my developer profile, technical interests, and approach to building practical web applications.
3. **Technical Skills:** Presents my backend, frontend, database, and development tools in an organized format.
4. **Featured Projects:** Showcases three selected projects, including descriptions, technologies, key features, and links to source code or live demos where available.
5. **Resume Download:** Provides direct access to my resume in PDF format.
6. **Education:** Displays my academic qualifications and relevant education details.
7. **Career Goals:** Outlines my short-term professional objectives and long-term ambitions.
8. **Responsive Design:** Adapts the layout for desktop, tablet, and mobile devices.
9. **Theme Switching:** Supports the available light and dark themes.
10. **Contact Section:** Provides links to GitHub, LinkedIn, and email for professional communication.
11. **Static Deployment:** Can be hosted using GitHub Pages or another static hosting provider without requiring a backend for the portfolio itself.

## 🧑‍💻 About Me

Hello! I'm **Kunal Rayate**, an aspiring Java Full Stack Developer interested in building reliable, maintainable, and user-friendly web applications.

My technical stack includes Java, Spring Boot, Hibernate/JPA, REST APIs, Maven, Angular, HTML, CSS, and MySQL.

I enjoy solving programming problems, designing application architecture, working with relational databases, and connecting frontend interfaces with backend services.

I am focused on strengthening my software development fundamentals, building meaningful projects, and preparing for opportunities where I can contribute to real-world applications while continuing to learn.



## 🏗️ Project Structure

The portfolio's main files are organized as follows:

```text
portfolio/
├── public/
│   ├── myphoto.jpeg
│   ├── resume.pdf
│   └── favicon.svg
├── src/
│   ├── app/
│   │   ├── app.html
│   │   ├── app.ts
│   │   └── data.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── angular.json
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── .gitignore
└── README.md
```

### Important Files

- `src/app/data.ts`: Portfolio content, project details, skills, and personal links.
- `src/app/app.html`: Main portfolio template.
- `src/app/app.ts`: Application logic and component behavior.
- `src/styles.css`: Global styling, responsive layout, and theme variables.
- `public/myphoto.jpeg`: Profile picture.
- `public/resume.pdf`: Downloadable resume.
- `angular.json`: Angular build and project configuration.
- `package.json`: Dependencies and development scripts.

## ⚙️ Installation and Setup

### Prerequisites

Install the following tools before running the project:

- Node.js version compatible with the project's Angular version.
- npm, included with Node.js.
- Angular CLI, if required by the project's scripts.
- Git.

### 1. Clone the repository

```bash
git clone https://github.com/kunalrayate/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

If the `start` script is unavailable, use:

```bash
npx ng serve
```

### 4. Open the portfolio

Visit:

http://localhost:4200

### 5. Build for production

```bash
npm run build
```

Check `angular.json` for the actual production output directory. Newer Angular projects commonly place browser files in `dist/portfolio/browser/`.

## 🌐 Deployment

The portfolio is a static Angular application and does not require a Spring Boot backend or MySQL database to display its content.

### GitHub Pages

Repository: [kunalrayate/portfolio](https://github.com/kunalrayate/portfolio)

Recommended deployment steps:

1. Build Angular with the correct base URL for the repository.
2. Configure a GitHub Actions workflow to build and publish the application.
3. Enable GitHub Pages using GitHub Actions as the publishing source.
4. Verify the deployed page, profile image, resume, and navigation links.

For a repository named `portfolio`, the base URL is generally `/portfolio/`.

Documentation: https://docs.github.com/en/pages

### Other Hosting Options

- **Netlify:** https://www.netlify.com/
- **Vercel:** https://vercel.com/

Connect the GitHub repository or upload the generated static build directory according to the hosting provider's instructions.

## 👨‍💻 Author

**Kunal Rayate**  
Java Full Stack Developer

- **GitHub:** [github.com/kunalrayate](https://github.com/kunalrayate)
- **Email:** [kunalrayate126@gmail.com](mailto:kunalrayate126@gmail.com)
- **LinkedIn:** https://www.linkedin.com/in/kunal-rayate/

---

⭐ If you find my projects interesting, feel free to explore the repositories or connect with me.

*Built with Angular, TypeScript, HTML, and CSS.*
