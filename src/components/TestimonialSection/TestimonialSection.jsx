import React, {useState} from 'react'
import WestIcon from '@mui/icons-material/West';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const testimonials = [
    {
      name: "Donald Sullivan",
      role: "Founder Fiko",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
      text: "This travel website is very informative and easy to use. I like how they present various destination options and travel packages with clear details. Offering pictures and destination descriptions helps me decide where I want to visit. Additionally, the ability to compare prices and reviews from other users is very helpful in decision making."
    },
    {
      name: "John Doe",
      role: "CEO TravelCo",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800",
      text: "I found it to be super user-friendly. The design is sleek, and I love how easy it is to compare different trips and see all the information in one place. It made planning my vacation so much easier."
    },
    {
      name: "Jane Smith",
      role: "Product Manager at Wanderlust",
      image: "https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg?auto=compress&cs=tinysrgb&w=800",
      text: "Amazing platform! The detailed descriptions and the ability to view real user reviews made it a lot easier to decide on my next vacation destination. Highly recommend!"
    }
];

function TestimonialSection() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-4 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="flex md:flex-row flex-col">

        <div className="md:w-1/3 p-4">
          <div className="flex items-center justify-between gap-4 md:justify-start md:mb-6">

            <div className="flex items-center gap-2">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                {testimonials[currentTestimonial].name}
                </h3>
                <p className="text-gray-500">Founder Fiko</p>
              </div>
            </div>

            <div className="flex md:hidden flex-row gap-2">
              <button className="w-8 h-8 flex items-center justify-center" onClick={prevTestimonial}>
                <WestIcon className="text-gray-500" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center" onClick={nextTestimonial}>
                <WestIcon className="text-gray-500 rotate-180" />
              </button>
            </div>
          </div>

          {/* Desktop Arrows */}
          <div className="hidden md:flex flex-row justify-start gap-4 mt-16">
            <button className="w-10 h-10 flex items-center rounded-4xl justify-center" onClick={prevTestimonial}>
              <WestIcon className="text-gray-800" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center" onClick={nextTestimonial}>
              <WestIcon className="text-gray-00 rotate-180" />
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
          {testimonials[currentTestimonial].text}
          </p>
        </div>
      </div>
    </div>
  </section>
  
  );
}

export default TestimonialSection