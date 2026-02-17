import architecture from "../../../assets/icons/architecture.svg";
import chair from "../../../assets/icons/chair.svg";
import layers from "../../../assets/icons/layers.svg";

export default function WhatWeDoSection() {
  return (
    <section className="max-w-7xl mx-auto px-6">
      <div className="flex items-center flex-col">
        <p className="text-blue-500 font-inter text-sm mb-5 mt-12">
          WHAT WE DO
        </p>
        <h2 className="font-playfair-display text-5xl mb-15">
          Bespoke Design Services
        </h2>
      </div>
      <div className="flex gap-15">
        <div className="bg-gray-400/20 rounded-2xl pt-10 pb-10 pl-5 pr-5">
          <img src={architecture} className="h-10 w-10 mb-6" />
          <p className="font-playfair-display text-2xl mb-4">
            Interior Architecture
          </p>
          <span className="font-inter text-gray-800">
            Complete spatial planning and structural design that optimizes flow
            and creates dramatic architectural moments.
          </span>
        </div>
        <div className="bg-gray-400/20 rounded-2xl pt-10 pb-10 pl-5 pr-5">
          <img src={chair} className="h-10 w-10 mb-6" />
          <p className="font-playfair-display text-2xl mb-4">
            Furniture Curation
          </p>
          <span className="font-inter text-gray-800">
            Sourcing exclusive pieces from around the globe and designing custom
            furniture tailored to your specific needs.
          </span>
        </div>
        <div className="bg-gray-400/20 rounded-2xl pt-10 pb-10 pl-5 pr-5">
          <img src={layers} className="h-10 w-10 mb-6" />
          <p className="font-playfair-display text-2xl mb-4">
            Material Styling
          </p>
          <span className="font-inter text-gray-800">
            A sensory approach to textiles, finishes, and surfaces that brings
            warmth and character to every corner.
          </span>
        </div>
      </div>
    </section>
  );
}
