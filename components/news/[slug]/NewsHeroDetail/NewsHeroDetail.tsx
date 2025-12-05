export default function NewsHeroDetail({ image }: { image: string }) {
  const background = image || "/hero/hero-bg.jpg";

  return (
    <div
      className="w-full h-[360px] relative overflow-hidden bg-cover bg-center flex items-center justify-center flex-col pt-[75px]"
      style={{ backgroundImage: `url('${background}')` }}>
      {/* overlay */}
      <div className="w-full absolute inset-0 bg-gradient-to-b from-slate-100/50 to-slate-100" />
    </div>
  );
}
