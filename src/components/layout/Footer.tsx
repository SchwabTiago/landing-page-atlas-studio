import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import dribbble from "../../assets/icons/dribbble.svg";
import send_symbol from "../../assets/icons/send-symbol.svg";

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 mt-20 mb-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-md bg-blue-600 flex items-center justify-center">
                <span className="text-white font-serif font-bold text-xl tracking-tight">
                  A
                </span>
              </div>
              <span className="text-2xl font-playfair-display font-bold tracking-tight text-gray-800">
                ATLAS
              </span>
            </div>

            <p className="mt-6 text-slate-600 leading-relaxed max-w-xs">
              Award-winning interior design studio specialized in high-end
              residential and commercial projects worldwide.
            </p>
          </div>

          <div className="md:justify-self-center">
            <p className="text-xs font-semibold tracking-[0.18em] text-blue-600">
              EXPLORE
            </p>

            <ul className="mt-6 space-y-4 text-slate-700">
              <li>
                <a className="hover:text-blue-600 transition" href="#">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600 transition" href="#">
                  Services
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600 transition" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="md:justify-self-center">
            <p className="text-xs font-semibold tracking-[0.18em] text-blue-600">
              OFFICE
            </p>

            <ul className="mt-6 space-y-4 text-slate-700">
              <li>120 Design District</li>
              <li>Milan, Italy</li>
              <li>+39 02 123 4567</li>
              <li>
                <a className="hover:text-blue-600 transition" href="#">
                  studio@atlas.com
                </a>
              </li>
            </ul>
          </div>

          <div className="md:justify-self-end w-full">
            <p className="text-xs font-semibold tracking-[0.18em] text-blue-600">
              NEWSLETTER
            </p>

            <p className="mt-6 text-slate-600 leading-relaxed max-w-sm">
              Stay updated with our latest designs and inspirations.
            </p>

            <form className="mt-6 flex items-center gap-3">
              <input
                type="email"
                placeholder="Email address"
                className="h-11 w-full max-w-xs rounded-lg border border-slate-200 bg-white px-4 text-slate-700 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />

              <button
                type="submit"
                className="h-11 w-11 rounded-lg bg-blue-600 text-white flex items-center justify-center transition hover:bg-blue-700"
                aria-label="Subscribe"
              >
                <img src={send_symbol} alt="" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 h-px w-full bg-slate-200" />

        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs tracking-[0.18em] text-slate-400">
            ©2026 ATLAS DESIGN STUDIO. ALL RIGHTS RESERVED.
          </p>

          <div className="flex items-center gap-4 text-slate-400">
            <a
              href="#"
              className="hover:text-blue-600 transition"
              aria-label="Facebook"
            >
              <img src={facebook} alt="" />
            </a>
            <a
              href="#"
              className="hover:text-blue-600 transition"
              aria-label="Instagram"
            >
              <img src={instagram} alt="" />
            </a>
            <a
              href="#"
              className="hover:text-blue-600 transition"
              aria-label="Dribbble"
            >
              <img src={dribbble} alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
