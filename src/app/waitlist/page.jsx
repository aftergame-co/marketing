import { Container } from '@/components/Container';
import { WaitlistForm } from '@/components/WaitlistForm';

export const metadata = {
  title: 'Join the waitlist',
  alternates: {
    canonical: '/waitlist'
  },
};

export default function Waitlist() {
  return (
    <main className='py-52'>
      <Container>
        <div className="pt-6 pb-16 m-auto lg:w-3/5">
          <WaitlistForm label="Sign up for early access" />
        </div>
      </Container>
    </main>
  )
}
