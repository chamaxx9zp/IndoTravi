import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import PaymentIcon from "@mui/icons-material/Payment";
import ExploreIcon from "@mui/icons-material/Explore";
import SearchComponent from "../Common Component/SearchComponent";

function HowItWorksSections() {
  const features = [
    {
      icon: <SearchIcon className="w-8 h-8" />,
      title: "Find your destination",
      description:
        "Embark on a journey to discover your dream destination, where adventure and relaxation await.",
    },
    {
      icon: <ConfirmationNumberIcon className="w-8 h-8" />,
      title: "Book a ticket",
      description:
        "Ensure a smooth travel experience by booking tickets to your preferred destination via our booking platform",
    },
    {
      icon: <PaymentIcon className="w-8 h-8" />,
      title: "Make payment",
      description:
        "We offer a variety of payment options to meet your preferences and ensure a hassle-free transaction process.",
    },
    {
      icon: <ExploreIcon className="w-8 h-8" />,
      title: "Explore destination",
      description:
        "You'll be immersed in a captivating tapestry of sights, sounds and tastes, as you wind your way through the ancient streets",
    },
  ];
  return (
    <section className="py-20 px-4 z-10 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Only Title */}
        <div className="mb-12 md:hidden">
          <h3 className="text-gray-500 text-lg mb-2">How it works</h3>
          <h2 className="text-5xl font-bold mb-4">One click for you</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="relative rounded-3xl overflow-hidden hover:shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Travel destination"
              className="w-full md:h-full h-[650px] object-cover transition-transform duration-500 will-change-transform group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/10 transition-opacity duration-500"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-end p-2 pb-10 transition-transform duration-500 group-hover:translate-y-[-8px] will-change-transform">
              <SearchComponent />
              <div className="text-white text-center mt-10 max-w-2xl">
                <p className="text-lg mb-4">
                  Embark on a journey to find your dream destination, where
                  adventure and relaxation await, creating unforgettable
                  memories along the way
                </p>
              </div>
            </div>
          </div>

          {/* Travel Tabs */}
          <div>
            {/* Desktop travel title */}
            <div className="hidden md:block mb-12">
              <h3 className="text-gray-500 text-lg mb-2">How it works</h3>
              <h2 className="text-5xl font-bold mb-4">One click for you</h2>
            </div>

            {/* Travel Tabs */}
            <div className="grid grid-cols-1 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-100 hover:bg-white p-6 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  <span className="flex gap-4">
                    <div className="w-14 h-14 bg-white group-hover:bg-gray-100 rounded-xl flex items-center justify-center px-4 py-4">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-500">{feature.description}</p>
                    </div>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSections;
