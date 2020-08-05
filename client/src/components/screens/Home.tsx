import React from "react";

import Header from "../parts/Header";
import Sidebar from "../parts/Sidebar";
import TrendingPosts from "../parts/TrendingPosts";
import FreshPosts from "../parts/FreshPosts";

const Home = () => {
  return (
    <>
      <Header />
      {/* Page Content  */}
      <div className="home-container row">
        {/* Posts Entries Column  */}
        <div className="col-md-10">
          {/* Trending Posts  */}
          <TrendingPosts />
          {/* Trending Posts End */}

          {/* Fresh Posts  */}
          <FreshPosts />
          {/* Fresh Posts End */}
        </div>
        {/* Posts Entries Column End */}
        {/* Sidebar Widgets Column  */}
        <div className="col-md-2">
          <Sidebar />
        </div>
        {/* Sidebar Widgets Column End */}
      </div>
    </>
  );
};

export default Home;
