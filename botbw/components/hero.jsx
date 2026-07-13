import Image from 'next/image';

import HeroImg from '@/public/images/HeroImg.png';

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
            <div className='hero-content mt-10 items-center'>
                <h1 className='max-w-sm text-center text-4xl md:max-w-none md:text-[54px] lg:text-7xl 2xl:text-8xl'>
                    <span className='font-pressStart text-base-content text-shadow-base-200 leading-relaxed text-shadow-[5px_6px_0_#000]'>
                        Battle of the Benchwarmers
                    </span>
                </h1>
            </div>
        </div>
    );
}
