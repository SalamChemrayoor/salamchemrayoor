# Abdul Salam — Portfolio

A responsive, single-page portfolio for Abdul Salam, built with plain HTML, CSS and JavaScript. It has no runtime framework or external package dependencies. The supplied resume and a circular crop of the supplied profile screenshot are included in `assets/`.

## Run locally

Requires Node.js 18 or newer. From this folder, start the local site with:

```bash
npm run dev
```

Open <http://127.0.0.1:4173>. Press `Ctrl+C` in the terminal to stop the local server. No package installation is needed.

## Build and preview

Create the production site in `dist/`:

```bash
npm run build
```

Serve the production build locally:

```bash
npm run preview
```

Open <http://127.0.0.1:4173>. The preview command expects `npm run build` to have completed first.

## GitHub Pages deployment

The included `.github/workflows/deploy.yml` builds `dist/` and deploys it to GitHub Pages after a push to `main`. To enable it:

1. Create a GitHub repository named `abdul-salam-portfolio`.
2. Before pushing, replace `YOUR_GITHUB_USERNAME` in `index.html`, `robots.txt`, and `sitemap.xml` with your GitHub username. If you choose another repository name or a custom domain, update the URLs to match.
3. Push the project to the repository's `main` branch using the commands below.
4. In the repository, open **Settings → Pages** and choose **GitHub Actions** as the publishing source.
5. After the workflow succeeds, the portfolio will be available at `https://YOUR_GITHUB_USERNAME.github.io/abdul-salam-portfolio/`.

The workflow follows GitHub's custom Pages deployment pattern: build the static files, upload `dist/`, and deploy that artifact. See [GitHub's Pages workflow guide](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

### Create the repository and push

Run these commands from this project folder after installing and signing in to the [GitHub CLI](https://cli.github.com/). The `gh repo create` line creates a **public** GitHub repository and connects it as `origin`; the final line pushes the committed project. The push will trigger the Pages workflow once Pages is set to **GitHub Actions**.

```bash
git init -b main
git add .
git commit -m "Create Abdul Salam portfolio"
gh repo create abdul-salam-portfolio --public --source=. --remote=origin
git push -u origin main
```

The public repository will make the supplied resume, portrait, phone number and email visible to anyone. Review those details before running the command. Nothing has been published from this project.

## Site contents

- Responsive portfolio with light and dark themes and a keyboard-accessible mobile navigation.
- Resume download, email link, phone link and WhatsApp chat link.
- Experience, education, skills and marketplace sections based on the supplied resume.
- Three portfolio directions are explicitly identified as concepts, not completed work.
- SEO description, Open Graph tags, favicon, `robots.txt` and `sitemap.xml`.

## Update notes

- Replace the GitHub URL placeholder in `index.html`, `robots.txt` and `sitemap.xml` when the final username and repository name are known.
- To update the resume, replace `assets/abdul-salam-resume.pdf` and keep the filename, or update the download link in `index.html`.
- To update the profile image, replace `assets/abdul-salam-portrait.png` and keep the filename, or update the image reference in `index.html`.
- Edit the page content in `index.html` and styles in `styles.css`.
