import { useTitle } from '../../hooks/useTitle';
import ViewToyBanner from './ViewToyBanner';
import UpdateToyImage from '../../assets/images/update-a-toy.png';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';


const ViewToy = () => {

  useTitle("View a Toy");

  const loadedToy = useLoaderData();
  const { photo_url, toy_name, seller_name, seller_email, sub_category, rating, price, quantity, description } = loadedToy;
  console.log(photo_url, toy_name);

  return (
    <div>

      {/* View Toy Banner */}
      <ViewToyBanner></ViewToyBanner>

      <div className='max-w-7xl mx-auto mt-4 lg:mt-12 '>
        <Link to="/all-toys" className="relative flex w-56 items-center justify-center p-0.5 overflow-hidden text-md font-semibold text-blue-700 rounded-lg group bg-gradient-to-br from-blue-600 to-blue-500 group-hover:from-blue-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="flex items-center justify-center w-full px-3 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-lg group-hover:bg-opacity-0">
            <FaArrowLeft className="mr-2 self-center" /> Back to All Toys
          </span>
        </Link>
      </div>

      <section className="flex flex-col md:flex-row gap-4 md:gap-16 items-center max-w-7xl mx-auto mt-4 lg:mt-8 p-4">
        <div>
          <img className="w-full min-w-[350px] max-w-xl rounded-xl image-full" src={loadedToy.photo_url ? loadedToy.photo_url : UpdateToyImage} alt={loadedToy?.photo_url ? "Toy Image" : "No Image Found!"} />
        </div>

        <div className="flex card card-compact w-full bg-base-100 px-0 md:px-4 py-2 md:py-7 border-2 border-slate-200">

          <div className="!px-6 md:!px-8 !pt-2 card-body">
            <div className="form-control">
              <label className="label pl-0" htmlFor="toyName">
                <span className="label-text text-lg md:text-xl font-semibold">Toy Name</span>
              </label>
              <p className='text-lg text-slate-500 mb-2'>{toy_name}</p>
            </div>

            <div className='divider my-0'></div>

            <div className="grid gap-x-4 gap-y-2 md:grid-cols-2">
              <div className="form-control">
                <label className="label pl-0" htmlFor="sellerName">
                  <span className="label-text text-lg md:text-xl font-semibold">Seller Name</span>
                </label>
                <p className='text-lg text-slate-500 mb-2'>{seller_name}</p>
              </div>

              <div className="form-control">
                <label className="label pl-0" htmlFor="sellerEmail">
                  <span className="label-text text-lg md:text-xl font-semibold">Seller Email</span>
                </label>
                <p className='text-lg text-slate-500 mb-2'>{seller_email}</p>
              </div>

              <div className="form-control">
                <label className="label pl-0" htmlFor="subCategory">
                  <span className="label-text text-lg md:text-xl font-semibold">Sub-category</span>
                </label>
                <p className='text-lg text-slate-500 mb-2'>{sub_category}</p>
              </div>

              <div className="form-control">
                <label className="label pl-0" htmlFor="rating">
                  <span className="label-text text-lg md:text-xl font-semibold">Rating</span>
                </label>
                <p className='text-lg text-slate-500 mb-2'>{rating}</p>
              </div>

              <div className="form-control">
                <label className="label pl-0" htmlFor="price">
                  <span className="label-text text-lg md:text-xl font-semibold">Price</span>
                </label>
                <p className='text-lg text-slate-500 mb-2'>{price}</p>
              </div>

              <div className="form-control">
                <label className="label pl-0" htmlFor="quantity">
                  <span className="label-text text-lg md:text-xl font-semibold">Quantity</span>
                </label>
                <p className='text-lg text-slate-500 mb-2'>{quantity}</p>
              </div>
            </div>

            <div className='divider my-0'></div>

            <div className="form-control">
              <label className="label pl-0" htmlFor="description">
                <span className="label-text text-lg md:text-xl font-semibold">Description</span>
              </label>
              <p className='text-lg text-slate-500 mb-2'>{description}</p>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default ViewToy;