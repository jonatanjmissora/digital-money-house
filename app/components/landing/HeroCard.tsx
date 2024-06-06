interface HeroCardProps {
  title: string;
  content: string;
}

export const HeroCard = ({ title, content }: HeroCardProps) => {
  return (
    <article className="w-[500px] p-[30px] rounded-[30px] bg-white">
      <p className="text-[40px] leading-[54px] font-[700] border-b-2 border-primary py-2">
        {title}
      </p>
      <p className="text-[20px] leading-[27px] py-2">{content}</p>
    </article>
  );
};
