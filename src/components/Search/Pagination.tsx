import React from 'react';

const Pagination = ({ currentPage, totalPages, setPage }) => {
  const handlePageClick = (page) => {
    setPage(page);
  };

  // Generate array of page numbers
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="w-[846px] h-[68px] mx-auto items-center justify-center mb-12 mt-6">
      <div className="flex flex-row w-[497px] h-[40px] mx-auto item-center justify-center hover:shadow-lg shadow-md bg-white rounded-[15px] border-[#E6F2E6]">
        {pages.map((page) => (
          <div
            key={page}
            className={`w-[40px] h-[40px] flex items-center justify-center border-[#E6F2E6] cursor-pointer ${
              currentPage === page ? 'bg-gray-300' : ''
            }`}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
