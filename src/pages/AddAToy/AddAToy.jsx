import { useContext, useState } from 'react';
import { useTitle } from '../../hooks/useTitle';
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import AddToyBanner from './AddToyBanner';
import AddToyImage from '../../assets/images/add-a-toy.png';
import { toast } from 'react-toastify';


const AddAToy = () => {
  
  useTitle("Add a Toy");

  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  // const [emailError, setEmailError] = useState("");
  // const [passwordError, setPasswordError] = useState("");

  const { user } = useContext(AuthContext);

  const currentUserName = user?.displayName;
  const currentUserEmail = user?.email;

  
  // const [showPassword, setShowPassword] = useState(false);
  // const [acceptTerms, setAcceptTerms] = useState(false);

  const handleToyRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    console.log(name, photoURL, email, password)

    setSuccess("");
    setError("");
    setEmailError("");
    setPasswordError("");

    if (email.length < 1) {
      setEmailError("Email field can not be empty!");
      return;
    }

    if (password.length < 1) {
      setPasswordError("Password field can not be empty!");
      return;
    }

    if (password.length < 6) {
      setPasswordError("Password should be at least 6 characters long!");
      return;
    }

    
  };

  return (
    <div>

      {/* Blog Banner */}
      <AddToyBanner></AddToyBanner>

      <section className="flex flex-col md:flex-row gap-4 md:gap-12 items-center max-w-7xl mx-auto mt-6 lg:mt-20 p-4">
        <div>
          <img className="w-full image-full" src={AddToyImage} alt="Add Toy Image" />
        </div>

        {/* <div className="divider divider-horizontal"></div> */}

        <div className="flex card card-compact w-full bg-base-100">

          {/* <div className="flex-1 p-6 md:p-8 pt-5 pb-1 md:pb-2">
            <h3 className='text-slate-700 text-2xl my-2 font-bold text-center'>Enter Toy Details</h3>
          </div> */}

          {/* <div className='border-t border-slate-300 my-4 mx-6 md:mx-8'></div> */}

          <p className="!px-6 md:!px-8 text-red-500 mt-2 text-center">{error}</p>
          <p className="!px-6 md:!px-8 text-green-600 mt-2 text-center">{success}</p>

          <form onSubmit={handleToyRegistration}>
            <div className="!px-6 md:!px-8 !pt-2 card-body">
              <div className="form-control">
                <label className="label pl-0" htmlFor="toyName">
                  <span className="label-text text-md md:text-[16px]">Toy Name</span>
                </label>
                <input type="text" id="toyName" name="toy_name" placeholder="Enter toy name" className="input input-bordered  input-sm py-5 text-[14px]" />
                <p className="text-red-500 mt-2"></p> 
              </div>

              <div className="form-control">
                <label className="label pl-0" htmlFor="photoURL">
                  <span className="label-text text-md md:text-[16px]">Photo URL</span>
                </label>
                <input type="text" id="photoURL" name="photo_url" placeholder="Enter toy's photo url" className="input input-bordered input-sm py-5 text-[14px]" />
                <p className="text-red-500 mt-2"></p>
              </div>
              
              <div className="grid gap-6 mb-4 md:mb-6 md:grid-cols-2">
                <div className="form-control">
                  <label className="label pl-0" htmlFor="sellerName">
                    <span className="label-text text-md md:text-[16px]">Seller Name</span>
                  </label>
                  <input type="text" id="sellerName" name="seller_name" placeholder="Seller's name" className="input input-bordered input-sm py-5 text-[14px]" defaultValue={currentUserName} />
                </div>

                <div className="form-control">
                  <label className="label pl-0" htmlFor="sellerEmail">
                    <span className="label-text text-md md:text-[16px]">Seller Email</span>
                  </label>
                  <input type="email" id="sellerEmail" name="seller_email" placeholder="Seller's email address" className="input input-bordered input-sm py-5 text-[14px]" defaultValue={currentUserEmail} />
                </div>

                <div className="form-control">
                  <label className="label pl-0" htmlFor="subCategory">
                    <span className="label-text text-md md:text-[16px]">Sub-category</span>
                  </label>
                  <select id="subCategory" name="sub_category" className="select select-bordered select-sm min-h-[42px] leading-tight !text-[14px] !font-normal">
                    <option selected>Choose sub-category</option>
                    <option value="language_toys">Language Toys</option>
                    <option value="math_toys">Math Toys</option>
                    <option value="science_toys">Science</option>
                  </select>
                </div>

                <div className="form-control">
                  <label className="label pl-0" htmlFor="rating">
                    <span className="label-text text-md md:text-[16px]">Rating</span>
                  </label>
                  <input type="text" id="rating" name="rating" placeholder="Enter toy's rating" className="input input-bordered input-sm py-5 text-[14px]" />
                </div>

                <div className="form-control">
                  <label className="label pl-0" htmlFor="price">
                    <span className="label-text text-md md:text-[16px]">Price</span>
                  </label>
                  <input type="text" id="price" name="price" placeholder="Enter toy's price" className="input input-bordered input-sm py-5 text-[14px]" />
                </div>

                <div className="form-control">
                  <label className="label pl-0" htmlFor="quantity">
                    <span className="label-text text-md md:text-[16px]">Quantity</span>
                  </label>
                  <input type="text" id="quantity" name="quantity" placeholder="Enter available quantity" className="input input-bordered  input-sm py-5 text-[14px]" />
                </div>
              </div>
              
              <div className="form-control">
                <label className="label pl-0" htmlFor="description">
                  <span className="label-text text-md md:text-[16px]">Description</span>
                </label>
                <textarea id="description" name="description" rows="6" className="input input-bordered h-auto" placeholder="Enter detail description"></textarea>
              </div>
              
              <div className="form-control mt-2">
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