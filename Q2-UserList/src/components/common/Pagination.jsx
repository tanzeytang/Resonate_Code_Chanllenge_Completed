import React from "react";
//lodash is a javascript libarary with a lots of usefull utilites.
import _ from "lodash";
//import the PropTypes for type checking
import propTypes from "prop-types";

//scince we don't have any states or datas
//need to store in our pagination component,
//simply use a stateless functional component:
//Pagination component just for the pagination bar and related actions.
const Pagination = props => {
  const { usersCount, pageSize, currentPage, onPageChange } = props;
  //calculate the totall pages
  const pagesCount = usersCount / pageSize;

  // for creating an arrary eg. [1,.....,pageCount] we can use for loop,
  // or just use lodash libarary in javascript:
  //use lodash underscore to create an arrary in a range of your pages count
  const pages = _.range(1, pagesCount + 1);

  //when the pages only just one page maybe, and there is no need to display the page item.
  if (pagesCount <= 1) {
    return null;
  }
  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a
              href="#home"
              className="page-link"
              onClick={() => {
                onPageChange(page);
              }}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
//propTypes checking for controlling the un-proper types are passed
//to the props, because often there's no error message for reporting
// an prpos type error, so it's difficult to debug the errors,
// by this prop types check, we can avoid this error.
Pagination.propTypes = {
  usersCount: propTypes.number.isRequired,
  pageSize: propTypes.number.isRequired,
  currentPage: propTypes.number.isRequired,
  onPageChange: propTypes.func.isRequired
};

export default Pagination;
