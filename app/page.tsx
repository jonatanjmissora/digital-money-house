import Image from 'next/image';
import hero from './assets/hero.jpg';
import { HeroCard } from './components/landing/HeroCard';
import { CARDTEXT } from './utils/landing.constants';

export default async function Home() {
  return (
    
    <main className="flex-1 overflow-hidden relative">
      <div className="absolute inset-0 lg:bottom-0 bottom-80">
        <Image
          className="object-cover lg:object-left-top tablet"
          src={hero}
          alt="imagen del hero"
          quality={100}
          fill
          //sizes="100vw"
          priority
          placeholder="blur"
        ></Image>
      </div>

      <div className="lg:h-32 h-[40%] bg-primary absolute left-0 right-0 bottom-0 rounded-t-[2.5rem]"></div>

      <div className="absolute lg:top-16 top-24 lg:left-16 left-8 lg:w-[400px] w-[460px]">
        <p className="text-white text-5xl lg:text-4xl leading-none">
          De ahora en adelante, hacés más con tu dinero
        </p>
        <p className="text-primary lg:text-2xl text-3xl leading-none pt-5">
          Tu nueva <span className="font-[700] lg:text-xl text-4xl">billetera virtual</span>
        </p>
      </div>

      <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-3 gap-6 absolute lg:bottom-6 bottom-12 left-0 w-screen">
        <HeroCard
          title={CARDTEXT.card1.title}
          content={CARDTEXT.card1.content}
        />
        <HeroCard
          title={CARDTEXT.card2.title}
          content={CARDTEXT.card2.content}
        />
      </div>
    </main>
  );
}
