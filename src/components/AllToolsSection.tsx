import { ArrowUpRight } from "lucide-react";

const icons = [
  { icon: "gmail.svg", name: "Gmail" },
  { icon: "Google drive.svg", name: "Drive" },
  { icon: "google meet.svg", name: "Meet" },
  { icon: "google calendar.svg", name: "Calendar" },
  { icon: "192px 10.svg", name: "Chat" },
  { icon: "logo_gemini_2025_color_2x_web_96dp 1.svg", name: "Gemini" },
  { icon: "google docs.svg", name: "Docs" },
  { icon: "google sheets.svg", name: "Sheets" },
  { icon: "google slides.svg", name: "Slides" },
  { icon: "google vids.svg", name: "Vids" },
  { icon: "google keep.svg", name: "Keep" },
  { icon: "google sites.svg", name: "Sites" },
  { icon: "google forms.svg", name: "Forms" },
  { icon: "google tasks.svg", name: "Tasks" },
  { icon: "notebooklm.svg", name: "NotebookLM" },
  { icon: "appsheet.svg", name: "AppSheet" },
];

const AllToolsSection = () => {
  return (
    <section className="py-12 md:py-20 bg-muted/50">
      <div className="section-container text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-2">
          <span className="text-primary">सबै</span> Tools{" "}
          <span className="text-primary">एउटै</span> Platform{" "}
          <span className="text-primary">मा</span>
        </h2>
        <h3 className="text-xl md:text-3xl font-bold mb-8">Google Workspace</h3>

        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mb-8 max-w-2xl mx-auto">
          {[
            "Premium AI built-in",
            "Tools born in the Cloud",
            "Enterprise-grade security",
          ].map((feature, i) => (
            <div key={i} className="col-span-1 text-center p-4">
              <h4 className="font-semibold text-sm mb-1">{feature}</h4>
            </div>
          ))}
        </div>

        <a
          href="#quotation"
          className="inline-flex items-center gap-2 border border-foreground text-foreground px-6 py-3 rounded-full text-sm font-medium hover:bg-card transition-colors"
        >
          Get a quotation <ArrowUpRight className="w-4 h-4" />
        </a>

        <div className="mt-12">
          <p className="font-bold text-lg md:text-2xl mb-6">
            Google Workspace includes:
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {icons.map((icon, i) => (
              <div className="flex flex-col gap-2 items-center justify-center">
                <img src={icon.icon} className="h-[30px] w-[30px]"></img>
                <span className="text-xs text-center">{icon.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllToolsSection;
