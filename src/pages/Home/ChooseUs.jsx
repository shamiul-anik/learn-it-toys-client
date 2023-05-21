import { GiCardboardBox } from "react-icons/gi";
import { FaRegMoneyBillAlt, FaShieldAlt, FaTint } from 'react-icons/fa';
import { IoIosLeaf } from "react-icons/io";
import { MdAccessTime } from "react-icons/md";

const ChooseUs = () => {
  return (
    <section className="max-w-7xl mx-auto mt-12 lg:mt-32 p-4 md:px-0">
      <header>
        <h2 className="content-title text-center">Why Choose Us</h2>
      </header>
      <p className="content-description text-center mt-2">
        Discover the reasons for choosing our toys!
      </p>

      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 mt-8">

        <div className="card card-compact w-full bg-base-100 box-shadow-custom">
          <div className='px-2 pt-6 pb-2 flex justify-center'>
            <FaShieldAlt className='h-24 w-24 text-slate-600 aspect-square' />
          </div>
          <div className="p-2 mb-4 text-center">
            <h2 className="card-title justify-center text-xl font-bold text-slate-800">3 Years Warranty</h2>
          </div>
        </div>

        <div className="card card-compact w-full bg-base-100 box-shadow-custom">
          <div className='px-2 pt-6 pb-2 flex justify-center'>
            <FaTint className='h-24 w-24 text-slate-600 aspect-square' />
          </div>
          <div className="p-2 mb-4 text-center">
            <h2 className="card-title justify-center text-xl font-bold text-slate-800">Water Resistence</h2>
          </div>
        </div>

        <div className="card card-compact w-full bg-base-100 box-shadow-custom">
          <div className='px-2 pt-6 pb-2 flex justify-center'>
            <IoIosLeaf className='h-24 w-24 text-slate-600 aspect-square' />
          </div>
          <div className="p-2 mb-4 text-center">
            <h2 className="card-title justify-center text-xl font-bold text-slate-800">Non-Toxic & Washable</h2>
          </div>
        </div>

        <div className="card card-compact w-full bg-base-100 box-shadow-custom">
          <div className='px-2 pt-6 pb-2 flex justify-center'>
            <FaRegMoneyBillAlt className='h-24 w-24 text-slate-600 aspect-square' />
          </div>
          <div className="p-2 mb-4 text-center">
            <h2 className="card-title justify-center text-xl font-bold text-slate-800">Money Back Guarantee</h2>
          </div>
        </div>

        <div className="card card-compact w-full bg-base-100 box-shadow-custom">
          <div className='px-2 pt-6 pb-2 flex justify-center'>
            <MdAccessTime className='h-24 w-24 text-slate-600 aspect-square' />
          </div>
          <div className="p-2 mb-4 text-center">
            <h2 className="card-title justify-center text-xl font-bold text-slate-800">Timely <br /> Delivery</h2>
          </div>
        </div>

        <div className="card card-compact w-full bg-base-100 box-shadow-custom">
          <div className='px-2 pt-6 pb-2 flex justify-center'>
            <GiCardboardBox className='h-24 w-24 text-slate-600 aspect-square' />
          </div>
          <div className="p-2 mb-4 text-center">
            <h2 className="card-title justify-center text-xl font-bold text-slate-800">Best <br /> Packaging</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;