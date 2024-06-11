interface HeroCardProps {
  title: string;
  content: string;
}

export const HeroCard = ({ title, content }: HeroCardProps) => {
  return (
    <article className="self-center xl:self-stretch w-[90%] xl:w-[37vw] sm:w-[630px] xl:p-6 sm:p-8 p-4 py-5 rounded-[30px] bg-white">
      <p className="text-3xl xl:text-[2.5vw] sm:text-[2.6rem] font-bold border-b-2 border-primary pb-2">
        {title}
      </p>
      <p className="tracking-wide text-sm xl:text-[1.5vw] sm:text-xl leading-snug pt-3">{content}</p>
    </article>
  );
};
