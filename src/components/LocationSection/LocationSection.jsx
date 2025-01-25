function LocationSection() {
    const images = [
      {
        src: 'https://images.unsplash.com/photo-1604999333679-b86d54738315?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
        text: ['Explore', 'Nature'],
      },
      {
        src: 'https://images.unsplash.com/photo-1604999333679-b86d54738315?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
        text: ['Discover', 'Culture'],
      },
      {
        src: 'https://images.unsplash.com/photo-1604999333679-b86d54738315?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
        text: ['Relax', 'Travel'],
      },
      {
        src: 'https://images.unsplash.com/photo-1604999333679-b86d54738315?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
        text: ['Experience', 'Adventure'],
      },
    ];
  
    const layoutConfig = [
      'col-span-1 md:col-span-2',
      'col-span-1',               
      'col-span-1',               
      'col-span-1 md:col-span-2', 
    ];
  
    return (
      <section className="px-4 py-20 bg-white">
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
              <div key={index} className={`${layoutConfig[index]} relative`}>
                <img
                  src={image.src}
                  alt={`Image ${index + 1}`}
                  className="w-full h-64 object-cover rounded"
                />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-lg font-bold leading-none">{image.text[0]}</p>
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
  