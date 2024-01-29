import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../hooks/Auth";
const cardStyle={
 
  boxShadow: '2px 2px 4px 2px rgba(0, 0, 0, 0.2)',
  borderRadius: '2px solid black',
  // border-radius: '5px', // Note: You can't use hyphenated property names in inline styles
  zIndex: 10, // Remove quotes from the numeric value
  // backgroundColor: 'black',
}
const Service = () => {
  const { service } = useAuth();
  return (
    <>
      <div className="container-fluid">
        <div className="service-heading text-center mt-2">
          <h1>Our Service</h1>
        </div>
        <div className="col-md-10 mx-auto">
          <div className="row">
            {service.map((currEle, index) => (
              <div className="col-md-4 g-3" key={index}>
                <div style={cardStyle} className="card ">
                  <img src="homeimg.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="service text-center">
                      {currEle.service.charAt(0).toUpperCase() +
                        currEle.service.slice(1)}
                    </h5>
                    <p className="description ">{currEle.description}</p>
                    <p className="provider text-center">{currEle.provider}</p>
                    <strong className="price text-center">
                     <span className="discount">-10% </span> &#8377;{currEle.price - (10 * currEle.price) / 100}{" "}
                      &nbsp;<del>M.R.P &#8377; {currEle.price}</del>
                    </strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
