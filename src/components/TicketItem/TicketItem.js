import React from "react";
import { Link } from "react-router-dom";
import "./TicketItem.css";

const TicketItem = (props) => (
  <article className='ticket'>
    <header className='ticket__header'>
      <h3 className='ticket__meta'>Ticket: {props.ticket.id}</h3>
      <h1 className='ticket__subject'>
        {props.ticket.subject} Lorem ipsum, dolor{" "}
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
      </h1>
    </header>
    <div className='ticket__body'>
      <div className='ticket__content'>
        {props.ticket.description}Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Velit odio eum sapiente sequi
      </div>
      <div className='ticket__actions'>
        <Link
          to='/ticket-details'
          onClick={() => props.ticket.viewTicket(props.ticket.id)}>
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
