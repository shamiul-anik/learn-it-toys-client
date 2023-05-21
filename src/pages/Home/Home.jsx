import { useEffect, useState } from 'react';
import { useTitle } from '../../hooks/useTitle';
import HomeBanner from './HomeBanner';
import Newsletter from './Newsletter';
import LatestToys from './LatestToys';
import TrendingToys from './TrendingToys';
import Gallery from './Gallery';
import Testimonial from './Testimonial';
import Discount from './Discount';
import ChooseUs from './ChooseUs';

const Home = () => {
  
  useTitle("Home");

  // const toysLoadedData = useLoaderData();
  // const [toyDetails, setToyDetails] = useState([]);

  // useEffect(() => {
  //   fetch('')
  //   .then(res => res.json())
  //     .then(data => setToyDetails(data))
  // }, []);

  return (
    <div>

      {/* Home Page Banner */}
      <HomeBanner></HomeBanner>

      {/* Gallery */}
      <Gallery></Gallery>
      
      {/* Latest Toys */}
      <LatestToys></LatestToys>
      
      {/* Trending Toys */}
      <TrendingToys></TrendingToys>

      {/* Choose Us */}
      <ChooseUs></ChooseUs>
      
      {/* Testimonial */}
      <Testimonial></Testimonial>

      {/* Discount */}
      <Discount></Discount>

      {/* Subscribe to Our Newsletter */}
      <Newsletter></Newsletter>

    </div>
  );
};

export default Home;