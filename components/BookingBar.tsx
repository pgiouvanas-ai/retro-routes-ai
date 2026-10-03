export default function BookingBar() {
  return (
    <section className="bg-purple-dark py-5 px-6">
      <div className="max-w-[1100px] mx-auto flex items-center justify-center gap-8 flex-wrap">
        <span className="text-cream text-[13px] font-semibold tracking-[0.08em] uppercase">
          Book with us on
        </span>
        <a href="https://www.viator.com/en-IE/tours/Dublin/The-Retro-Routes-Experience-Dublins-Vintage-Shopping-Tour/d503-5567364P1"
          target="_blank" rel="noopener noreferrer"
          className="text-gold text-[14px] font-bold no-underline border border-gold px-5 py-2 rounded-full transition-all duration-200 hover:bg-gold hover:text-purple-dark">
          Viator
        </a>
        <a href="https://www.tripadvisor.ie/Attraction_Review-g186605-d33000820-Reviews-The_Retro_Routes_Experience_Dublin-Dublin_County_Dublin.html"
          target="_blank" rel="noopener noreferrer"
          className="text-gold text-[14px] font-bold no-underline border border-gold px-5 py-2 rounded-full transition-all duration-200 hover:bg-gold hover:text-purple-dark">
          TripAdvisor
        </a>
        <a href="https://www.getyourguide.com/dublin-l31/the-retro-routes-experience-dublin-s-vintage-shopping-tour-t894795/"
          target="_blank" rel="noopener noreferrer"
          className="text-gold text-[14px] font-bold no-underline border border-gold px-5 py-2 rounded-full transition-all duration-200 hover:bg-gold hover:text-purple-dark">
          GetYourGuide
        </a>
      </div>
    </section>
  );
}