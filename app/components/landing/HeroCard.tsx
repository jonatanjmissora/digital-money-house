interface HeroCardProps {
  title: string;
  content: string;
}

export const HeroCard = ({ title, content }: HeroCardProps) => {
  return (
    <article className="
    self-center lg:self-stretch lg:w-[470px] w-[570px] p-8 rounded-[30px] bg-white">
      <p className="lg:text-3xl text-[2.6rem] font-bold border-b-2 border-primary lg:pb-3 pb-1">
        {title}
      </p>
      <p className="tracking-wide text-lg lg:leading-tight leading-normal pt-3">{content}</p>
    </article>
  );
};
