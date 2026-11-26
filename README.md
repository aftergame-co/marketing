# Aftergame Marketing site

Uses [Tailwind UI](https://tailwindui.com), [Tailwind CSS](https://tailwindcss.com) and [Next.js](https://nextjs.org).

## Getting started

Requires Node 24 (see `.nvmrc`). Run `nvm use`, then install the dependencies:

```bash
yarn
```

Next, run the development server:

```bash
yarn start:dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Building

`yarn build` creates a static site in `out/` (HTML plus build-time optimized images) that any static host can serve. Preview it with `npx serve out`.

## Checks

The site is written in TypeScript (strict, TypeScript 7), linted with [Oxlint](https://oxc.rs/docs/guide/usage/linter) and formatted with [Oxfmt](https://oxc.rs/docs/guide/usage/formatter):

```bash
yarn typecheck      # tsc (next build also type-checks)
yarn lint           # oxlint
yarn format         # oxfmt; `yarn format:check` only reports
```

For editor support, install the Oxc VS Code extension (`oxc.oxc-vscode`).

## Customizing

You can start editing this template by modifying the files in the `/src` folder. The site will auto-update as you edit these files.

## License

This site template is a commercial product and is licensed under the [Tailwind UI license](https://tailwindui.com/license).

## Learn more

To learn more about the technologies used in this site template, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Headless UI](https://headlessui.dev) - the official Headless UI documentation
