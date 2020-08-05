import React from "react";

const FreshPosts = () => {
  return (
    <>
      <section className="fresh-posts-section">
        <h1 className="my-4">Fresh Posts</h1>
        <div className="fresh-post-wrapper">
          <div className="fresh-posts">
            <div className="post">
              <div className="post-title">
                <h5>Title1</h5>
              </div>
              <img
                className="card-img-top"
                src="http://placehold.it/750x500"
                alt="Card image cap"
              />
            </div>
            <div className="post">
              <div className="post-title">
                <h5>Title2</h5>
              </div>
              <img
                className="card-img-top"
                src="http://placehold.it/750x500"
                alt="Card image cap"
              />
            </div>
            <div className="post">
              <div className="post-title">
                <h5>Title3</h5>
              </div>
              <img
                className="card-img-top"
                src="http://placehold.it/750x500"
                alt="Card image cap"
              />
            </div>
            <div className="post">
              <div className="post-title">
                <h5>Title4</h5>
              </div>
              <img
                className="card-img-top"
                src="http://placehold.it/750x500"
                alt="Card image cap"
              />
            </div>
            <div className="post">
              <div className="post-title">
                <h5>Title5</h5>
              </div>
              <img
                className="card-img-top"
                src="http://placehold.it/750x500"
                alt="Card image cap"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FreshPosts;
