import Image from 'next/image';
import img404 from './assets/img404.jpg';
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="h-screen w-screen bg-white flex justify-center items-center">
      <div className="h-[80%] aspect-square relative">
        <Image
          className="object-cover"
          src={img404}
          alt="imagen del hero"
          quality={100}
          fill
          sizes="100vw"
          priority
          placeholder="blur"
        ></Image>
      </div>
      <Link
        className="absolute bottom-[15%] form-btn bg-primary shadow-lg"
        href="/"
      >
        Volver
      </Link>
    </section>
  );
}
