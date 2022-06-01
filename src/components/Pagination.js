import React from "react";

const Pagination = ({ page, onPrevious, onNext }) => {
  const handlePrevious = () => {
    onPrevious();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <nav>
      <ul className="pagination">
        {page !== 1 ? (
          <li className="page-item">
            <button className="page-link" onClick={handlePrevious}>
              Previous
            </button>
          </li>
        ) : null}

        <li className="page-item">
          <button className="page-link" onClick={handleNext}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
