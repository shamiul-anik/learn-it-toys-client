import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from "react";
import LanguageToys from "./LanguageToys";
import MathToys from './MathToys';
import ScienceToys from './ScienceToys';


const ShopByCategory = () => {

  const [allToys, setAllToys] = useState([]);

  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    fetch('https://learn-it-toys-server.vercel.app/toys')
    .then(res => res.json())
    .then(data => {
      if(tabIndex == 0) {
        const getLanguageData = data.filter(toy => toy.sub_category === "Language Toys");
        setAllToys(getLanguageData);
      }
      if(tabIndex == 1) {
        const getMathData = data.filter(toy => toy.sub_category === "Math Toys");
        setAllToys(getMathData);
      }
      if(tabIndex == 2) {
        const getScienceData = data.filter(toy => toy.sub_category === "Science Toys");
        setAllToys(getScienceData);
      }
      

    })
  }, [tabIndex]);

  
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

      <section className="max-w-7xl p-4 mt-4 md:mt-12 mx-auto border-2 border-slate-200 rounded-xl">

        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
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

    </section>

    </div>
  );
};

export default ShopByCategory;