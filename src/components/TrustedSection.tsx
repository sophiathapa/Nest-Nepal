const logos = [
  "image 1.svg",
  "image 2.svg",
  "image 10.svg",
  "image 3.svg",
  "image 7.svg",
  "image 12.svg",
  "image 8.svg",
  "image 14.svg",
];

const TrustedSection = () => {
  return (
    <section className="py-12 md:py-16 ">
      <div className="section-container text-center">
        <p className="text-lg mb-2 font-medium">
          Trusted by 1,000+ Nepali businesses on their growth journey.{" "}
          <span className="text-primary font-medium">
            अब तपाईंको team तयार छ?
          </span>
        </p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-8">
          {logos.map((name, i) => (
            <img
              key={i}
              src={name}
              className="flex items-center justify-center w-24 h-12 text-xs font-semibold"
            ></img>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
