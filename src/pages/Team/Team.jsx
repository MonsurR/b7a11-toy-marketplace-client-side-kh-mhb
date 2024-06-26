import React from "react";
import { Helmet } from "react-helmet-async";

const Team = () => {
  return (
    <div>
      
      <Helmet>
        <title>Our Team</title>
      </Helmet>
      <div>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
          <div className="text-center pb-12">
            <h2 className="text-base font-bold text-indigo-600">
              We have the best equipment
            </h2>
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
              Check our awesome team members
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
              <div className="mb-8">
                <img
                  className="object-center object-cover rounded-full h-36 w-36"
                  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                  alt="photo"
                />
              </div>
              <div className="text-center">
                <p className="text-xl text-gray-700 font-bold mb-2">
                  Dany Bailey
                </p>
                <p className="text-base text-gray-400 font-normal">
                  Software Engineer
                </p>
              </div>
            </div>
            <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
              <div className="mb-8">
                <img
                  className="object-center object-cover rounded-full h-36 w-36"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                  alt="photo"
                />
              </div>
              <div className="text-center">
                <p className="text-xl text-gray-700 font-bold mb-2">
                  Lucy Carter
                </p>
                <p className="text-base text-gray-400 font-normal">
                  Graphic Designer
                </p>
              </div>
            </div>
            <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
              <div class="mb-8">
                <img
                  class="object-center object-cover rounded-full h-36 w-36"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                  alt="photo"
                />
              </div>
              <div class="text-center">
                <p class="text-xl text-gray-700 font-bold mb-2">Lucy Carter</p>
                <p class="text-base text-gray-400 font-normal">
                  Graphic Designer
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;
