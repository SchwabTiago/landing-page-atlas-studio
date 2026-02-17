import Button from "../../../components/ui/Button";

export default function CtaSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 mt-20">
      <div className="w-full rounded-2xl bg-linear-to-r from-sky-500 to-blue-600 px-8 py-20 text-white flex flex-col items-center text-center">
        <h2 className="font-playfair-display text-4xl md:text-6xl leading-tight">
          Ready to transform your <br className="hidden md:block" />
          home?
        </h2>
        <p className="mt-6 max-w-2xl font-inter text-base md:text-lg text-white/80 leading-relaxed">
          Let's collaborate to create a space that reflects your personality and
          enhances your daily life. Our initial consultations are the first step
          to your dream space.
        </p>
        <Button variant="secondary" className="mt-10">Book a Consultation</Button>
      </div>
    </section>
  );
}
