import React from "react";
import { useSelector } from "react-redux";

const OfferDetails = () => {
  const { selectedData } = useSelector((state) => state.offers); // Adjust state to your offers slice
  
  return (
    <div className="details user-detail">
      <div className="d-flex align-items-center mb-3">
        <p><b>Offer Name: </b></p>
        <p className="ms-2">{selectedData?.name || "-"}</p>
      </div>
      
      <div className="d-flex align-items-center mb-3">
        <p><b>Price: </b></p>
        <p className="ms-2">${selectedData?.price || "-"}</p>
      </div>

      <div className="d-flex align-items-center mb-3">
        <p><b>Duration (Days): </b></p>
        <p className="ms-2">{selectedData?.durationInDays || "-"}</p>
      </div>

      {/* <div className="d-flex align-items-center mb-3">
        <p><b>Trial Available: </b></p>
        <p className="ms-2">{selectedData?.trialAvailable ? "Yes" : "No"}</p>
      </div> */}

      <div className="mb-3">
        <p><b>Features: </b></p>
        <ol>
          {selectedData?.features?.length > 0 ? (
            selectedData.features.map((feature, index) => (
              <li key={index} className="mb-2">
                {feature}
              </li>
            ))
          ) : (
            <p>No features available.</p>
          )}
        </ol>
      </div>

      <div className="d-flex align-items-center mb-3">
        <p><b>Offer Description: </b></p>
        <p className="ms-2">{selectedData?.description || "-"}</p>
      </div>
      
    </div>
  );
};

export default OfferDetails;
