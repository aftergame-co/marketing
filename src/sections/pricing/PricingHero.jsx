import Image from 'next/image';

export function PricingHero() {
  return (
    <div className='bg-gg-blue pt-16'>
      <Image
        src='/images/premium.png'
        alt='Premium pricing'
        width={600}
        height={600}
        className='m-auto'
      />
    </div>
  )
}
