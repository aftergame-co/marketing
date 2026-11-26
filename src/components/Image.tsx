import ExportedImage, { type ExportedImageProps } from 'next-image-export-optimizer'

// Drop-in for `next/image` that works with `output: 'export'`: `yarn build` resizes
// images and converts them to WebP at build time (next-image-export-optimizer).
// `placeholder="empty"` skips the library's default blurred placeholders.
export default function Image(props: ExportedImageProps) {
  return <ExportedImage placeholder="empty" {...props} />
}
