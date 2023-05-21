import { Link, useLoaderData } from "react-router-dom";
import { useTitle } from '../../hooks/useTitle';
import AllToyBanner from './AllToyBanner';
import { useEffect, useState } from "react";
import SingleToy from "./SingleToy";

const AllToys = () => {
  
  useTitle("All Toys");

  // const loadedData = useLoaderData();
  // console.log(loadedData);
  const [allToys, setAllToys] = useState([]);
  const [limit, setLimit] = useState(20);
  const [sort, setSort] = useState("asc");
  // const [search, setSearch] = useState("");


  useEffect(() => {
    fetch(`http://localhost:5000/toys?limit=${limit}&sort=${sort}`)
      .then(res => res.json())
      .then(data => {
        setAllToys(data);
      })
    console.log("Test");
  }, [limit, sort]);

  const handleSearch = (event) => {
    event.preventDefault();
    console.log("Search button clicked!");
    // alert("Search button clicked!")
    // fetch(`http://localhost:5000/toys?search=${search}`)
    //   .then(res => res.json())
    //   .then(data => {
    //     setAllToys(data);
    //   })
  };
  
  console.log(allToys);

  return (
    <div>

      {/* All Toy Banner */}
      <AllToyBanner></AllToyBanner>

      <section className="max-w-7xl mx-auto mt-12 lg:mt-32 p-4 md:px-0">
        
        {/* Search */}
        <div className="w-full mx-auto md:w-1/2">
          <form className="flex gap-2 items-center">
            <label htmlFor="searchToyName" className="sr-only">Search by Toy Name</label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input onChange={(e) => setSearch(e.target.value)} type="text" id="searchToyName" className="block w-full p-2 pl-10 text-sm text-slate-800 border border-slate-300 rounded-lg bg-slate-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search by Toy Name" />
            </div>
            <Link>
              <button onClick={handleSearch} type="button" className="flex w-32 justify-center items-center text-white bg-gradient-to-br from-blue-500 to-blue-600 transition-all hover:duration-300 hover:from-blue-600 hover:to-blue-700 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-800 font-normal rounded-md text-md px-3 py-2 text-center">Search</button>
            </Link>
          </form>
        </div>

        <div className="mt-4 relative overflow-x-auto">
          <div className="flex w-full justify-between">
            <div className="form-control flex-row gap-2 mt-5 mb-6 mr-1">
              <label className="label pl-0" htmlFor="showData">
                <span className="label-text text-md md:text-[16px]">Number of Rows</span>
              </label>
              <select value={limit} onChange={(e) => setLimit(e.target.value)} id="showData" name="sub_category" className="select select-bordered select-sm min-h-[42px] leading-tight !text-[14px] !font-normal">
                <option value="" disabled>Limit</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
            <div className="form-control flex-row gap-2 mt-5 mb-6 mr-1">
              <label className="label pl-0" htmlFor="showData">
                <span className="label-text text-md md:text-[16px]">Sort Order</span>
              </label>
              <select value={sort} onChange={(e) => setSort(e.target.value)} id="showData" name="sub_category" className="select select-bordered select-sm min-h-[42px] leading-tight !text-[14px] !font-normal">
                <option value="" disabled>Select Order</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>
          </div>

          <table className="border-2 border-slate-200 w-full text-sm text-left text-gray-1000 dark:text-gray-400">
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
                allToys.map(toy => <SingleToy key={toy._id} toy={toy}></SingleToy>)
              }
            </tbody>
          </table>
        </div>


      </section>
    </div>
  );
};
export default AllToys;