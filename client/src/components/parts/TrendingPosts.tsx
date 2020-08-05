import React from "react";

const TrendingPosts = () => {
  return (
    <>
      <section className="trending-posts-section">
        <h1 className="my-4">Trending Posts</h1>
        <div className="trending-post-wrapper">
          <div className="top-trending-post">
            <div className="post">
              <div className="post-title">
                <h3>Title1</h3>
              </div>
              <img
                className="card-img-top"
                src="http://placehold.it/750x300"
                alt="Card image cap"
              />
            </div>
          </div>
          <div className="rest-trending-posts">
            <div className="post">
              <div className="post-title">
                <h5>Title2</h5>
              </div>
              <img
                className="card-img-top"
                src="http://placehold.it/750x300"
                alt="Card image cap"
              />
            </div>
            <div className="post">
              <div className="post-title">
                <h5>Title3</h5>
              </div>
              <img
                className="card-img-top"
                src="http://placehold.it/750x300"
                alt="Card image cap"
              />
            </div>
            <div className="post">
              <div className="post-title">
                <h5>Title4</h5>
              </div>
              <img
                className="card-img-top"
                src="http://placehold.it/750x300"
                alt="Card image cap"
              />
            </div>
            <div className="post">
              <div className="post-title">
                <h5>Title5</h5>
              </div>
              <img
                className="card-img-top"
                src="http://placehold.it/750x300"
                alt="Card image cap"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrendingPosts;
