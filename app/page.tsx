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
        className="hidden ms:hidden xl:block object-cover"
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
          className="hidden sm:block xl:hidden object-cover"
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
          className="xl:hidden ms:hidden block object-cover"
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

      <div className="xl:h-[22%] sm:h-[40%] h-[45%] bg-primary absolute left-0 right-0 bottom-0 rounded-t-[40px]"></div>

      <div className="absolute top-12 xl:top-20 sm:top-20 left-5 w-[180px] xl:w-[30vw] sm:w-[460px]">
        <p className="text-white font-medium text-[1.65rem] sm:text-5xl xl:leading-none leading-tight">
          De ahora en adelante, hacés más con tu dinero
        </p>
        <div className='h-1 w-6 bg-primary mt-4 block sm:hidden xl:hidden'></div>
        <p className="text-primary xl:text-[4.5vh] font-light text-2xl xl:leading-none leading-tight pt-5">
          Tu nueva <span className="font-[500] xl:text-[4.5vh] text-2xl">billetera virtual</span>
        </p>
      </div>

      <div className="flex xl:flex-row flex-col justify-center items-center lg:gap-3 gap-6 absolute xl:bottom-7 bottom-12 left-0 w-screen">
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
