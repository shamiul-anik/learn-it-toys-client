import LazyLoad from 'react-lazy-load';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating';

const MathToys = ({data3}) => {
  const { _id, toy_name, photo_url, price, rating } = data3;
  // console.log(toy_name);
  console.log(data);
  return (
    <div className="flex card card-compact w-full bg-base-100 box-shadow-custom">
      <LazyLoad offset={500}>
        <figure>
          <img className='h-56 p-4 pt-6 w-full object-cover rounded-xl' src={photo_url} alt={toy_name} />
        </figure>
      </LazyLoad>
      <div className='border-t border-slate-300 my-2 mb-1'></div>
      <div className="flex-1 p-4 pt-4 pb-0">
        <h3 className='text-center text-lg text-slate-700 font-bold'>{toy_name}</h3>
        <p className='font-semibold text-sm text-center mt-3 mb-2 text-slate-600'>Quantity: 25</p>
      </div>
      <div className='border-t border-slate-300 my-4'></div>
      <div className="p-4 pt-0">
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Rating style={{ maxWidth: 90 }} value={rating} readOnly />
            <p className='text-sm leading-none self-end'> {rating}</p>
          </div>
          <div className='flex items-center text-sm gap-2'>
            <FaMoneyBillAlt /> <span> ${price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MathToys;