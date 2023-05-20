import { useTitle } from "../../hooks/useTitle";
import ContactBanner from "./ContactBanner";
import Lottie from "lottie-react";
import ContactUsImage from '../../assets/lottie/contact-us.json';
import { BsSend } from "react-icons/bs";

const ContactUs = () => {

  useTitle("Contact Us");

  return (
    <div>

      {/* Contact Banner */}
      <ContactBanner></ContactBanner>

      <section className="flex flex-col md:flex-row gap-4 md:gap-16 items-center max-w-7xl mx-auto mt-6 lg:mt-20 p-4">
        <div>
          <Lottie className="max-w-xl mx-auto" animationData={ContactUsImage} loop={true} />
        </div>

        <div className="flex max-w-xl card card-compact w-full bg-base-100 px-0 md:px-4 py-2 md:py-7 box-shadow-custom">

          <div className="flex-1 p-6 md:p-8 pt-5 pb-1 md:pb-2">
            <h3 className='text-slate-700 text-2xl mb-2 font-bold text-center'>Get in touch with us</h3>
            <p className="text-slate-500 text-md font-medium text-center">We will get back to you as soon as we can.</p>
          </div>

          <div className='border-t border-slate-300 my-4 mx-6 md:mx-8'></div>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="!px-6 md:!px-8 !pt-2 card-body">
              <div className="form-control">
                <label className="label pl-0" htmlFor="name">
                  <span className="label-text text-md md:text-[16px]">Name</span>
                </label>
                <input type="text" id="name" name="name" placeholder="Enter your name" className="input input-bordered input-sm py-5 text-[14px]" />
              </div>

              <div className="form-control">
                <label className="label pl-0" htmlFor="email">
                  <span className="label-text text-md md:text-[16px]">Email</span>
                </label>
                <input type="text" id="email" name="email" placeholder="Enter your email address" className="input input-bordered input-sm py-5 text-[14px]" />
              </div>

              <div className="form-control">
                <label className="label pl-0" htmlFor="message">
                  <span className="label-text text-md md:text-[16px]">Message</span>
                </label>
                <textarea id="message" name="message" rows="6" className="input input-bordered text-[14px] h-auto" placeholder="Enter your message"></textarea>
              </div>

              <div className="form-control mt-3">
                {/* <button type="submit" className="flex gap-3 mx-auto md:mx-0 w-full items-center justify-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-semibold rounded-lg text-lg px-8 py-2 text-center disabled:from-slate-300 disabled:to-slate-400 disabled:text-slate-600 tooltip tooltip-bottom">Send Message</button> */}
                <button className="relative flex w-100 items-center justify-center p-0.5 overflow-hidden text-lg font-semibold text-blue-700 rounded-lg group bg-gradient-to-br from-blue-600 to-blue-500 group-hover:from-blue-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                  <span className="flex items-center justify-center w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    <BsSend className="mr-2 self-center" /> Send Message
                  </span>
                </button>
              </div>
            </div>
          </form>

        </div>
      </section>
      
    </div>
  );
};

export default ContactUs;