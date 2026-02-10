const solutions = [
  {
    title: "For enterprise",
    description:
      "Secure collaboration tools for enterprise, with premium AI and enterprise-grade security built in for all the ways work is changing.",
    image: "enterprise.svg",
  },
  {
    title: "For small business",
    description:
      "Tools for small businesses that help teams and individuals with everyday tasks like scheduling appointments and email marketing.",
    image: "small business.svg",
  },
  {
    title: "For new business",
    description:
      "Essentials tools for new businesses and startups, including business email domains, online file sharing and storage, and more.",
    image: "new business.svg",
  },
];

const SolutionsSection = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="section-container text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-2">
          Solutions for businesses,
        </h2>
        <h3 className="text-xl md:text-3xl font-bold text-primary mb-4">
          साना देखि ठूला सबैका लागि
        </h3>
        <p className="text-black/80 mb-12 max-w-xl mx-auto text-sm">
          No matter the size, Google Workspace ले तपाईंको business को सबै needs
          पूरा गर्छ
        </p>

        <div className="grid md:grid-cols-3 gap-20">
          {solutions.map((sol, i) => (
            <div key={i} className="bg-card text-center ">
              <div className="w-full h-40 rounded-xl mb-6 flex items-center justify-center">
                <img src={sol.image}></img>
              </div>
              <h4 className="font-bold text-lg mb-2">{sol.title}</h4>
              <p className="text-sm text-muted-foreground p-3">
                {sol.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
