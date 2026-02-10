import { Phone } from "lucide-react";
import Button from "./Button";

const googleIcons = [
  "gmail.svg",
  "Google drive.svg",
  "google meet.svg",
  "192px 10.svg",
  "logo_gemini_2025_color_2x_web_96dp 1.svg",
  "google docs.svg",
];

const Contact = () => {
  return (
    <section className="py-12 md:py-20" id="contact">
      <div className="section-container">
        <div className="bg-[#F2F2F28F] rounded-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-center">
            <div className="p-8 md:p-12 flex-1">
              <div className="flex gap-3 mb-4 text-2xl">
                {googleIcons.map((icon, i) => (
                  <img key={i} src={icon} className="w-[30px] h-[30px]" />
                ))}

              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Prefer to talk to sales directly?
              </h2>
              <p className="text-muted-foreground text-sm mb-6">
                तपाईंको company को unique requirements अनुसार तयार गरिएको
                solution सँग efficiency र collaboration maximize गर्नुहोस्
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="https://wa.me/9779864333517" className="">
                  <Button color="pink" placeholder="Message On WhatsApp" />
                </a>
                <a
                  href="tel:+9779864333517"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Phone className="w-4 h-4" /> Call: +977 9864333517
                </a>
              </div>
            </div>
            <div className="flex flex-shrink-0 w-full md:w-80 justify-end">
              <img
                src="girl.svg"
                alt="Contact our sales team"
                className="h-64 md:h-80 object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
