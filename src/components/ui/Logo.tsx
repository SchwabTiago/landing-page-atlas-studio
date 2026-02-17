export default function Logo() {
  return (
    <>
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded flex items-center justify-center bg-blue-500 ">
          <span className="text-white font-serif font-bold text-2xl tracking-tight ">
            A
          </span>
        </div>
        <span className="text-2xl font-playfair-display font-bold tracking-tight text-gray-800">
          ATLAS
        </span>
        <span className=" text-blue-500 font-playfair-display font-bold text-2xl tracking-tight">
          STUDIO
        </span>
      </div>
    </>
  );
}
