# Kunal Rayate, Portfolio (Angular)

Static portfolio built with Angular. No backend needed.

## Run locally (Windows CMD)
Install Node.js 20.19+ or 22+ from https://nodejs.org, then in this folder:
```
npm install
npm start
```
Opens at http://localhost:4200

## Customise
- All text, projects, skills, links: `src/app/data.ts`
- Photo: copy it to `public/` (e.g. `me.jpg`) and set `photo: 'me.jpg'` in data.ts
- Resume: replace `public/resume.pdf`
- Live demo links: add `demo: 'https://...'` to a project in data.ts (a button appears)
- Colours: variables at the top of `src/styles.css`

## Build
```
npm run build
```
Upload the contents of `dist/portfolio/browser`.

## Deploy
- **Netlify:** drag `dist/portfolio/browser` onto app.netlify.com/drop
- **GitHub Pages:** create a repo named `kunalrayate.github.io`, then
  `npx angular-cli-ghpages --dir=dist/portfolio/browser --repo=https://github.com/kunalrayate/kunalrayate.github.io.git --branch=main`
- **Vercel:** run `vercel`, output directory `dist/portfolio/browser`

## Contact form
No server, so it opens the visitor's email app. For silent sending use Formspree or EmailJS.
