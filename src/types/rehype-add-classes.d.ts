declare module 'rehype-add-classes' {
  // Adds classes to elements by CSS selector, e.g. { h1: 'text-3xl', 'ul > li': 'ml-6' }
  export default function rehypeAddClasses(classes: Record<string, string>): (tree: object) => void
}
