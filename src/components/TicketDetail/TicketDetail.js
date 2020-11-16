import React from "react";
import { Link } from "react-router-dom";
import { TicketConsumer } from "../../contextAPI/ticketApi";
import "./TicketDetail.css";

const TicketDetail = () => {
  return (
    <TicketConsumer>
      {(value) => {
        return value.ticket ? (
          <section className='ticket-detail'>
            <Link to='/ticket-list'>back to tickets</Link>
            <h2>
              #{value.ticket.id}-{value.ticket.subject}
            </h2>
            <h3>
              Requested by {value.ticket.requester_id} on{" "}
              {new Date(value.ticket.created_at).toDateString("en-us")}
            </h3>
            <div className='ticket-detail__meta'>
              <h6>
                Due date:{" "}
                {value.ticket.due_at ? value.ticket.due_at : "No date"}
              </h6>
              <h6>Status: {value.ticket.status}</h6>
              <h6>Priority: {value.ticket.priority}</h6>
              <h6>Assignee: {value.ticket.assignee_id}</h6>
            </div>
            <p className='ticket-detail__desc'>{value.ticket.description}</p>
          </section>
        ) : (
          <section className='ticket-detail'>
            <h5 className='red-text'>"Could not get Ticket"</h5>
            <Link to='/ticket-list'>back to tickets</Link>
          </section>
        );
      }}
    </TicketConsumer>
  );
};

export default TicketDetail;
