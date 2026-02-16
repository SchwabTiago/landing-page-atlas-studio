import { Header } from "../components/Header";

import img02 from "../assets/image/image02.jpg";
import img03 from "../assets/image/image03.jpg";
import img04 from "../assets/image/image04.jpg";

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

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[url('../assets/image/image01.jpg')] bg-no-repeat bg-cover flex">
        <div className="bg-white/10 backdrop-blur h-1/2 m-20 rounded-xl">
          <div className="m-10">
            <h2 className="text-6xl font-playfair-display mb-5 text-gray-800">
              Elevating Spaces, <br />
              <span className="italic">Redefining Living. </span>
            </h2>
            <p className="text-lg font-light mb-5">
              We craft timeless environments that balance minimalist <br />
              aesthetics with personal comfort. Your home is a canvas <br />
              for your story.
            </p>
            <div>
              <button className="bg-blue-500 text-white pt-3 pb-3 pl-8 pr-8 rounded-xl font-inter hover:bg-blue-500/90 transition cursor-pointer font-medium text-lg mr-6">
                Contact Us
              </button>
              <button className="bg-white pt-3 pb-3 pl-8 pr-8 rounded-xl font-inter hover:bg-gray-200 transition cursor-pointer font-medium text-lg">
                See our Instagram
              </button>
            </div>
          </div>
        </div>
      </main>
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
      <section className="max-w-7xl mx-auto px-6 py-20 flex gap-18">
        <div className=" w-1/2 min-h-130 rounded-2xl bg-[url('../assets/image/image05.jpg')] bg-cover bg-center bg-no-repeat" />
        <div className=" w-1/2">
          <p className="text-blue-500 font-inter text-sm mb-8 mt-10">
            OUR PHILOSOPHY
          </p>
          <h2 className="font-playfair-display text-5xl mb-5">
            Design is the silent ambassador of your brand.
          </h2>
          <p className="border-l-blue-500 border-l-4 text-xl text-gray-600 mb-5 pl-6">
            "We believe that every space has a soul. Our role is to uncover it
            through thoughtful placement, curated materials, and the dance of
            light."
          </p>
          <p className="font-inter text-gray-800 mb-10">
            Our studio focuses on high-end residential projects that require a
            unique touch. We don't just follow trends; we create environments
            that stand the test of time, emphasizing sustainable luxury and
            functional elegance.
          </p>
          <div className="flex gap-10">
            <div>
              <p className="font-playfair-display text-3xl text-blue-500">
                12+
              </p>
              <span className="text-gray-500 font-inter">
                YEARS OF EXPERIENCE
              </span>
            </div>
            <div>
              <p className="font-playfair-display text-3xl text-blue-500">
                250+
              </p>
              <span className="text-gray-500 font-inter">
                PROJECTS COMPLETED
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
