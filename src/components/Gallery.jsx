import React from 'react'


const images = [
    "/brian-kungu-MU7sDFhV02U-unsplash.jpg",
    "/adriana-velasquez-PCh7-2fqilA-unsplash.jpg",
    "/anton-bykov-NytfY3ajAjw-unsplash.jpg",
    "/brian-kungu-QpSOfdZw5aU-unsplash.jpg",
    "/brian-kungu-XSPwAtvFNyc-unsplash.jpg",
    "/gala-iv-VsxSTHAjSUA-unsplash.jpg",
  ];

  
const Gallery = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg group"
            >
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-64 object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
