import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import StarIcon from '@mui/icons-material/Star';
import 'swiper/css';
import 'swiper/css/pagination';

const tourPackages = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
    title: 'Bali Tour Package',
    days: '7 Days',
    rating: 4.9,
    date: '23 AUGUST - 29 AUGUST',
    price: 285
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1604999333679-b86d54738315',
    title: 'Java Tour Package',
    days: '5 Days',
    rating: 4.9,
    date: '23 AUGUST - 27 AUGUST',
    price: 218
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd',
    title: 'Solo Tour Package',
    days: '3 Days',
    rating: 4.9,
    date: '23 AUGUST - 25 AUGUST',
    price: 163
  }
];

function TourPackages() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const TourCard = ({ tour }) => (
    <div className="relative group overflow-hidden rounded-3xl">
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-black/40">
        <div className="absolute top-4 left-4 flex justify-between items-center w-[calc(100%-2rem)]">
          <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1 rounded-full text-sm">
            {tour.days}
          </span>
          <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1 rounded-full text-sm flex items-center gap-1">
            <StarIcon className="w-4 h-4 text-yellow-400" />
            {tour.rating}
          </span>
        </div>

        <div className="absolute bottom-4 left-4 text-white w-[calc(100%-2rem)] bg-white/20 backdrop-blur-md px-4 py-4 rounded-2xl group-hover:translate-y-[-8px] transition-transform duration-500">
          <span className="text-sm mb-1 block">{tour.date}</span>
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-semibold">{tour.title}</h3>
            <p className="text-2xl font-bold">${tour.price}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 px-4 z-10 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-gray-500 text-lg">Tour packages</span>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-2">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-0">Our tourist destination</h2>
            <p className="text-gray-500 text-lg md:max-w-xl">
              Our tourist destinations offer an unrivaled blend of natural beauty and cultural richness
            </p>
          </div>
        </div>

        {isMobile ? (
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            loop={true}
            className={`w-full`}
          >
            {tourPackages.map((tour) => (
              <SwiperSlide key={tour.id}>
                <TourCard tour={tour} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tourPackages.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        )}

        <div className="text-center mt-[4px] md:mt-12">
          <button className="bg-black text-white px-8 md:px-16 py-3 rounded-full border border-black 
      transition-all duration-300 hover:shadow-xl transform hover:scale-105 cursor-pointer 
      hover:bg-transparent hover:text-black">
            View more
          </button>
        </div>
      </div>
    </section>
  );
}

export default TourPackages;