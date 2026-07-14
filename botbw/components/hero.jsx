import Image from 'next/image';

import HeroImg from '@/public/images/HeroImg2.png';

export default function Hero() {
    return (
        <div className='hero'>
            <Image
                src={HeroImg}
                alt='Corgi sitting outside'
                fill
                priority
                sizes='100vw'
                className='3xl:mx-auto max-w-480 object-cover'
            />
            <div className='hero-content px-0 md:mt-10'>
                <h1 className='xs:text-4xl text-center text-3xl sm:text-5xl md:max-w-none md:text-[54px] lg:text-7xl 2xl:text-8xl'>
                    <span className='font-pressStart text-base-content leading-12 [-webkit-text-stroke:3px_#0C1425] text-shadow-[4px_5px_0_#0a1120,7px_8px_0_#e86100] md:leading-20'>
                        Battle of the Benchwarmers
                    </span>
                </h1>
            </div>
        </div>
    );
}
