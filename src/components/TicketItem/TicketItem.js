import React from "react";
import { Link } from "react-router-dom";
import "./TicketItem.css";

const TicketItem = (props) => (
  <article className='ticket'>
    <header className='ticket__header'>
      <h3 className='ticket__meta'>Ticket: {props.id}</h3>
      <h1 className='ticket__subject'>
        {props.subject} Lorem ipsum, dolor{" "}
        <span className='new badge amber' data-badge-caption={props.type}>
          <strong>Type:</strong>
        </span>
        <span className='new badge green' data-badge-caption={props.status}>
          <strong>Status: </strong>
        </span>
        <span className='new badge red' data-badge-caption={props.priority}>
          <strong>Priority: </strong>
        </span>
      </h1>
    </header>
    <div className='ticket__body'>
      <div className='ticket__content'>
        {props.description}Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Velit odio eum sapiente sequi
      </div>
      <div className='ticket__actions'>
        <Link to='/ticket-details' onClick={() => props.viewTicket(props.id)}>
          <button className='waves-effect waves-dark btn-small' name='action'>
            View
          </button>
        </Link>
      </div>
    </div>
    {/* <footer className='ticket__footer'></footer> */}
  </article>
);

export default TicketItem;
