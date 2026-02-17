export default function PhilosophySection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 flex gap-18">
      <div className=" w-1/2 min-h-130 rounded-2xl bg-[url('../assets/image/image05.webp')] bg-cover bg-center bg-no-repeat" />
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
          unique touch. We don't just follow trends; we create environments that
          stand the test of time, emphasizing sustainable luxury and functional
          elegance.
        </p>
        <div className="flex gap-10">
          <div>
            <p className="font-playfair-display text-3xl text-blue-500">12+</p>
            <span className="text-gray-500 font-inter">
              YEARS OF EXPERIENCE
            </span>
          </div>
          <div>
            <p className="font-playfair-display text-3xl text-blue-500">250+</p>
            <span className="text-gray-500 font-inter">PROJECTS COMPLETED</span>
          </div>
        </div>
      </div>
    </section>
  );
}
