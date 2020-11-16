import React from "react";

const Pagination = (props) => {
  const {
    ticketsPerPage,
    totalTickets,
    currentPage,
    currentPageHandler,
    prevPageHandler,
    nextPageHandler,
  } = props;

  const pageNumbers = [];
  const pages = Math.ceil(totalTickets / ticketsPerPage);
  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className='pagination'>
      <li
        onClick={currentPage === 1 ? () => {} : () => prevPageHandler()}
        className={currentPage === 1 ? "disabled" : "waves-effect"}>
        <a href='#!'>
          <i className='material-icons'>chevron_left</i>
        </a>
      </li>
      {pageNumbers.map((num) => {
        return (
          <li
            key={num}
            className={num === currentPage ? "active" : ""}
            id={num}
            onClick={() => currentPageHandler(num)}>
            <a href={"#!"}>{num}</a>
          </li>
        );
      })}
      <li
        onClick={
          currentPage === pages && pages === pageNumbers[pages - 1]
            ? () => {}
            : () => nextPageHandler()
        }
        className={currentPage === pages ? "disabled" : "waves-effect"}>
        <a href='#!'>
          <i className='material-icons'>chevron_right</i>
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
