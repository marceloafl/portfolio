interface MainBannerProps {
  title: string;
  subtitle: string;
}

export default function MainBanner({ title, subtitle }: MainBannerProps) {
  return (
    <section className="flex flex-col justify-center h-[50vh] sm:h-[75vh]  ">
      <h2 className="font-bold text-2xl sm:text-6xl text-gray">
        {title.toUpperCase()}
      </h2>
      <p className="sm:text-2xl sm:ml-56">{subtitle}</p>
    </section>
  );
}
