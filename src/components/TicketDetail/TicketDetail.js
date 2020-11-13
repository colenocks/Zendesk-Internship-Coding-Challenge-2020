import React from "react";
import "./TicketDetail.css";

const TicketDetail = ({ ticket }) => {
  return (
    <section className='ticket-detail'>
      <h1>{ticket.subject}</h1>
      <h2>
        Requested by {ticket.requester_id} on{" "}
        {new Date(ticket.created_at).toLocaleDateString("en-US")}
      </h2>
      <div className='ticket-detail__meta'>
        <h3>Due date: {ticket.due_at}</h3>
        <h3>Status: {ticket.status}</h3>
        <h3>Priority: {ticket.priority}</h3>
        <h3>Assignee: {ticket.assignee_id}</h3>
      </div>
      <p>{ticket.description}</p>
    </section>
  );
};

export default TicketDetail;
