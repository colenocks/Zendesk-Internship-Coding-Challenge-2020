import React from "react";
import TicketItem from "../TicketItem/TicketItem";
import { Link } from "react-router-dom";

const TicketList = (props) => {
  return (
    <div className='ticket-container'>
      {props.isAuth ? (
        <React.Fragment>
          <div className='col s4 offset-s1'>
            <button
              className='waves-effect waves-purple btn'
              onClick={() => props.getTickets()}>
              Show Tickets
            </button>
          </div>
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
        </React.Fragment>
      ) : (
        <div>
          <h6>
            Sign in to get your tickets or{" "}
            <span>
              <Link to='/ticket-list' onClick={() => props.getAdminTickets()}>
                view my tickets
              </Link>
            </span>
          </h6>
        </div>
      )}
    </div>
  );
};

export default TicketList;
