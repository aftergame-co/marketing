import { Container } from '@/components/Container';
import { Button } from '@/components/Button';

export const metadata = {
  title: 'Page not found',
};

export default function NotFound() {
  return (
    <main className='py-40 lg:py-60'>
      <Container className='text-center'>
        <h1 className='text-5xl lg:text-6xl xl:text-8xl tracking-tight xl:leading-snug lg:leading-snug leading-snug font-semibold'>
          <span className='text-gg-blue'>4</span>0<span className='text-gg-red'>4</span>
        </h1>
        <p className="mt-10 text-xl lg:text-2xl xl:text-3xl text-gray-900">
          Now, where did that page go?
        </p>
        <Button href="/" className="mt-10 bg-gg-blue hover:bg-gg-red active:bg-gg-red">
          Maybe it went here...
        </Button>
      </Container>
    </main>
  )
}
