export default function Posts() {
  const photos = [
    {
      title: "Urban Landscapes",
      description: "A series exploring city architecture and urban life",
      date: "2024",
      category: "Architecture",
      image: "/photo1.jpg",
    },
    {
      title: "Natural Light Portraits",
      description: "Portrait series using only natural lighting",
      date: "2023",
      category: "Portrait",
      image: "/photo2.jpg",
    },
    {
      title: "Street Photography",
      description: "Capturing candid moments in city streets",
      date: "2023",
      category: "Street",
      image: "/photo3.jpg",
    },
    {
      title: "Minimalist Compositions",
      description: "Studies in minimal composition and form",
      date: "2023",
      category: "Abstract",
      image: "/photo4.jpg",
    },
    {
      title: "Travel Documentary",
      description: "Documentary series from various travels",
      date: "2022",
      category: "Travel",
      image: "/photo5.jpg",
    },
    {
      title: "Night Photography",
      description: "Exploring cities after dark",
      date: "2022",
      category: "Urban",
      image: "/photo6.jpg",
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Photography</h1>
      <p className="text-gray-600 mb-12 max-w-2xl">
        A collection of my photographic works exploring various themes and styles.
        Each series represents a different perspective on how I see the world through my lens.
      </p>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-xl shadow-sm overflow-hidden"
          >
            {/* Image Container */}
            <div className="aspect-[4/3] overflow-hidden">
              <div
                className="w-full h-full bg-gray-100 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url(${photo.image})` }}
              />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="text-sm font-medium mb-2">
                  {photo.category} · {photo.date}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {photo.title}
                </h3>
                <p className="text-sm text-gray-200">
                  {photo.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Category Filter - Optional */}
      <div className="flex flex-wrap gap-4 mt-12">
        <button className="px-4 py-2 rounded-full bg-sky-600 text-white">
          All
        </button>
        <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
          Architecture
        </button>
        <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
          Portrait
        </button>
        <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
          Street
        </button>
        <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
          Travel
        </button>
      </div>
    </div>
  );
}