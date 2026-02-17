export default function HeroSection() {
  return (
    <section className="min-h-screen bg-[url('../assets/image/image01.webp')] bg-no-repeat bg-cover flex">
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
              See our work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
