import type { Metadata } from 'next'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Page not found',
}

export default function NotFound() {
  return (
    <main className="py-40 lg:py-60">
      <Container className="text-center">
        <h1 className="text-5xl leading-snug font-semibold tracking-tight lg:text-6xl lg:leading-snug xl:text-8xl xl:leading-snug">
          <span className="text-gg-blue">4</span>0<span className="text-gg-red">4</span>
        </h1>
        <p className="mt-10 text-xl text-gray-900 lg:text-2xl xl:text-3xl">Now, where did that page go?</p>
        <Button href="/" className="mt-10 bg-gg-blue hover:bg-gg-red active:bg-gg-red">
          Maybe it went here...
        </Button>
      </Container>
    </main>
  )
}
