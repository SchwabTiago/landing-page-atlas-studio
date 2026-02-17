import img02 from "../../../assets/image/image02.webp";
import img03 from "../../../assets/image/image03.webp";
import img04 from "../../../assets/image/image04.webp";

type PortfolioItemProps = {
  src: string;
  title: string;
  category: string;
  big?: boolean;
};

function PortfolioItem({
  src,
  title,
  category,
  big = false,
}: PortfolioItemProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl cursor-pointer group ${big ? "md:row-span-2" : ""}`}
    >
      <img
        src={src}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 transition-colors duration-500 group-hover:bg-blue-500/60 " />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center opacity-0 translate-y-6 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
        <h3 className="text-3xl md:text-4xl font-playfair-display">{title}</h3>
        <p className="tracking-[0.25em] text-sm mt-2 opacity-90">{category}</p>
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="mb-12">
        <p className="text-blue-500 tracking-widest">PORTFOLIO</p>

        <div className="flex items-center justify-between mt-3">
          <h2 className="font-playfair-display text-6xl text-gray-800">
            Selected Works
          </h2>

          <p className="text-blue-500 text-lg hover:underline cursor-pointer">
            View all projects →
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[250px]">
        <PortfolioItem
          src={img02}
          title="Sunlit Haven"
          category="SCANDINAVIAN / NATURAL LIGHT"
          big
        />
        <PortfolioItem
          src={img03}
          title="Modern Harmony"
          category="CONTEMPORARY / FAMILY LIVING"
        />
        <PortfolioItem
          src={img04}
          title="Quiet Retreat"
          category="WARM MODERN / BEDROOM SUITE"
        />
      </div>
    </section>
  );
}
