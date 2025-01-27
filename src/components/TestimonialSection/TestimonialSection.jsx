import React from 'react'
import WestIcon from '@mui/icons-material/West';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

function TestimonialSection() {
  return (
    <section className="py-20 px-4 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="flex md:flex-row flex-col">

        <div className="md:w-1/3 p-4">
          <div className="flex items-center justify-between gap-4 md:justify-start md:mb-6">

            <div className="flex items-center gap-2">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                alt="Donald Sullivan"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  Donald Sullivan
                </h3>
                <p className="text-gray-500">Founder Fiko</p>
              </div>
            </div>

            <div className="flex md:hidden flex-row gap-2">
              <button className="w-8 h-8 flex items-center justify-center">
                <WestIcon className="text-gray-500" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center">
                <WestIcon className="text-gray-500 rotate-180" />
              </button>
            </div>
          </div>

          {/* Desktop Arrows */}
          <div className="hidden md:flex flex-row justify-start gap-4 mt-16">
            <button className="w-10 h-10 flex items-center rounded-4xl justify-center">
              <WestIcon className="text-gray-500" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center">
              <WestIcon className="text-gray-500 rotate-180" />
            </button>
          </div>

        </div>

        <div className="md:w-2/3 p-4 relative">
          <FormatQuoteIcon
            className="absolute rotate-180 -top-16 -left-6"
            color="disabled"
            sx={{ fontSize: 200 }}
          />
          <p className="text-gray-600 text-2xl leading-relaxed max-w-3xl md:justify-start">
            This travel website is very informative and easy to use. I like how they present various
            destination options and travel packages with clear details. Offering pictures and
            destination descriptions helps me decide where I want to visit. Additionally, the ability
            to compare prices and reviews from other users is very helpful in decision making.
          </p>
        </div>
      </div>
    </div>
  </section>
  
  );
}

export default TestimonialSection