import React from 'react';

function OurBlogSection() {
  const blogPosts = [
    {
      id: 1,
      date: 'Nov 14, 2022',
      title: '2023 Travel Trends – what you need to know',
      description:
        "2023 taught us valuable life lessons. Plans don't always work out, flexibility in life is key, a...",
      image:
        'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 2,
      date: 'Nov 18, 2022',
      title: 'Jeep Adventure is a new attraction for tourists visiting Garut',
      description:
        'Jeep Adventure is one of the tourist attractions that has been popular recently. The sensation...',
      image:
        'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="flex flex-col items-center">
            <span className="text-gray-500 text-xl">Our Blog</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-0">
              Our travel memories
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {blogPosts.map((post) => (
            <a
              key={post.id}
              href="#"
              className="block bg-white rounded-3xl shadow-lg overflow-hidden hover:text-gray-700 transition-colors"
            >
              <article className="group">
                <div className="relative h-64">
                  <img
                    src={
                      post.image ||
                      "https://images.pexels.com/photos/28216688/pexels-photo-28216688/free-photo-of-autumn-camping.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    }
                    alt={post.title}
                    className="object-cover w-full h-full rounded-3xl"
                  />
                </div>
                <div className="p-6">
                  <time className="text-gray-500 text-sm">{post.date}</time>
                  <h3 className="text-2xl font-bold mt-2 mb-3">{post.title}</h3>
                  <p className="text-gray-500">{post.description}</p>
                </div>
              </article>
            </a>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
            View more
          </button>
        </div>
      </div>
    </section>
  );
}

export default OurBlogSection;
