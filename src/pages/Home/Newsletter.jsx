import { BsFillSendFill } from "react-icons/bs";

const Newsletter = () => {
  return (
    <section className="max-w-7xl mx-auto mt-12 lg:mt-20">
      <div>
        <header data-aos="fade-up">
          <h2 className="content-title text-center">Newsletter</h2>
        </header>
        <p className="content-description text-center mt-2" data-aos="fade-down">
          Stay in the loop by subscribing to our Newsletter!
        </p>
      </div>
      <div className="mx-4 p-6 lg:p-12 rounded-lg border-2 border-slate-200 mt-6">
        <p className='content-description text-center'>Sign up for our newsletter and be the first to know about the latest educational toys, exclusive offers, and exciting updates from LearnitToys. Our newsletter is packed with valuable insights, educational resources, and tips to enhance your child's learning journey.</p>
        <p className='content-description text-center mt-2'>Join our growing community of parents, educators, and toy enthusiasts who believe in the power of educational play. <br /> Simply enter your email address below and click 'Subscribe' to start receiving our informative and inspiring newsletter.</p>
        <p className='content-description text-center mt-2 mb-6'>Don't miss out on the opportunity to provide your child with the best educational toys and resources. <br /> <br /> Subscribe to the LearnitToys newsletter today!</p>
        <div className="relative mt-6 mb-3 md:mb-7 max-w-xl mx-auto">
          <input type="text" placeholder="Enter your email address" className="input input-bordered focus:border-slate-500 focus:ring-slate-500 outline:border-slate-500 w-full pr-16" />
          <button className="btn absolute top-0 right-0 rounded-l-none">
            <BsFillSendFill className='text-lg md:text-xl font-bold' />
            <span className='hidden md:block ml-2'> Subscribe</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;