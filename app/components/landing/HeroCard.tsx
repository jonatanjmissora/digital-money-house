interface HeroCardProps {
  title: string;
  content: string;
}

export const HeroCard = ({ title, content }: HeroCardProps) => {
  return (
    <article className="self-center lg:self-stretch lg:w-[500px] w-[630px] lg:p-6 p-8 rounded-[30px] bg-white">
      <p className="lg:text-[2.5rem] text-[2.6rem] font-bold border-b-2 border-primary pb-2">
        {title}
      </p>
      <p className="tracking-wide text-xl leading-snug pt-3">{content}</p>
    </article>
  );
};
