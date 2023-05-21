
const Testimonial = () => {
  return (
    <div>
      <section className="max-w-7xl mx-auto mt-12 lg:mt-32 p-4 md:px-0">
        <header>
          <h2 className="content-title text-center">Testimonial</h2>
        </header>
        <p className="content-description text-center mt-2">
          Check out what our customers says about us.
        </p>

        <div className="mt-4 md:mt-8 grid mb-8 border-2 border-slate-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Unlock the Power of Learning through Play</h3>
              <p className="my-4">"Learning has never been more enjoyable and interactive. LearnitToys offers a remarkable collection of educational toys that engage and inspire young minds. My child has truly blossomed, and I couldn't be happier with their progress. LearnitToys is a game-changer!"</p>
            </blockquote>
            <figcaption className="flex items-center justify-center space-x-3">
              <img className="rounded-full w-12 h-12" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture" />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Jese Leos</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Elementary School Teacher</div>
                </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-slate-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Fuel Your Child's Curiosity, One Toy at a Time</h3>
              <p className="my-4">"Discovering LearnitToys was a game-changer for our family. The educational toys they offer have ignited a passion for learning in our child. From science experiments to building blocks, each toy is carefully designed to nurture critical thinking and creativity. We couldn't be more thrilled with the impact LearnitToys has had on our child's educational journey."</p>
            </blockquote>
            <figcaption className="flex items-center justify-center space-x-3">
              <img className="rounded-full w-12 h-12" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture" />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Joseph McFall</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Parent and Software Engineer</div>
                </div>
            </figcaption>
          </figure>
        </div>

        
      </section>
    </div>
  );
};

export default Testimonial;