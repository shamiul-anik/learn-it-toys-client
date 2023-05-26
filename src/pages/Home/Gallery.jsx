import { Carousel } from "flowbite-react";
// import { Carousel } from 'react-responsive-carousel';

const Gallery = () => {
  return (
    <div>
      <section className="max-w-7xl mx-auto mt-12 lg:mt-24 p-4 md:px-0">
        <header data-aos="fade-up">
          <h2 className="content-title text-center">Gallery</h2>
        </header>
        <p className="content-description text-center mt-2 mb-8 md:mb-12" data-aos="fade-down">
          Discover a world of educational toys in our gallery!
        </p>

        <div className="h-56 md:h-80 xl:h-[450px]">
          {/* Flowbite React - Carousel */}
          <Carousel slideInterval={3000}>
            <img className="h-full object-cover"
              src="https://i.ibb.co/zXFnRd7/gallery-image1.jpg"
              alt="Gallery Image 1"
            />
            <img className="h-full object-cover"
              src="https://i.ibb.co/mCHYPyB/gallery-image2.jpg"
              alt="Gallery Image 2"
            />
            <img className="h-full object-cover"
              src="https://i.ibb.co/NYsJLdh/gallery-image3.webp"
              alt="Gallery Image 3"
            />
            <img className="h-full object-cover"
              src="https://i.ibb.co/Q9VQmSL/gallery-image4.webp"
              alt="Gallery Image 4"
            />
          </Carousel>

          {/* React Responsive Carousel */}
          {/* <Carousel className="text-center" showArrows={true} autoPlay={true} infiniteLoop={true}>
            <div>
              <img src="https://i.ibb.co/zXFnRd7/gallery-image1.jpg" alt="Gallery Image 1" />
            </div>
            <div>
              <img src="https://i.ibb.co/mCHYPyB/gallery-image2.jpg" alt="Gallery Image 2" />
            </div>
            <div>
              <img src="https://i.ibb.co/NYsJLdh/gallery-image3.webp" alt="Gallery Image 3" />
            </div>
            <div>
              <img src="https://i.ibb.co/Q9VQmSL/gallery-image4.webp" alt="Gallery Image 4" />
            </div>
          </Carousel> */}
          {/* <p className="legend">Legend 4</p> */}

        </div>


      </section>
    </div>
  );
};

export default Gallery;