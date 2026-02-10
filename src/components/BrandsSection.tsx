const BrandsSection = () => {
  return (
    <section className="py-12 md:py-20 bg-muted/50">
      <div className="section-container text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-2">
          Brands using Google Workspace to succeed online,{" "}
          <span className="text-primary">कसरी?</span>
        </h2>
        <p className="mb-12 font-bold max-w-xl mx-auto text-sm">
          कसरी teams Google Workspace सँग productivity बढाउँछन् र समय बचत गर्छन्
        </p>

        <div className="grid md:grid-cols-2  gap-10 p-5">
          <div className="flex items-center justify-center">
            <img src="A logo cloud.svg"></img>
          </div>

          <div className="text-start p-6 ">
            <div className="border-l-4 border-blue-600 pl-4 mb-6">
              <h2 className="font-medium ">Your files, all in one place</h2>
            </div>

            <div className="border-l-4 border-black/10 pl-4 mb-6">
              <h2 className="text-gray-600 font-medium text-base">
                Edit and organize{" "}
                <span className="text-blue-600">Google Docs</span>, Sheets
                Microsoft Office files, and PDFs in real-time. Plus, access over
                100
              </h2>
            </div>

            <div className="border-l-4 border-black/10 pl-4 mb-6">
              <h2 className="text-gray-600 font-medium text-base">
                Annotate PDFs
              </h2>
            </div>

            <div className="border-l-4 border-black/10 pl-4 mb-6">
              <h2 className="text-gray-600 font-medium text-base">
                AI-powered search
              </h2>
            </div>

            <div className="border-l-4 border-black/10 pl-4 mb-6">
              <h2 className="text-gray-600 font-medium text-base">
                Activity view
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
