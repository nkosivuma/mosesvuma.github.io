# mosesvuma.com

Personal brand website for Moses Vuma.

## Stack

- Next.js
- React
- Static export (`output: "export"`)
- Plain CSS
- GitHub Pages deployment via GitHub Actions
- Custom domain: `mosesvuma.com`

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The production site is generated in `out/`.

## GitHub Pages

Create a public repository named `<your-github-username>.github.io` if this is intended to be the account's primary GitHub Pages user site. GitHub Pages can also publish from another repository using a Pages workflow.

Enable **Settings → Pages → Build and deployment → GitHub Actions**.

The included workflow builds the Next.js static export and deploys it.

## Domain

The repository includes `public/CNAME` for `mosesvuma.com`.

At your domain registrar/DNS provider, configure the GitHub Pages records recommended by GitHub. Also verify the domain in your GitHub profile's Pages settings.

Before publishing, replace the placeholder email and LinkedIn URL in `app/contact/page.js`.

## Adding resources

Create a new route under:

`app/resources/<slug>/page.js`

Then add the article to `app/resources/page.js` and, if desired, the homepage resource cards.
