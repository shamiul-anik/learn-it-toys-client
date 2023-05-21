import { Carousel } from "flowbite-react";

const Gallery = () => {
  return (
    <div>
      <section className="max-w-7xl mx-auto mt-12 lg:mt-24 p-4">
        <header>
          <h2 className="content-title text-center">Gallery</h2>
        </header>
        <p className="content-description text-center mt-2 mb-8 md:mb-12">
          Check our gallery to find out about some awesome toys!
        </p>
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          
          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/bFt7Xc0/science-toy1.jpg" alt="Gallery Photo" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/pQqw90T/science-toy1.jpg" alt="Gallery Photo" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/zrKb1W1/science-toy2.jpg" alt="Gallery Photo" />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/9gZgTL1/math-toy1.jpg" alt="Gallery Photo" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="" alt="Gallery Photo" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/3SLRkbk/math-toy2.jpg" alt="Gallery Photo" />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="Gallery Photo" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="Gallery Photo" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="Gallery Photo" />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="Gallery Photo" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="Gallery Photo" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="Gallery Photo" />
            </div>
          </div>
        </div> */}

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