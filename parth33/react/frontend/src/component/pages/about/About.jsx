import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-20 px-5">

      {/* About Heading */}
      <div className="max-w-4xl mx-auto text-center">

        <h1 className="text-5xl font-bold text-black mb-6">
          About Us
        </h1>

        <p className="text-lg text-gray-600 leading-8">
          Welcome to our website. We are focused on creating
          simple, modern and useful digital solutions. Our goal
          is to provide a smooth and enjoyable experience for
          every visitor.
        </p>

      </div>


      {/* About Boxes */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">

        {/* Our Mission */}
        <div className="bg-white p-8 rounded-xl shadow-md">

          <h2 className="text-2xl font-bold mb-4">
            Our Mission
          </h2>

          <p className="text-gray-600 leading-7">
            Our mission is to build reliable and easy-to-use
            solutions while continuously improving our skills
            and technology.
          </p>

        </div>


        {/* Our Vision */}
        <div className="bg-white p-8 rounded-xl shadow-md">

          <h2 className="text-2xl font-bold mb-4">
            Our Vision
          </h2>

          <p className="text-gray-600 leading-7">
            Our vision is to create innovative digital
            experiences that are simple, professional and
            accessible to everyone.
          </p>

        </div>

      </div>


      {/* Why Choose Us */}
      <div className="max-w-5xl mx-auto mt-10 bg-black text-white p-10 rounded-xl text-center">

        <h2 className="text-3xl font-bold mb-5">
          Why Choose Us?
        </h2>

        <p className="text-gray-300 leading-7">
          We believe in quality, creativity and continuous
          learning. We work to deliver solutions that are
          simple, effective and user-friendly.
        </p>

      </div>

    </div>
  );
};

export default About;