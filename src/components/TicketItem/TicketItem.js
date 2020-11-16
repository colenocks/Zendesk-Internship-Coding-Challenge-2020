import React from "react";
import { Link } from "react-router-dom";
import "./TicketItem.css";

const TicketItem = (props) => {
  return (
    <article className='ticket'>
      <header>
        <h3 className='ticket__meta'>
          <span
            className='new badge amber'
            data-badge-caption={props.ticket.type}>
            <strong>Type:</strong>
          </span>
          <span
            className='new badge green'
            data-badge-caption={props.ticket.status}>
            <strong>Status: </strong>
          </span>
          <span
            className='new badge red'
            data-badge-caption={props.ticket.priority}>
            <strong>Priority: </strong>
          </span>
        </h3>
      </header>
      <h1 className='ticket__subject'>
        #{props.ticket.id}- {props.ticket.subject}
      </h1>
      <hr />
      <div className='ticket__body'>
        <div className='ticket__content'>
          {props.truncateText(props.ticket.description)}
        </div>
        <div className='ticket__actions'>
          <Link to='/ticket-details'>
            <button
              onClick={() => {
                props.viewTicket(props.ticket.id);
              }}
              className='waves-effect waves-dark btn-small'
              name='action'>
              View
            </button>
          </Link>
        </div>
      </div>
      {/* <footer className='ticket__footer'></footer> */}
    </article>
  );
};

export default TicketItem;
