
# Kunal Rayate — Portfolio (Angular)

A personal developer portfolio built with Angular, HTML, CSS, and TypeScript. No backend is required to run the static portfolio.

## Run Locally

Install Node.js 20.19+ or 22+ from https://nodejs.org.

Open a terminal in the project folder and run:

```bash
npm install
npm start
```

Open http://localhost:4200 in your browser.

## Customization

- **Personal details, projects, skills, and links:** `src/app/data.ts`
- **Profile photo:** Place your image in `public/` and configure the `photo` property in `src/app/data.ts`.
- **Resume:** Replace `public/resume.pdf` with your latest resume.
- **Project demo links:** Add a `demo` URL to a project in `src/app/data.ts`.
- **Colors and styling:** Edit `src/styles.css`.

## Build

Run:

```bash
npm run build
```

The production build is usually generated in:

`dist/portfolio/browser/`

Check `angular.json` if your output directory differs.

## Deployment

### GitHub Pages

This project can be deployed to GitHub Pages. Configure the Angular base URL and a GitHub Actions workflow to publish the production build.

Repository: https://github.com/kunalrayate/portfolio

### Netlify

Build the project and deploy the generated output directory using Netlify.

Website: https://www.netlify.com/

### Vercel

Connect the GitHub repository and configure the Angular build command and output directory.

Website: https://vercel.com/

## Contact Form

The static portfolio can open the visitor's email application. To send messages directly, integrate a service such as Formspree or EmailJS.

## Contact

- GitHub: https://github.com/kunalrayate
- LinkedIn: YOUR_LINKEDIN_URL
- Email: YOUR_EMAIL
