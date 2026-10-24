# New Reality Interactive

The website for **New Reality Interactive, LLC**, a small web development and tech consulting business. The site presents the company's services, process, and pricing, and includes a contact form for new project inquiries.

Live site: [newrealityinteractive.com](https://newrealityinteractive.com)

## Project structure

```
.
├── index.html        # Main single-page site (hero, services, about, process, pricing, contact)
├── css/
│   └── styles.css    # All site styles and design tokens (CSS variables in :root)
├── js/
│   └── main.js       # Mobile navigation, contact modal, form validation, scroll reveal
├── CNAME             # Custom domain for hosting
└── .gitattributes    # Normalizes text line endings to LF
```

This is a static site with no build step, package manager, or framework. Everything is plain HTML, CSS, and vanilla JavaScript.

## Running locally

Open `index.html` in a browser, or serve the folder with any static file server:

```sh
npx serve .
# or
python3 -m http.server 8000
```

## Configuration

- **Availability badge:** set `AVAILABLE` at the top of `js/main.js` to `true` or `false`. This switches the footer text between "Available for New Projects" and "Fully Booked Right Now".
- **Contact form:** submissions post to a Formspree endpoint set in the `<form action>` attribute in `index.html`. Replace that URL if the form is moved to another account.
- **Contact email:** the fallback email shown on form errors is `contact@newrealityinteractive.com` in `js/main.js`.
- **Fonts:** Cormorant Garamond and Jost are loaded from Google Fonts in `index.html`.

## Deployment

The `CNAME` file sets the custom domain to `newrealityinteractive.com`, which suggests GitHub Pages hosting from this repository. The hosting setup itself isn't defined in the repo, so confirm it in the repository's Pages settings.

## Contributing

Work happens on feature branches. Do not commit directly to `main`.
