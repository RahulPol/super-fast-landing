import React from "react";

const Categories = () => {
  return (
    <>
      <h5 className="card-header">Categories</h5>
      <div className="card-body">
        <div className="row">
          <div className="col-lg-6">
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#">Web Design</a>
              </li>
              <li>
                <a href="#">HTML</a>
              </li>
              <li>
                <a href="#">Freebies</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#">JavaScript</a>
              </li>
              <li>
                <a href="#">CSS</a>
              </li>
              <li>
                <a href="#">Tutorials</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
