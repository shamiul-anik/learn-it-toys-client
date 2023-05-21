import { Link } from "react-router-dom";

const MySingleToy = ({ myToy, handleDelete }) => {

  const { _id, photo_url, toy_name, seller_name, seller_email, sub_category, rating, price, quantity, description } = myToy;

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="px-4 py-4">
        <div className="bg-slate-50 h-full object-cover w-56">
          <img className="w-full object-cover" src={photo_url} alt={toy_name} />
        </div>
      </td>
      <td className="px-2 py-3 min-w-[550px]">
        <p><span className="font-bold underline underline-offset-4">Toy Name:</span> {toy_name}</p>
        <p className="mt-2"><span className="font-bold underline underline-offset-4">Sub Category:</span> {sub_category}</p>
        <p className="mt-2"><span className="font-bold underline underline-offset-4">Rating:</span> {rating}</p>
        <p className="mt-2"><span className="font-bold underline underline-offset-4">Price:</span> ${price}</p>
        <p className="mt-2"><span className="font-bold underline underline-offset-4">Quantity:</span> {quantity}</p>
        <p className="mt-2 text-justify"><span className="font-bold underline underline-offset-4">Description:</span> {description}</p>
      </td>
      <td className="px-4 py-4 whitespace-nowrap">
        <p><span className="font-bold underline underline-offset-4">Seller Name:</span> {seller_name}</p>
        <p className="mt-2"><span className="font-bold underline underline-offset-4">Seller Email:</span> {seller_email}</p>
      </td>
      <td className="px-4 py-4 text-center">
        <Link to={`/update/${_id}`}>
          <button type="button" className="flex w-24 justify-center items-center text-white bg-gradient-to-br from-blue-500 to-blue-600 transition-all hover:duration-300 hover:from-blue-600 hover:to-blue-700 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-800 font-normal rounded-md text-md px-3 py-2 text-center">Update</button>
        </Link>
        <Link onClick={() => handleDelete(`/delete/${_id}`)}>
          <button type="button" className="mt-2 flex w-24 justify-center items-center text-white bg-gradient-to-br from-red-500 to-red-600 transition-all hover:duration-300 hover:from-red-600 hover:to-red-700 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-red-200 dark:focus:ring-red-800 font-normal rounded-md text-md px-3 py-2 text-center">Delete</button>
        </Link>
      </td>
    </tr>
  );
};

export default MySingleToy;