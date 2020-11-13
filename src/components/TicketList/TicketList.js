import React from "react";
import TicketItem from "../TicketItem/TicketItem";

const TicketList = (props) => {
  return (
    <div className='ticket-container'>
      <button className='btn' onClick={() => props.accessTickets()}>
        Show Tickets
      </button>

      {props.canGetTickets ? (
        <ul>
          <li className='collection-header'>
            <h4>All Tickets</h4>
          </li>
          <li>
            {props.tickets.map((ticket) => (
              <TicketItem ticket={ticket} viewProject={props.viewProject} />
            ))}
          </li>
        </ul>
      ) : (
        <h3>Click ☝🏻 to get all tickets </h3>
      )}
    </div>
  );
};

export default TicketList;
