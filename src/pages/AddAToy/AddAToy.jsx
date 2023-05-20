import { useContext, useState } from 'react';
import { useTitle } from '../../hooks/useTitle';
import { AuthContext } from '../../providers/AuthProvider';
import AddToyBanner from './AddToyBanner';
// import AddToyImage from '../../assets/images/add-a-toy.png';
import Lottie from "lottie-react";
import AddToy from '../../assets/lottie/add-toy.json';
import { toast } from 'react-toastify';


const AddAToy = () => {
  
  useTitle("Add a Toy");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  
  const [toyNameError, setToyNameError] = useState("");
  const [photoURLError, setPhotoURLError] = useState("");
  // const [sellerNameError, setSellerNameError] = useState("");
  const [sellerEmailError, setSellerEmailError] = useState("");
  const [subCategoryError, setSubCategoryError] = useState("");
  const [ratingError, setRatingError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [quantityError, setQuantityError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const { user } = useContext(AuthContext);

  const currentUserName = user?.displayName;
  const currentUserEmail = user?.email;

  const handleToyRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    
    const toy_name = form.toy_name.value;
    const photo_url = form.photo_url.value;
    const seller_name = currentUserName;
    const seller_email = currentUserEmail;
    // const seller_name = form.seller_name.value;
    // const seller_email = form.seller_email.value;
    const sub_category = form.sub_category.value;
    const rating = Number(form.rating.value);
    const price = Number(form.price.value);
    const quantity = Number(form.quantity.value);
    const description = form.description.value;
    
    console.log({ toy_name, photo_url, seller_name, seller_email, sub_category, rating, price, quantity, description });

    setSuccess("");
    setError("");

    setToyNameError("");
    setPhotoURLError("");
    // setSellerNameError("");
    setSellerEmailError("");
    setSubCategoryError("");
    setRatingError("");
    setPriceError("");
    setQuantityError("");
    setDescriptionError("");

    if (toy_name.length < 1) {
      setToyNameError("You must enter a toy name!");
      return;
    }
    if (photo_url.length < 1) {
      setPhotoURLError("You must enter a valid photo url!");
      return;
    }
    if (seller_email.length < 1) {
      setSellerEmailError("Email field can not be empty!");
      return;
    }
    if (sub_category.length < 1) {
      setSubCategoryError("You must choose a sub-category!");
      return;
    }
    if (typeof (rating) !== "number" || isNaN(rating)) {
      setRatingError("You must enter a numeric value!");
      return;
    }
    if (rating < 1) {
      setRatingError("This field can not be empty!");
      return;
    }
    if (rating > 5) {
      setRatingError("Rating point cannot exceed 5!");
      return;
    }
    if (typeof (price) !== "number" || isNaN(price)) {
      setPriceError("You must enter a numeric value!");
      return;
    }
    if (price < 1) {
      setPriceError("This field can not be empty!");
      return;
    }
    if (typeof (quantity) !== "number" || isNaN(quantity)) {
      setQuantityError("You must enter a numeric value!");
      return;
    }
    if (quantity < 1) {
      setQuantityError("This field can not be empty!");
      return;
    }
    if (description.length < 1) {
      setDescriptionError("This field can not be empty!");
      return;
    }
    else {
      const toy = { toy_name, photo_url, seller_name, seller_email, sub_category, rating, price, quantity, description };
      console.log("toy:", toy);

      fetch("http://localhost:5000/add-a-toy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(toy),
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.insertedId) {
            toast.success("Toy added successfully!")
          }
          else {
            toast.error("Something went wrong!")
          }
        });
    }
    
  };

  return (
    <div>

      {/* Add Toy Banner */}
      <AddToyBanner></AddToyBanner>

      <section className="flex flex-col md:flex-row gap-4 md:gap-12 items-center max-w-7xl mx-auto mt-6 lg:mt-20 p-4">
        <div>
          {/* <img className="w-full min-w-[350px] image-full" src={AddToyImage} alt="Add Toy Image" /> */}
          <Lottie className="max-w-xl mx-auto" animationData={AddToy} loop={true} />
        </div>

        <div className="flex max-w-3xl card card-compact w-full bg-base-100 px-0 md:px-4 py-2 md:py-7 box-shadow-custom">

          {/* <div className="flex-1 p-6 md:p-8 pt-5 pb-1 md:pb-2">
            <h3 className='text-slate-700 text-2xl my-2 font-bold text-center'>Enter Toy Details</h3>
          </div> */}

          {/* <div className='border-t border-slate-300 my-4 mx-6 md:mx-8'></div> */}

          {error && <p className="!px-6 md:!px-8 text-red-500 mt-2 text-center">{error}</p>}
          {success && <p className="!px-6 md:!px-8 text-green-600 mt-2 text-center">{success}</p>}

          <form onSubmit={handleToyRegistration}>
            <div className="!px-6 md:!px-8 !pt-2 card-body">
              <div className="form-control">
                <label className="label pl-0" htmlFor="toyName">
                  <span className="label-text text-md md:text-[16px]">Toy Name</span>
                </label>
                <input type="text" id="toyName" name="toy_name" placeholder="Enter toy name" className={toyNameError ? "input input-error input-sm py-5 text-[14px] focus:outline-red-200 focus:ring-red-500 focus:border-red-500" : "input input-bordered input-sm py-5 text-[14px]"} />
                {toyNameError && <p className="text-red-500 mt-2">{toyNameError}</p>}
              </div>

              <div className="form-control">
                <label className="label pl-0" htmlFor="photoURL">
                  <span className="label-text text-md md:text-[16px]">Photo URL</span>
                </label>
                <input type="text" id="photoURL" name="photo_url" placeholder="Enter toy's photo url" className={photoURLError ? "input input-error input-sm py-5 text-[14px] focus:outline-red-200 focus:ring-red-500 focus:border-red-500" : "input input-bordered input-sm py-5 text-[14px]"} />
                {photoURLError && <p className="text-red-500 mt-2">{photoURLError}</p>}
              </div>
              
              <div className="grid gap-x-4 gap-y-2 md:grid-cols-2">
                <div className="form-control">
                  <label className="label pl-0" htmlFor="sellerName">
                    <span className="label-text text-md md:text-[16px]">Seller Name</span>
                  </label>
                  <input type="text" id="sellerName" name="seller_name" placeholder="Seller's name" className="input input-bordered input-sm py-5 text-[14px]" defaultValue={currentUserName} readOnly />
                </div>

                <div className="form-control">
                  <label className="label pl-0" htmlFor="sellerEmail">
                    <span className="label-text text-md md:text-[16px]">Seller Email</span>
                  </label>
                  <input type="email" id="sellerEmail" name="seller_email" placeholder="Seller's email address" className={sellerEmailError ? "input input-error input-sm py-5 text-[14px] focus:outline-red-200 focus:ring-red-500 focus:border-red-500" : "input input-bordered input-sm py-5 text-[14px]"} defaultValue={currentUserEmail} readOnly />
                  {sellerEmailError && <p className="text-red-500 mt-2">{sellerEmailError}</p>}
                </div>

                <div className="form-control">
                  <label className="label pl-0" htmlFor="subCategory">
                    <span className="label-text text-md md:text-[16px]">Sub-category</span>
                  </label>
                  <select id="subCategory" name="sub_category" className={subCategoryError ? "select select-bordered border-red-500 select-sm min-h-[42px] leading-tight !text-[14px] !font-normal focus:outline-red-200 focus:ring-red-500 focus:border-red-500" : "select select-bordered select-sm min-h-[42px] leading-tight !text-[14px] !font-normal"}>
                    <option value="">Choose sub-category</option>
                    <option value="Language Toys">Language Toys</option>
                    <option value="Math Toys">Math Toys</option>
                    <option value="Science Toys">Science Toys</option>
                  </select>
                  {subCategoryError && <p className="text-red-500 mt-2">{subCategoryError}</p>}
                </div>

                <div className="form-control">
                  <label className="label pl-0" htmlFor="rating">
                    <span className="label-text text-md md:text-[16px]">Rating</span>
                  </label>
                  <input type="text" id="rating" name="rating" placeholder="Enter toy's rating" className={ratingError ? "input input-error input-sm py-5 text-[14px] focus:outline-red-200 focus:ring-red-500 focus:border-red-500" : "input input-bordered input-sm py-5 text-[14px]"} />
                  {ratingError && <p className="text-red-500 mt-2">{ratingError}</p>}
                </div>

                <div className="form-control">
                  <label className="label pl-0" htmlFor="price">
                    <span className="label-text text-md md:text-[16px]">Price</span>
                  </label>
                  <input type="text" id="price" name="price" placeholder="Enter toy's price" className={priceError ? "input input-error input-sm py-5 text-[14px] focus:outline-red-200 focus:ring-red-500 focus:border-red-500" : "input input-bordered input-sm py-5 text-[14px]"} />
                  {priceError && <p className="text-red-500 mt-2">{priceError}</p>}
                </div>

                <div className="form-control">
                  <label className="label pl-0" htmlFor="quantity">
                    <span className="label-text text-md md:text-[16px]">Quantity</span>
                  </label>
                  <input type="text" id="quantity" name="quantity" placeholder="Enter available quantity" className={quantityError ? "input input-error input-sm py-5 text-[14px] focus:outline-red-200 focus:ring-red-500 focus:border-red-500" : "input input-bordered input-sm py-5 text-[14px]"} />
                  {quantityError && <p className="text-red-500 mt-2">{quantityError}</p>}
                </div>
              </div>
              
              <div className="form-control">
                <label className="label pl-0" htmlFor="description">
                  <span className="label-text text-md md:text-[16px]">Description</span>
                </label>
                <textarea id="description" name="description" rows="6" className={descriptionError ? "input input-error input-sm py-5 text-[14px] h-auto focus:outline-red-200 focus:ring-red-500 focus:border-red-500" : "input input-bordered text-[14px] h-auto"} placeholder="Enter detail description"></textarea>
                {descriptionError && <p className="text-red-500 mt-2">{descriptionError}</p>}
              </div>
              
              <div className="form-control mt-3">
                <button type="submit" className="flex gap-3 mx-auto md:mx-0 w-full items-center justify-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-semibold rounded-lg text-lg px-8 py-2 text-center disabled:from-slate-300 disabled:to-slate-400 disabled:text-slate-600 tooltip tooltip-bottom">Add Toy</button>
              </div>
            </div>
          </form>
         
        </div>
      </section>
    </div>
  );
};

export default AddAToy;