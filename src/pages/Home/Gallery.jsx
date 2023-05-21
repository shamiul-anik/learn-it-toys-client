import { Carousel } from "flowbite-react";

const Gallery = () => {
  return (
    <div>
      <section className="max-w-7xl mx-auto mt-12 lg:mt-24 p-4 md:px-0">
        <header>
          <h2 className="content-title text-center">Gallery</h2>
        </header>
        <p className="content-description text-center mt-2 mb-8 md:mb-12">
          Check our gallery to find out about some awesome toys!
        </p>

        <div className="h-56 md:h-80 xl:h-[450px]">
          <Carousel slideInterval={3000}>
            <img
              src="https://i.ibb.co/zXFnRd7/gallery-image1.jpg"
              alt="Gallery Image 1"
            />
            <img
              src="https://i.ibb.co/mCHYPyB/gallery-image2.jpg"
              alt="Gallery Image 2"
            />
            <img
              src="https://i.ibb.co/NYsJLdh/gallery-image3.webp"
              alt="Gallery Image 3"
            />
            <img
              src="https://i.ibb.co/Q9VQmSL/gallery-image4.webp"
              alt="Gallery Image 4"
            />
          </Carousel>
        </div>


      </section>
    </div>
  );
};

export default Gallery;