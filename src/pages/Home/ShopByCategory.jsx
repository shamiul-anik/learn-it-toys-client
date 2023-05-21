import { Tabs } from "flowbite-react";
import { useEffect, useState } from "react";
import LanguageToys from "./LanguageToys";

const ShopByCategory = () => {


  const [allToys, setAllToys] = useState([]);
  const [languageToys, setLanguageToys] = useState([]);
  const [mathToys, setMathToys] = useState([]);
  const [scienceToys, setScienceToys] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:5000/toys')
  //   .then(res => res.json())
  //   .then(data => {
  //     // setAllToys(data);
  //     // const data1 = data;
  //     // const data2 = data;
  //     // const data3 = data;

  //     const getLanguageData = data.filter(toy => toy.sub_category === "Language Toys");
  //     setLanguageToys(getLanguageData);

  //     // const getMathData = data2.filter(toy => toy.sub_category === "Math Toys");
  //     // setMathToys(getMathData);

  //     // const getScienceData = data3.filter(toy => toy.sub_category === "Science Toys");
  //     // setScienceToys(getScienceData);
  //   })
  // }, []);

  
  return (
    <div className="mt-16 md:mt-24">

      <div className="max-w-7xl p-4 mx-auto">
        <header>
          <h2 className="content-title text-center">Shop By Category</h2>
        </header>
        <p className="content-description text-center mt-2">
          Find out about the different sub-categories of toys in LearnitToys.
        </p>
      </div>

      <section className="max-w-7xl p-4 mt-4 md:mt-12 mx-auto border-2 border-slate-200 rounded-xl">
        <Tabs.Group
        aria-label="Default tabs"
        style="default"
      >
        <Tabs.Item
          active={true}
          title="Language Toys"
        >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mx-2 mb-2">
              {
                languageToys.map((data) => <LanguageToys key={data._id} data={data}></LanguageToys>)
              }
            </div>
        </Tabs.Item>
        <Tabs.Item title="Math Toys">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mx-2 mb-2">
              {
                mathToys.map((dataNew2, index) => <LanguageToys key={index} dataNew2={dataNew2}></LanguageToys>)
              }
            </div>
        </Tabs.Item>
        <Tabs.Item title="Science Toys">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mx-2 mb-2">
              {
                scienceToys.map((dataNew3, index) => <LanguageToys key={index} dataNew3={dataNew3}></LanguageToys>)
              }
            </div>
        </Tabs.Item>
          {/*
          <Tabs.Item title="Contacts">
            Contacts content
          </Tabs.Item>
          <Tabs.Item
            disabled={true}
            title="Disabled"
          >
            Disabled content
          </Tabs.Item> */}
      </Tabs.Group>
    </section>

    </div>
  );
};

export default ShopByCategory;