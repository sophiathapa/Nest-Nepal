import React from "react";

const googleIcons = [
  "gmail.svg",
  "google calendar.svg",
  "Google drive.svg",
  "google surveys.svg",
  "google meet.svg",
];

const googleIcons1 = [
  "gmail.svg",
  "Google drive.svg",
  "google meet.svg",
  "google calendar.svg",
  "google chat.svg",
  "logo_gemini_2025_color_2x_web_96dp 1.svg",
  "google docs.svg",
  "google sheets.svg",
  "google slides.svg",
  "google vids.svg",
  "google keep.svg",
  "google sites.svg",
  "google forms.svg",
  "google tasks.svg",
  "noterbooklm.svg",
  "appsheet.svg",
];

export const Hero = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-muted/50 to-background">
      <div className="section-container text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-brand-blue mb-4">
          Google Workspace
        </h2>

        <div className="flex justify-center gap-3 mb-8 text-2xl">
          {googleIcons.map((icon, i) => (
            <img key={i} src={icon} alt={icon} />
          ))}
        </div>

        <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4 max-w-3xl mx-auto">
          <span className="text-brand-green">किन केही</span> Businesses
          efficiently <span className="text-brand-green">चल्छन्, र केही</span>{" "}
          daily operations <span className="text-brand-green">मै</span> struggle{" "}
          <span className="text-brand-green">गर्छन्?</span>
        </h1>

        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Reason luck,ads वा team size होइन. Reason हो right partner with right
          tools.
        </p>

        {/* Discount Tags */}
        <div className="flex flex-col items-center gap-3 mb-8">
          <div className="flex items-center rounded-lg overflow-hidden shadow-lg">
            <div className="gradient-pink text-primary-foreground px-4 py-2 text-sm font-semibold">
              DISCOUNT
              <br />
              UP TO
            </div>
            <div className="gradient-pink text-primary-foreground px-6 py-2 text-3xl font-bold border-l border-primary-foreground/20">
              20%
            </div>
          </div>
          <div className="flex items-center rounded-lg overflow-hidden shadow-lg">
            <div className="gradient-pink text-primary-foreground px-4 py-2 text-sm font-semibold">
              After
              <br />
              Discount
            </div>
            <div className="gradient-pink text-primary-foreground px-6 py-2 border-l border-primary-foreground/20">
              <span className="text-sm">Rs.</span>
              <span className="text-3xl font-bold">499</span>
            </div>
          </div>
        </div>

        <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-sm">
          Everything Your Business Needs to Work Smarter. A complete Google
          Workspace setup done right by Nest Nepal.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <a
            href="#demo"
            className="gradient-pink text-primary-foreground px-6 py-3 rounded-full font-medium text-sm hover:opacity-90 transition-opacity"
          >
            15 min · Free Demo
          </a>
          <a
            href="#quotation"
            className="border border-foreground text-foreground px-6 py-3 rounded-full font-medium text-sm hover:bg-muted transition-colors flex items-center justify-center gap-2"
          >
            Get a quotation
            {/* <ArrowUpRight className="w-4 h-4" /> */}
          </a>
        </div>
      </div>
    </section>
  );
};
