import React from "react";
import LeftNav from "../LeftNav/LeftNav";
import HomeCarousel from "./HomeCarousel";
import Gallery from "./Gallery";
import Sponsor from "../../Components/Sponsor";
import Feedback from "./Feedback";
import Customer from "./Customer";
import Statistics from "./Statistics";
import Policy from "./Policy";

const Home = () => {
  return (
    <div>
      <div
        className="hero h-full bg-cover  "
        style={{
          backgroundImage: `url("https://i.ibb.co/xh6yx86/mohit-suthar-0u-ZMa-Y-Ho4-unsplash.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-7xl font-bold font-serif  italic">
              {" "}
              <span className="">Sports</span> Car Hub
            </h1>
            <p className="mb-5 text-xl italic text-stone-50  font-extralight ">
              Welcome to our car toys shop! We specialize in providing a wide
              variety of high-quality toy cars for kids of all ages. From
              classic cars to modern sports cars, we have something for
              everyone. Our goal is to provide a fun and exciting shopping
              experience while offering affordable prices and excellent customer
              service. Thank you for choosing our car toys shop for all your toy
              car needs!
            </p>
          </div>
        </div>
      </div>

      <Gallery></Gallery>
      <Feedback></Feedback>
      <Customer></Customer>
      <Sponsor></Sponsor>
      <HomeCarousel></HomeCarousel>
      <Statistics></Statistics>
    </div>
  );
};

export default Home;
