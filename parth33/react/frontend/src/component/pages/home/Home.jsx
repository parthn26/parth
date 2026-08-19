import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Main Section */}
      <section className="text-center py-32 px-5">

        <h1 className="text-5xl font-bold text-black mb-6">
          Welcome to Our Website
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Discover simple, creative and modern solutions designed
          to make your experience better.
        </p>

        <button className="bg-black text-white px-8 py-3 rounded-lg text-lg hover:bg-gray-800">
          Explore Now
        </button>

      </section>


      {/* Three Boxes */}
      <section className="max-w-6xl mx-auto px-5 pb-20">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <h2 className="text-2xl font-bold mb-4">
              Quality
            </h2>

            <p className="text-gray-600">
              We focus on providing high-quality solutions
              with a simple and professional approach.
            </p>
          </div>


          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <h2 className="text-2xl font-bold mb-4">
              Innovation
            </h2>

            <p className="text-gray-600">
              We use modern ideas and technology to create
              better digital experiences.
            </p>
          </div>


          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <h2 className="text-2xl font-bold mb-4">
              Support
            </h2>

            <p className="text-gray-600">
              We are always focused on providing a smooth
              and user-friendly experience.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;