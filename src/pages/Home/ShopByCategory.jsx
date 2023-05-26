import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useEffect, useState } from "react";
import LanguageToys from "./LanguageToys";
import MathToys from './MathToys';
import ScienceToys from './ScienceToys';
import 'react-tabs/style/react-tabs.css';


const ShopByCategory = () => {

  const [allToys, setAllToys] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);
  const [indexValue, setIndexValue] = useState(0);

  useEffect(() => {
    // fetch(`https://learn-it-toys-server.vercel.app/toys/${index}`)
    fetch(`https://learn-it-toys-server.vercel.app/sub-categories?tabIndex=${indexValue+1}`)
      .then(res => res.json())
      .then(data => {
        setAllToys(data);
        setTabIndex(indexValue);
        console.log(data);
      })
  }, [indexValue]);

  const handleTabSelect = (index) => {
    setIndexValue(index);
  };
  

  
  return (
    <div className="mt-16 md:mt-24">

      <div className="max-w-7xl p-4 mx-auto">
        <header data-aos="fade-down">
          <h2 className="content-title text-center">Shop By Category</h2>
        </header>
        <p className="content-description text-center mt-2">
          Find out about the different sub-categories of toys in LearnitToys.
        </p>
      </div>

      <section className="max-w-7xl min-h-[620px] p-4 mt-4 md:mt-8 mx-auto">
        <div className='p-4 md:p-8 border-2 border-slate-200 rounded-xl'>
          <Tabs selectedIndex={tabIndex} onSelect={handleTabSelect}>
            <TabList>
              <Tab>Language Toys</Tab>
              <Tab>Math Toys</Tab>
              <Tab>Science Toys</Tab>
            </TabList>

            <TabPanel>
              <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mx-2 mb-2">
                {
                  allToys.map((toyData) => <LanguageToys key={toyData._id} toyData={toyData}></LanguageToys>)
                }
              </div>
            </TabPanel>
            <TabPanel>
              <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mx-2 mb-2">
                {
                  allToys.map((toyData) => <MathToys key={toyData._id} toyData={toyData}></MathToys>)
                }
              </div>
            </TabPanel>
            <TabPanel>
              <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mx-2 mb-2">
                {
                  allToys.map((toyData) => <ScienceToys key={toyData._id} toyData={toyData}></ScienceToys>)
                }
              </div>
            </TabPanel>
          </Tabs>
        </div>
    </section>

    </div>
  );
};

export default ShopByCategory;