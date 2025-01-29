import React, {useState} from 'react'
import WestIcon from '@mui/icons-material/West';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { motion } from "framer-motion";


const testimonials = [
    {
      name: "Donald Sullivan",
      role: "Founder Fiko",
      image: "https://images.pexels.com/photos/732425/pexels-photo-732425.jpeg?auto=compress&cs=tinysrgb&w=800",
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

  const variants = {
    enter: { opacity: 0, x: 30 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 }
  };

  return (
    <section className="py-20 px-4 bg-gray-100">
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
              <WestIcon className="text-gray-500 hover:text-black" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center" onClick={nextTestimonial}>
              <WestIcon className="text-gray-500 rotate-180 hover:text-black" />
            </button>
          </div>

        </div>

        <div className="md:w-2/3 p-4 relative">
          <FormatQuoteIcon
            className="absolute rotate-180 -top-16 -left-6"
            color="disabled"
            sx={{ fontSize: 200 }}
          />
          <motion.p
          key={currentTestimonial}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
           className="text-gray-600 text-2xl leading-relaxed max-w-3xl md:justify-start h-[200px] overflow-hidden">
          {testimonials[currentTestimonial].text}
          </motion.p>
        </div>
      </div>
    </div>
  </section>
  
  );
}

export default TestimonialSection