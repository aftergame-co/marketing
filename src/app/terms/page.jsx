import { Container } from '@/components/Container';

export const metadata = {
  title: 'Terms of Service',
};

export default function Terms() {
  return (
    <main className='pt-20'>
        <section
          id="terms-of-service"
          aria-label="Terms of Service"
          className="py-10 sm:py-16"
        >
          <Container>
            <div className='md:mx-16 xl:mx-24'>
              <h1 className="mb-6 text-4xl font-medium">Terms of Service</h1>
              {/*
              ------------ ADD IN THE BELOW LINE TO THE PRIVACY POLICY WHEN CREATING THE TERMS
              
              
              in our Goodgame Data Terms of Service (available at <a className="text-gg-blue font-medium hover:underline" href="https://goodgamedata.com/terms">https://goodgamedata.com/terms</a>)
              
              
              ---------------
              
              */}





            </div>
          </Container>
        </section>
      </main>
  )
}
