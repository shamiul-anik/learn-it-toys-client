import { Link, useLoaderData } from "react-router-dom";
import { useTitle } from '../../hooks/useTitle';
import MyToysBanner from './MyToysBanner';
import { useContext, useEffect, useRef, useState } from "react";
import MySingleToy from "./MySingleToy";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const MyToys = () => {
  
  useTitle("My Toys");

  const { user } = useContext(AuthContext);

  const user_email = user?.email;

  // const loadedData = useLoaderData();
  // console.log(loadedData);
  const [myToys, setMyToys] = useState([]);
  const [limit, setLimit] = useState(20);
  const [sort, setSort] = useState("asc");
  const [search, setSearch] = useState("");
  const searchRef = useRef(null);

  useEffect(() => {
    fetch(`https://learn-it-toys-server.vercel.app/my-toys?email=${user_email}&limit=${limit}&sort=${sort}&search=${search}`)
    // fetch(`https://learn-it-toys-server.vercel.app/my-toys?email=${user_email}&limit=${limit}&sort=${sort}`)
      .then(res => res.json())
      .then(data => {
        setMyToys(data);
      })
    // console.log("My Toys");
  }, [limit, user_email, sort, search]);

  const handleDelete = (id)=> {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(id);

        fetch(`https://learn-it-toys-server.vercel.app/delete/${id}`, {
          method: "DELETE",
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Toy data has been deleted.',
                'success'
              )
              const remainingToys = myToys.filter(user => user._id !== id)
              setMyToys(remainingToys);
            }
          });
      }
    })
  };

  // const handleSearch = () => {
  //   console.log(searchRef.current.value);
  //   setSearch(searchRef.current.value);
  // };



  return (
    <div>

      {/* My Toy Banner */}
      <MyToysBanner></MyToysBanner>

      <section className="max-w-7xl mx-auto mt-12 lg:mt-32 p-4 md:px-0">
        
        {/* Search */}
        <div className="flex gap-2 flex-col md:flex-row w-full mx-auto md:w-3/4">
          <label htmlFor="search" className="sr-only">Search by Toy Name</label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input ref={searchRef} onChange={()=>setSearch(searchRef.current.value)} type="text" id="search" name="search" className="block w-full p-2 pl-10 text-sm text-slate-800 border border-slate-300 rounded-lg bg-slate-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search by toy name" />
          </div>
          {/* <div className="flex">
            <button onClick={handleSearch} type="button" className="w-full md:w-32 justify-center items-center text-white bg-gradient-to-br from-blue-500 to-blue-600 transition-all hover:duration-300 hover:from-blue-600 hover:to-blue-700 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-800 font-normal rounded-md text-md px-3 py-2 text-center">Search</button>
          </div> */}
        </div>

        <div className="grid gap-4 md:grid-cols-2 mb-6 mt-12">
          <div className="flex justify-center md:justify-start">
            <label className="label pl-0" htmlFor="numberOfRows">
              <span className="label-text text-md md:text-[16px]">Number of Rows</span>
            </label>
            <select value={limit} onChange={(e) => setLimit(e.target.value)} id="numberOfRows" name="sub_category" className="select select-bordered select-sm min-h-[42px] leading-tight !text-[14px] !font-normal">
              <option value="" disabled>Limit</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>

          <div className="flex justify-center md:justify-end">
            <label className="label pl-0" htmlFor="sortOrder">
              <span className="label-text text-md md:text-[16px]">Sort Order</span>
            </label>
            <select value={sort} onChange={(e) => setSort(e.target.value)} id="sortOrder" name="sub_category" className="select select-bordered select-sm min-h-[42px] leading-tight !text-[14px] !font-normal">
              <option value="" disabled>Select Order</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>

        <div className="relative overflow-x-auto">
          <table className="border-2 border-slate-200 w-full text-sm text-left text-gray-1000 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4">
                  Photo
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4">
                  Toy Details
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4">
                  Seller Details
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {
                myToys.map(myToy => <MySingleToy key={myToy._id} myToy={myToy} handleDelete={handleDelete}></MySingleToy>)
              }
            </tbody>
          </table>
        </div>


      </section>
    </div>
  );
};
export default MyToys;