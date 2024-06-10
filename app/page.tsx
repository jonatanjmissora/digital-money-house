import Image from 'next/image';
import desktopBG2 from './assets/desktopBG2.webp';
import tabletBG from './assets/tabletBG.webp';
import movilBG from './assets/movilBG.webp';
import { HeroCard } from './components/landing/HeroCard';
import { CARDTEXT } from './utils/landing.constants';

const ResponsiveImage = () => {
  return (
    <>
      <Image
        className="hidden ms:hidden xl:block"
        src={desktopBG2}
        alt="imagen del hero"
        quality={100}
        fill
        sizes="100vw"
        priority
        placeholder="blur"
      />
      <div className='w-full border-5 border-green-400'>

        <Image
          className="hidden sm:block xl:hidden"
          src={tabletBG}
          alt="imagen del hero"
          quality={100}
          height={500}
          width={900}
          sizes="100vw"
          priority
          placeholder="blur"
        />
      </div>

      <div className='w-full border-5 border-green-400'>

        <Image
          className="xl:hidden ms:hidden block"
          src={movilBG}
          alt="imagen del hero"
          quality={100}
          height={400}
          width={400}
          sizes="100vw"
          priority
          placeholder="blur"
        />
      </div>


      {/*<Image
      className="object-cover lg:object-left-top tablet"
      src={desktopBG}
      alt="imagen del hero"
      quality={100}
      fill
      sizes="100vw"
      priority
      placeholder="blur"
      ></Image>
      */}
    </>
  )
}

export default async function Home() {
  return (

    <main className="flex-1 overflow-hidden relative">
      <ResponsiveImage />

      <div className="lg:h-36 h-[40%] bg-primary absolute left-0 right-0 bottom-0 rounded-t-[2.5rem]"></div>

      <div className="absolute top-12 xl:top-20 sm:top-20 left-12 w-[200px] lg:w-[430px] sm:w-[460px]">
        <p className="text-white text-2xl sm:text-5xl leading-none">
          De ahora en adelante, hacés más con tu dinero
        </p>
        <p className="text-primary lg:text-4xl font-light text-3xl leading-none pt-5">
          Tu nueva <span className="font-[500] lg:text-4xl text-4xl">billetera virtual</span>
        </p>
      </div>

      <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-3 gap-6 absolute lg:bottom-7 bottom-12 left-0 w-screen">
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
