import { useEffect, useState } from 'react';
import { useTitle } from '../../hooks/useTitle';
import HomeBanner from './HomeBanner';
import Newsletter from './Newsletter';
import LatestToys from './LatestToys';
import TrendingToys from './TrendingToys';
import Gallery from './Gallery';

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
      <HomeBanner></HomeBanner>

      {/* Gallery */}
      <Gallery></Gallery>
      
      {/* Latest Toys */}
      <LatestToys></LatestToys>
      
      {/* Trending Toys */}
      <TrendingToys></TrendingToys>

      {/* Discount */}
      

      {/* Subscribe to Our Newsletter */}
      <Newsletter></Newsletter>

    </div>
  );
};

export default Home;