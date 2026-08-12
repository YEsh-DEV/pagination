import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getPageNumbers } from '../../utils/pagination';
import './Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const pageNumbers = getPageNumbers(currentPage, totalPages, 5);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <nav className="pagination-container" aria-label="Users Pagination Navigation">
      <button
        className="nav-btn prev-btn"
        onClick={handlePrevious}
        disabled={currentPage === 1}
        aria-label="Go to previous page"
      >
        <ChevronLeft size={18} />
        <span className="btn-label">Previous</span>
      </button>

      <div className="page-numbers-group" role="group" aria-label="Page numbers">
        {pageNumbers.map((page, index) => {
          if (page === '...') {
            return (
              <span key={`ellipsis-${index}`} className="ellipsis">
                &#8230;
              </span>
            );
          }

          const isActive = currentPage === page;
          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`page-btn ${isActive ? 'active' : ''}`}
              aria-current={isActive ? 'page' : undefined}
              aria-label={`Page ${page}`}
            >
              {page}
            </button>
          );
        })}
      </div>

      <button
        className="nav-btn next-btn"
        onClick={handleNext}
        disabled={currentPage === totalPages}
        aria-label="Go to next page"
      >
        <span className="btn-label">Next</span>
        <ChevronRight size={18} />
      </button>
    </nav>
  );
};

export default Pagination;
