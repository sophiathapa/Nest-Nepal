import Button from "./Button";

const googleIcons = [
  "gmail.svg",
  "google calendar.svg",
  "Google drive.svg",
  "google surveys.svg",
  "google meet.svg",
  "logo_gemini_2025_color_2x_web_96dp 1.svg",
];

const features = {
  storage: [{ name: "Google drive.svg", text: "30GB Pooled Storage per user" }],
  communicate: [
    { name: "gmail.svg", text: "Secured & Personalized Gmail" },
    { name: "google calendar.svg", text: "Always in Track with Schedule" },
    { name: "google meet.svg", text: "HD Video Calls (100 Users)" },
    { name: "google chat.svg", text: "Gossip Secretly in your Group" },
  ],
  collaborate: [
    { name: "google docs.svg", text: "Documents with Google Docs" },
    { name: "google sheets.svg", text: "Data Insights with Google Sheets" },
    { name: "google slides.svg", text: "Present with Google Slides" },
    { name: "google surveys.svg", text: "Surveys, To-dos and Many More" },
  ],
  control: [
    {
      name: "google admin console.svg",
      text: "Basic Security & Admin Control",
    },
    { name: "google endpoint.svg", text: "Standard Endpoint Management" },
    { name: "smart search.svg", text: "Smart Search with Workspace" },
    { name: "vault.svg", text: "Vault for eDiscovery" },
    { name: "Google drive.svg", text: "Backup options for Drive and Gmail" },
  ],
};

const PricingSection = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-2">
            के <span className="text-brand-blue">Google Workspace</span>{" "}
            <br></br>
            तपाईको business
          </h2>
          <h2 className="text-4xl md:text-6xl font-bold">
            growth <span className="text-primary">को लागि</span> best fit{" "}
            <span className="text-primary">हो?</span>
          </h2>
          <p className="font-medium mt-4 text-lg max-w-lg mx-auto">
            Tailored Plans तपाईंको Online Presence को हरेक पहलुलाई Elevate र
            Empower गर्न
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-8">
          {googleIcons.map((icon, i) => (
            <img key={i} src={icon} alt={icon} className="w-[30px] h-[30px]" />
          ))}
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold">Starter</h3>
            <div className="mt-2">
              <span className="text-sm font-semibold text-black/70">Rs.</span>
              <span className="text-4xl font-bold"> 499 </span>
              <span className="text-xl text-black/70 line-through">560</span>
            </div>
            <p className="text-xs text-black/70 mt-1 mb-6">
              per user / month, <br></br> 1 year commitment ⓘ
            </p>
            <Button color="pink" />
          </div>

          <div className="grid md:grid-cols-2 gap-8  place-items-center">
            {Object.entries(features).map(([category, items]) => (
              <div key={category}>
                <h4 className="font-bold capitalize mb-3">{category}</h4>
                <ul className="space-y-2">
                  {items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <img src={item.name}></img>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
