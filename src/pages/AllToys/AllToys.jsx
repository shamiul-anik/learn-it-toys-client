import { useLoaderData } from "react-router-dom";
import { useTitle } from '../../hooks/useTitle';
import AllToyBanner from './AllToyBanner';
import { useState } from "react";
import SingleToy from "./SingleToy";

const AllToys = () => {
  
  useTitle("All Toys");

  const loadedData = useLoaderData();

  const[allToys, setAllToys] = useState(loadedData);
  console.log(allToys);

  return (
    <div>

      {/* All Toy Banner */}
      <AllToyBanner></AllToyBanner>

      <section className="max-w-7xl mx-auto mt-12 lg:mt-32 p-4 md:px-0">
        <div className="relative overflow-x-auto">
          <table className="border-2 border-slate-200 w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4">
                  Seller Name
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4">
                  Toy Name
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4">
                  Sub-category
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4">
                  Price
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4">
                  Available Quantity
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {
                allToys?.map(toy => <SingleToy key={toy._id} toy={toy}></SingleToy>)
              }
            </tbody>
          </table>
        </div>


      </section>
    </div>
  );
};
export default AllToys;