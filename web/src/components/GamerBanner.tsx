interface GameBannerProps {
  title: string;
  bannerUrl: string;
  adsCount: number;
}

export function GameBanner({ title, bannerUrl, adsCount }: GameBannerProps) {
  return (
    <a href="" className="relative rounded-lg overflow-hidden hover:translate-y-[-0.5rem] duration-300">
      <img src={bannerUrl} alt="" />

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className='font-bold text-white block'>{title}</strong>
        <span className='text-zinc-400 text-sm block'>{adsCount} anúncios</span>
      </div>
    </a>
  )  
}