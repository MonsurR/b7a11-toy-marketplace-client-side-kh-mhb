import React from "react";

const Customer = () => {
  return (
    <div>
      <section>
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="flex flex-col w-full max-w-lg text-left lg:mx-auto">
              <p className="mx-auto text-base leading-relaxed text-gray-500">
                Free and Premium themes, UI Kit's, templates and landing pages
                built with Tailwind CSS, HTML & Next.js.
              </p>
              <h2 className="mt-4 text-xs font-semibold tracking-widest text-blue-500 uppercase">
                Wicked Labs{" "}
                <span href="#" className="font-semibold text-gray-200 lg:mb-0">
                  Acme's HR
                </span>
              </h2>
              <img
                alt="testimonial"
                className="inline-block object-cover object-center w-20 h-20 mt-8 rounded-full"
                src="/assets/images/avatar.png"
              />
            </div>
            <div className="flex flex-col w-full max-w-lg text-left lg:mx-auto">
              <p className="mx-auto text-base leading-relaxed text-gray-500">
                Free and Premium themes, UI Kit's, templates and landing pages
                built with Tailwind CSS, HTML & Next.js.
              </p>
              <h2 className="mt-4 text-xs font-semibold tracking-widest text-blue-500 uppercase">
                Wicked Labs{" "}
                <span href="#" className="font-semibold text-gray-200 lg:mb-0">
                  Acme's HR
                </span>
              </h2>
              <img
                alt="testimonial"
                className="inline-block object-cover object-center w-20 h-20 mt-8 rounded-full"
                src="/assets/images/avatar.png"
              />
            </div>
            <div className="flex flex-col w-full max-w-lg text-left lg:mx-auto">
              <p className="mx-auto text-base leading-relaxed text-gray-500">
                Free and Premium themes, UI Kit's, templates and landing pages
                built with Tailwind CSS, HTML & Next.js.
              </p>
              <h2 className="mt-4 text-xs font-semibold tracking-widest text-blue-500 uppercase">
                Wicked Labs{" "}
                <span href="#" className="font-semibold text-gray-200 lg:mb-0">
                  Acme's HR
                </span>
              </h2>
              <img
                alt="testimonial"
                className="inline-block object-cover object-center w-20 h-20 mt-8 rounded-full"
                src="/assets/images/avatar.png"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Customer;
