import LazyLoad from 'react-lazy-load';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating';

const TrendingToys = () => {
  return (
    <section className="max-w-7xl mx-auto mt-12 lg:mt-32 p-4 md:px-0">
      <header>
        <h2 className="content-title text-center">Trending Toys</h2>
      </header>
      <p className="content-description text-center mt-2">
        Find out about the trending toys in LearnitToys.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-8">

        <div className="flex card card-compact w-full bg-base-100 box-shadow-custom">
          <LazyLoad offset={500}>
            <figure>
              <img className='h-56 p-4 pt-6 w-full object-cover rounded-xl' src="https://i.ibb.co/dgzY8HJ/language-image1.webp" alt="VTech Touch and Learn Activity Desk" />
            </figure>
          </LazyLoad>
          <div className='border-t border-slate-300 my-2 mb-1'></div>
          <div className="flex-1 p-4 pt-4 pb-0">
            <h3 className='text-center text-lg text-slate-700 font-bold'>VTech Touch and Learn Activity Desk</h3>
            <p className='font-semibold text-sm text-center mt-3 mb-2 text-slate-600'>Quantity: 20</p>
          </div>
          <div className='border-t border-slate-300 my-4'></div>
          <div className="p-4 pt-0">
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <Rating style={{ maxWidth: 90 }} value={4.9} readOnly />
                <p className='text-sm leading-none self-end'> {4.9}</p>
              </div>
              <div className='flex items-center text-sm gap-2'>
                <FaMoneyBillAlt /> <span> $107</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex card card-compact w-full bg-base-100 box-shadow-custom">
          <LazyLoad offset={500}>
            <figure>
              <img className='h-56 p-4 pt-6 w-full object-cover rounded-xl' src="https://i.ibb.co/pQqw90T/science-toy1.jpg" alt="Space Explorer" />
            </figure>
          </LazyLoad>
          <div className='border-t border-slate-300 my-2 mb-1'></div>
          <div className="flex-1 p-4 pt-4 pb-0">
            <h3 className='text-center text-lg text-slate-700 font-bold'>Space Explorer</h3>
            <p className='font-semibold text-sm text-center mt-3 mb-2 text-slate-600'>Quantity: 45</p>
          </div>
          <div className='border-t border-slate-300 my-4'></div>
          <div className="p-4 pt-0">
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <Rating style={{ maxWidth: 90 }} value={4.4} readOnly />
                <p className='text-sm leading-none self-end'> {4.4}</p>
              </div>
              <div className='flex items-center text-sm gap-2'>
                <FaMoneyBillAlt /> <span> $20</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex card card-compact w-full bg-base-100 box-shadow-custom">
          <LazyLoad offset={500}>
            <figure>
              <img className='h-56 p-4 pt-6 w-full object-cover rounded-xl' src="https://i.ibb.co/82HykVj/math-toy1.jpg" alt="Magnetic Math Numbers Montessori Arithmetic Toy" />
            </figure>
          </LazyLoad>
          <div className='border-t border-slate-300 my-2 mb-1'></div>
          <div className="flex-1 p-4 pt-4 pb-0">
            <h3 className='text-center text-lg text-slate-700 font-bold'>Magnetic Math Numbers Montessori Arithmetic Toy</h3>
            <p className='font-semibold text-sm text-center mt-3 mb-2 text-slate-600'>Quantity: 26</p>
          </div>
          <div className='border-t border-slate-300 my-4'></div>
          <div className="p-4 pt-0">
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <Rating style={{ maxWidth: 90 }} value={4.8} readOnly />
                <p className='text-sm leading-none self-end'> {4.8}</p>
              </div>
              <div className='flex items-center text-sm gap-2'>
                <FaMoneyBillAlt /> <span> $26</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex card card-compact w-full bg-base-100 box-shadow-custom">
          <LazyLoad offset={500}>
            <figure>
              <img className='h-56 p-4 pt-6 w-full object-cover rounded-xl' src="https://i.ibb.co/McgGhC4/language-image2.webp" alt="VTech Touch and Teach Word Book Featuring More Than 100 Words" />
            </figure>
          </LazyLoad>
          <div className='border-t border-slate-300 my-2 mb-1'></div>
          <div className="flex-1 p-4 pt-4 pb-0">
            <h3 className='text-center text-lg text-slate-700 font-bold'>VTech Touch and Teach Word Book Featuring More Than 100 Words</h3>
            <p className='font-semibold text-sm text-center mt-3 mb-2 text-slate-600'>Quantity: 25</p>
          </div>
          <div className='border-t border-slate-300 my-4'></div>
          <div className="p-4 pt-0">
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <Rating style={{ maxWidth: 90 }} value={4.8} readOnly />
                <p className='text-sm leading-none self-end'> {4.8}</p>
              </div>
              <div className='flex items-center text-sm gap-2'>
                <FaMoneyBillAlt /> <span> $24.55</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrendingToys;