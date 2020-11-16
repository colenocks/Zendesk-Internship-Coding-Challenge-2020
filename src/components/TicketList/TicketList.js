import React from "react";
import TicketItem from "../TicketItem/TicketItem";
import Home from "../Home/Home";
import Pagination from "./../Pagination/Pagination";
import { TicketConsumer } from "../../contextAPI/ticketApi";

const TicketList = () => {
  return (
    <TicketConsumer>
      {(value) => {
        return (
          <div className='ticket-container'>
            {value.currentTickets.length > 0 ? (
              <React.Fragment>
                <ul>
                  <li className='collection-header'>
                    <h4>All Tickets</h4>
                  </li>
                  <li>
                    {value.currentTickets.map((ticket) => (
                      <TicketItem
                        key={ticket.id}
                        ticket={ticket}
                        viewTicket={value.viewTicket}
                        truncateText={value.truncateText}
                      />
                    ))}
                  </li>
                </ul>
                <Pagination
                  ticketsPerPage={value.ticketsPerPage}
                  totalTickets={Object.keys(value.tickets).length}
                  currentPage={value.currentPage}
                  currentTickets={value.currentTickets}
                  currentPageHandler={value.currentPageHandler}
                  prevPageHandler={value.prevPageHandler}
                  nextPageHandler={value.nextPageHandler}
                />
              </React.Fragment>
            ) : (
              <Home />
            )}
          </div>
        );
      }}
    </TicketConsumer>
  );
};

export default TicketList;
