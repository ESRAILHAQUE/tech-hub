import Banner from "../Banner/Banner";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TeachersPanel from "../../../Components/TeachersPanel/TeachersPanel";
import './Home.css';
import Instructor from "../../../Components/Instructor/Instructor";
import Works from "../../../Components/Works/Works";
import Features from "../../../Components/Features/Features";
import Slider from "../../../Components/Slider/Slider";
import Form from "../../../Components/Form/Form";
import Benefits from "../../../Components/Benefits/Benefits";

function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <div className=" ">
        {/* Tab section  */}
        <div className=" my-14 max-w-[1440px] mx-auto px-4 lg:px-28 md:px-14 ">
          <Tabs>
            <TabList className="flex justify-center w-full rounded-t-lg ">
              <Tab
                className="tab-class py-2  cursor-pointer text-primary-color  border border-primary-color w-full rounded-t-lg   focus:outline-none  text-center font-semibold"
                selectedClassName="bg-primary-color text-white bg-opacity-60"
              >
                Post a Job
              </Tab>
              <Tab
                className="tab-class py-2  cursor-pointer text-primary-color  border border-primary-color w-full rounded-t-lg   focus:outline-none  text-center font-semibold"
                selectedClassName="bg-primary-color text-white bg-opacity-60"
              >
                Find a Dream Job
              </Tab>
            </TabList>

            <TabPanel>
              <div className="bg-primary-color p-4 lg:p-8 w-full rounded-b-lg">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Post a new job offer"
                    name=""
                    className="input placeholder-primary-color w-full focus:outline-none p-2 rounded"
                  />
                  <button className="btn text-primary-color md:px-6 lg:px-12 bg-white rounded">
                    Post
                  </button>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="bg-primary-color p-4 lg:p-8 w-full rounded-b-lg">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Search a Dream Job"
                    name=""
                    className="input placeholder-primary-color w-full focus:outline-none p-2 rounded"
                  />
                  <button className="btn text-primary-color md:px-6 lg:px-12 bg-white rounded">
                    Search
                  </button>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>

        {/*Teachers Panel  */}
        <TeachersPanel></TeachersPanel>
        <Benefits></Benefits>
        <Instructor></Instructor>
      </div>
      <Works></Works>
      <Features></Features>
      <Slider></Slider>
      {/* <Form></Form> */}
    </div>
  );
}
export default Home;
