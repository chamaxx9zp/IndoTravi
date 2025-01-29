function LocationSection() {
    const images = [
      {
        src: 'https://images.pexels.com/photos/5272970/pexels-photo-5272970.jpeg?auto=compress&cs=tinysrgb&w=800',
        text: ['Bromo, East Java', 'Bromo Tengger '],
      },
      {
        src: 'https://images.pexels.com/photos/2253821/pexels-photo-2253821.jpeg?auto=compress&cs=tinysrgb&w=800',
        text: ['Denpasar, Bali, ', 'Bali Beach Tourism'],
      },
      {
        src: 'https://images.pexels.com/photos/2758567/pexels-photo-2758567.jpeg?auto=compress&cs=tinysrgb&w=800',
        text: ['Lampung, South Sumatra', 'Sumatra Tourism'],
      },
      {
        src: 'https://images.pexels.com/photos/4090091/pexels-photo-4090091.jpeg?auto=compress&cs=tinysrgb&w=800',
        text: ['Jogjakarta, Central Java', 'Borobudur Temple Tour'],
      },
    ];
  
    const layoutConfig = [
      'col-span-1 md:col-span-2',
      'col-span-1',               
      'col-span-1',               
      'col-span-1 md:col-span-2', 
    ];
  
    return (
      <section className="px-4 py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-gray-500 text-lg">Best location</span>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-0">
                Indonesian tourism
              </h2>
              <p className="text-gray-500 text-lg md:max-w-xl">
                Extraordinary natural beauty, enjoy the rich culture, and
                experience the friendliness of the local people.
              </p>
            </div>
          </div>
  
          {/* Four Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div key={index} className={`${layoutConfig[index]} relative rounded-2xl overflow-hidden cursor-pointer group`}>
                <div className="absolute inset-0 bg-black/40 hover:bg-black/30 pointer-events-none transition-opacity duration-500"></div>
                <img
                  src={image.src}
                  alt={`Image ${index + 1}`}
                  className="w-full h-64 object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 text-white group-hover:translate-y-[-8px] transition-transform duration-500">
                  <p className="text-lg leading-8">{image.text[0]}</p>
                  <p className="text-lg font-bold leading-none">{image.text[1]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default LocationSection;
  