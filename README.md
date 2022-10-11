# Hugo Template Renan Sigolo

A project template for [Hugo](https://gohugo.io/) static site generator.

## Built With

- [Hugo](https://gohugo.io/) - The static site generator
- [Stylelint](https://stylelint.io/) - A mighty, modern linter that helps you avoid errors and enforce conventions in your styles
- [ESLint](https://eslint.org/) - The pluggable linting utility for JavaScript and JSX
- [Prettier](https://prettier.io/) - An opinionated code formatter
- [Commitlint](https://commitlint.js.org/#/) - Lint commit messages

## Dependencies

- [modern-normalize](https://github.com/sindresorhus/modern-normalize.git) - Normalize browsers' default style

## Getting Started

1. Search and Replace the following values:

   - `YOUR_PROJECT_ID`
   - `YOUR_PROJECT_NAME`
   - `YOUR_PROJECT_DESCRIPTION`
   - `YOUR_PROJECT_THEME_COLOR`
   - `YOUR_PROJECT_DOMAIN`
   - `YOUR_DEFAULT_LANGUAGE_CODE`
   - `YOUR_FIREBASE_PROJECT_ID`
   - `G-XXXXXXXXXX`

# Generate favicons

1. Prepare a square SVG (1024x1024 with transparent background)

1. Create an ICO file (Part 1)

   ```bash
   inkscape ./icon.svg --export-width=64 --export-filename="./icon-64.png"
   inkscape ./icon.svg --export-width=32 --export-filename="./icon-32.png"
   ```

1. Compress the .png icons with ImageOptim

1. Create an ICO file (Part 2)

   ```bash
   convert ./icon-64.png ./icon-32.png ./favicon.ico
   rm ./icon-64.png ./icon-32.png
   ```

1. Create Optimized PNG and SVG images

   ```bash
   inkscape ./icon.svg --export-width=512 --export-filename="./icon-512.png"
   inkscape ./icon.svg --export-width=192 --export-filename="./icon-192.png"
   inkscape ./icon.svg --export-width=180 --export-filename="./apple-touch-icon.png"
   npx svgo --multipass ./icon.svg
   npx @squoosh/cli --quant 64 --oxipng auto ./*.png
   ```

1. Rename the icon file

   ```bash
   mv icon.svg favicon.svg
   ```

1. Add the icons to the manifest file

   ```json
   { "src": "icon-192.png", "sizes": "192x192", "type": "image/png" },
   { "src": "icon-512.png", "sizes": "512x512", "type": "image/png" },
   { "src": "icon-maskable-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable" },
   { "src": "favicon.svg", "sizes": "any", "type": "image/svg+xml", "purpose": "any" }
   ```

1. Add the icons to HTML

   ```html
   <link rel="icon" href="favicon.ico" sizes="any" />
   <link rel="icon" href="favicon.svg" type="image/svg+xml" />
   <link rel="apple-touch-icon" href="apple-touch-icon.png" />
   <link rel="manifest" href="site.webmanifest" />
   ```

1. Generate and add the maskable icon

# TODO

- [ ] Add a script to generate the lincense file
- [ ] Add a script to ask the values and replace the string placeholders
