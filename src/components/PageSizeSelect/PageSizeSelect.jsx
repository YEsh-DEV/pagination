import React from 'react';
import { LayoutGrid, ChevronDown } from 'lucide-react';
import './PageSizeSelect.css';

const PageSizeSelect = ({ pageSize, setPageSize }) => {
  return (
    <div className="page-size-container">
      <label htmlFor="page-size-select" className="page-size-label">
        <LayoutGrid size={15} /> Show per page:
      </label>
      <div className="page-size-custom-select">
        <select
          id="page-size-select"
          className="page-size-select"
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
          aria-label="Users displayed per page"
        >
          <option value={10}>10 Users</option>
          <option value={20}>20 Users</option>
          <option value={50}>50 Users</option>
        </select>
        <ChevronDown size={15} className="select-chevron" />
      </div>
    </div>
  );
};

export default PageSizeSelect;
