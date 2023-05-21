import { Link } from "react-router-dom";

const MySingleToy = ({ myToy }) => {

  const { _id, seller_name, toy_name, sub_category, price, quantity } = myToy;

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="px-2 py-3 text-center whitespace-nowrap">
        {seller_name}
      </td>
      <td className="px-2 py-3">
        {toy_name}
      </td>
      <td className="px-2 py-3 text-center">
        {sub_category}
      </td>
      <td className="px-2 py-3 text-center">
        ${price}
      </td>
      <td className="px-2 py-3 text-center">
        {quantity}
      </td>
      <td className="px-2 py-3 text-center">
        <Link to={`/toy/${_id}`}>
          <button type="button" className="flex w-32 justify-center items-center text-white bg-gradient-to-br from-blue-500 to-blue-600 transition-all hover:duration-300 hover:from-blue-600 hover:to-blue-700 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-800 font-normal rounded-md text-md px-3 py-2 text-center">View Details</button>
        </Link>
      </td>
    </tr>
  );
};

export default MySingleToy;