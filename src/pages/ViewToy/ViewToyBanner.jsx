import Sphere1 from '../../assets/images/sphere1.png';
import Sphere2 from '../../assets/images/sphere1.png';

const ViewToyBanner = () => {
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
            <h1 className='banner-highlighted-text text-4xl font-bold'>View Toy Information</h1>
          </header>
        </div>
      </div>
    </div>
  );
};

export default ViewToyBanner;