import { Header } from "../components/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="bg-[url(../assets/image/image01.jpg)] min-h-screen bg-no-repeat bg-cover flex">
        <div className=" bg-white/10 backdrop-blur h-1/2 m-20 rounded-xl">
          <div className="m-10">
            <h2 className="text-8xl font-playfair-display mb-5 text-gray-800 ">
              Elevating Spaces, <br />
              <span className="italic">Redefining Living. </span>
            </h2>
            <p className="text-3xl font-light mb-5 ">
              We craft timeless environments that balance minimalist <br />
              aesthetics with personal comfort. Your home is a canvas <br />
              for your story.
            </p>
            <div>
              <button className="bg-blue-500 text-white pt-4 pb-4 pl-12 pr-12 rounded-xl font-inter hover:bg-blue-500/90 transition cursor-pointer font-medium text-lg mr-6">
                Contact Us
              </button>
              <button className="bg-white pt-4 pb-4 pl-12 pr-12 rounded-xl font-inter hover:bg-gray-200 transition cursor-pointer font-medium text-lg">
                See our Instagram
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
