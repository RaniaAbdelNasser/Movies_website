import React from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  //array for num of pages
  const pages = _.range(1, pageCount + 1);
  console.log(currentPage);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            className={page === currentPage ? "page-item active" : "page-item"}
            key={page}>
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
//to know if there are any error in data === to show in console (to catch bugs)
//  Pagination.PropTypes = {

//     itemsCount : PropTypes.number.isRequired,
//     pageSize: PropTypes.number.isRequired,
//     currentPage: PropTypes.number.isRequired,
//     onPageChange : PropTypes.func.isRequired

//  };
export default Pagination;
