import { Accordion } from 'flowbite-react';
import { useTitle } from '../../hooks/useTitle';
import AboutBanner from './AboutBanner';
import { Link } from 'react-router-dom';

const About = () => {

	useTitle("About");
	
	return (
		<div>
			{/* About Us Banner */}
			<AboutBanner></AboutBanner>

			<section className="max-w-7xl mx-auto mt-12 lg:mt-20 p-4 text-slate-700 text-justify">
				<div>
					<header>
						<h2 className="content-title text-center">Interested to Know More About Us?</h2>
					</header>
					<p className="content-description text-center mb-8">
						Check for finding out more information!
					</p>
				</div>
				<div>
					<div className='border-2 border-slate-200 rounded-xl p-4 md:p-8'>
						<header>
							<h3 className='text-xl'>Welcome to <span className='font-bold text-blue-600'>LearnitToys</span>!</h3>
						</header>
						<div>
							<p className='mt-4'>At LearnitToys, we believe that learning should be an exciting and enriching experience for children. We are passionate about providing high-quality educational and learning toys that inspire creativity, critical thinking, and a love for knowledge.</p>
							<p className='mt-4'>Our mission is to empower children through play, offering a wide range of educational toys carefully curated to support their cognitive, social, and emotional development. Whether it's exploring science, engineering, mathematics, or language skills, we have the perfect toy to engage young minds and foster a lifelong love for learning.</p>
							<p className='mt-4'>What sets LearnitToys apart is our commitment to quality and educational value. We meticulously select each toy, ensuring they meet rigorous standards for safety, durability, and educational effectiveness. Our team of experts carefully evaluates every product to ensure it aligns with our educational philosophy and provides a meaningful learning experience.</p>
							<p className='mt-4'>We understand the importance of play in a child's development, and that's why our toys are designed to be engaging, interactive, and fun. We believe that children learn best when they are actively involved and having a great time. With LearnitToys, you can rest assured that your child will be engaged in hands-on learning experiences that spark their curiosity and imagination.</p>
							<p className='mt-4'>We also prioritize customer satisfaction and strive to provide exceptional service. Our knowledgeable team is here to assist you in finding the perfect educational toy for your child, answering any questions you may have, and ensuring your shopping experience with LearnitToys is seamless and enjoyable.</p>
							<p className='mt-4'>Join us on this educational journey and unlock the endless possibilities for your child's growth and development. Explore our collection of educational and learning toys today and give your child the gift of learning through play.</p>
							<p className='mt-4'>Discover, learn, and play with LearnitToys - Where Education Meets Fun!</p>
						</div>
					</div>
				</div>

				<div className='mt-16 md:mt-24'>
					<header>
						<h2 className="content-title text-center">Frequently Asked Questions (FAQs)</h2>
					</header>
					<p className="content-description text-center mb-10">
						Are you looking for some answers? Check for finding out more information!
					</p>
				</div>
				<Accordion className='max-w-7xl mx-auto mb-4 md:mb-8'>
					<Accordion.Panel>
						<Accordion.Title>
							Are the toys at LearnitToys safe for children?
						</Accordion.Title>
						<Accordion.Content>
							<p className="mb-2 text-gray-500 dark:text-gray-400">
								Absolutely! At LearnitToys, safety is our top priority. We carefully select toys that meet stringent safety standards and regulations. Each toy undergoes thorough testing to ensure it is free from harmful substances and designed with child safety in mind.
							</p>
						</Accordion.Content>
					</Accordion.Panel>
					<Accordion.Panel>
						<Accordion.Title>
							How can educational toys benefit my child's learning?
						</Accordion.Title>
						<Accordion.Content>
							<p className="mb-2 text-gray-500 dark:text-gray-400">
								Educational toys play a crucial role in a child's development. They foster essential skills such as problem-solving, creativity, critical thinking, and language development. These toys provide hands-on experiences that engage children actively, making learning fun and meaningful.
							</p>
						</Accordion.Content>
					</Accordion.Panel>
					<Accordion.Panel>
						<Accordion.Title>
							What age range do the educational toys cater to?
						</Accordion.Title>
						<Accordion.Content>
							<p className="mb-2 text-gray-500 dark:text-gray-400">
								LearnitToys offers a wide range of educational toys suitable for various age groups, starting from infants to older children. Our collection is carefully categorized, making it easier for you to find toys that align with your child's age and developmental stage.
							</p>
						</Accordion.Content>
					</Accordion.Panel>
					<Accordion.Panel>
						<Accordion.Title>
							Can you recommend toys for specific subjects or skills?
						</Accordion.Title>
						<Accordion.Content>
							<p className="mb-2 text-gray-500 dark:text-gray-400">
								Certainly! We have a diverse selection of toys that cater to various subjects and skills. Whether you're looking for STEM toys, language development tools, or arts and crafts materials, we have you covered. Explore our website or reach out to our customer support for personalized recommendations.
							</p>
						</Accordion.Content>
					</Accordion.Panel>
					<Accordion.Panel>
						<Accordion.Title>
							Do you offer gift options and wrapping services?
						</Accordion.Title>
						<Accordion.Content>
							<p className="mb-2 text-gray-500 dark:text-gray-400">
								Yes, we understand the joy of gifting. LearnitToys provides gift options and wrapping services for your convenience. Simply select the desired gift-wrapping option during the checkout process, and we'll ensure your order is beautifully packaged for that special occasion.
							</p>
						</Accordion.Content>
					</Accordion.Panel>
					<Accordion.Panel>
						<Accordion.Title>
							What if I have a question or need assistance with my order?
						</Accordion.Title>
						<Accordion.Content>
							<p className="mb-2 text-gray-500 dark:text-gray-400">
								We're here to help! If you have any questions or require assistance with your order, our friendly customer support team is just a click or call away. Feel free to reach out to us, and we'll be more than happy to assist you.
							</p>
						</Accordion.Content>
					</Accordion.Panel>
				</Accordion>
				<div>
					Have a question that's not listed here?
					<Link
						to="/contact"
						rel="nofollow"
						className="text-blue-600 hover:underline dark:text-blue-500"
					> Contact
					</Link> us, and we'll be delighted to provide you with the information you need.
				</div>
			</section>
		</div>
	);
};

export default About;