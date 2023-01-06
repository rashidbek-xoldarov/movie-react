import React from "react";
import ReactPaginate from "react-paginate";

import "./Pagination.css";

const Pagination = ({ page, setActivePage }) => {
  return (
    <ReactPaginate
      className="pagination-list"
      pageLinkClassName="pagination-item"
      activeLinkClassName="active-item"
      pageCount={page}
      previousLabel=""
      onPageChange={({ selected }) => {
        setActivePage(selected + 1);
      }}
      nextLabel=""
    />
  );
};

export default Pagination;
