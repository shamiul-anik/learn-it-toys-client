import { Link, useLoaderData } from "react-router-dom";
import { useTitle } from '../../hooks/useTitle';
import MyToysBanner from './MyToysBanner';
import { useContext, useEffect, useState } from "react";
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

  useEffect(() => {
    fetch(`https://learn-it-toys-server.vercel.app/my-toys?email=${user_email}&limit=${limit}&sort=${sort}`)
      .then(res => res.json())
      .then(data => {
        setMyToys(data);
      })
    // console.log("My Toys");
  }, [limit, user_email, sort]);

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


  return (
    <div>

      {/* My Toy Banner */}
      <MyToysBanner></MyToysBanner>

      <section className="max-w-7xl mx-auto mt-12 lg:mt-32 p-4 md:px-0">
        
        {/* Search Here */}
        <div className="grid gap-4 md:grid-cols-2 mb-6 mt-8">
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