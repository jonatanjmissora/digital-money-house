import Image from 'next/image';
import hero from './assets/hero.jpg';
import { HeroCard } from './components/landing/HeroCard';
import { CARDTEXT } from './utils/home.constants';

export default async function Home() {
  return (
    <main className="h-screen">
      <div className="w-full h-[540px] mt-[39px]">
        <Image
          className="object-cover"
          src={hero}
          alt="imagen del hero"
          quality={100}
          fill
          sizes="100vw"
          priority
          placeholder="blur"
        ></Image>
      </div>

      <div className="w-full h-[212px] bg-primary absolute bottom-0 rounded-[30px]"></div>

      <div className="absolute w-[420px] left-[50px] top-[139px] ">
        <p className="text-white text-[48px] leading-[50px] font-[400]">
          De ahora en adelante, hacés más con tu dinero
        </p>
        <p className="text-primary text-[33.5px] leading-[50px] font-[400] pt-2">
          Tu nueva <span className="font-[700]">billetera virtual</span>
        </p>
      </div>

      <div className="flex justify-center gap-3 absolute top-[426px] left-0 w-screen">
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
