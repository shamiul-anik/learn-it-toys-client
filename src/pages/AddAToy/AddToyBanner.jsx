import Sphere1 from '../../assets/images/sphere1.png';
import Sphere2 from '../../assets/images/sphere1.png';

const AddToyBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-[#0D0A25]">
      <div className="flex justify-center items-center gap-8 max-w-7xl mx-auto py-16 lg:py-24">

        {/* Spheres */}
        <img className="hidden md:block absolute -top-3 -left-1 blur-md" src={Sphere1} alt="Sphere 1" />
        <img className="absolute w-[350px] -bottom-40 -left-48 blur-lg" src={Sphere2} alt="Sphere 2" />
        <img className="hidden md:block absolute -top-2 right-3 blur-lg" src={Sphere1} alt="Sphere 1" />
        <img className="hidden md:block absolute -bottom-4 -right-5 blur-lg" src={Sphere2} alt="Sphere 2" />

        <div className="max-w-xl p-4 text-center">
          <header>
            <h1 className='banner-highlighted-text text-4xl font-bold'>Add A Toy</h1>
          </header>
          {/* <p className="banner-description mt-4 mb-1 lg:mb-2 !text-center font-semibold text-lg">A. K. M. Shamiul Islam</p>
          <p className="banner-description mb-8 lg:mb-12 !text-center font-semibold !text-sm">May 20, 2023</p> */}
          {/* <Link to="/">
              <button type="button" className="flex gap-3 mx-auto md:mx-0 items-center justify-center text-white w-48 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-semibold rounded-lg text-xl px-5 py-4 text-center">Explore <FaArrowRight /></button>
            </Link> */}
        </div>
        {/* <div className="p-4 pb-0">
          <img className="max-w-xl w-full image-full" src={AddToyImage} alt="Add Toy Image" />
        </div> */}
      </div>
    </div>
  );
};

export default AddToyBanner;