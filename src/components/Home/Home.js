import React, { Component } from "react";
import { Link } from "react-router-dom";
import { TicketConsumer } from "../../contextAPI/ticketApi";
import Auth from "../Auth/Auth";
import "./Home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <TicketConsumer>
          {(value) => {
            if (value.isAuth) {
              return (
                <React.Fragment>
                  <div className='row home'>
                    <div className='col s10 offset-s1'>
                      <h6>Click to get tickets</h6>
                      <Link
                        to='/ticket-list'
                        onClick={() => value.getAllTickets()}>
                        <button className='waves-effect waves-purple btn'>
                          Get All Tickets
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col s6 offset-s3'>
                      <div className='input-field'>
                        <input
                          min='1'
                          id='TicketNumber'
                          ref={(elem) => (this.TicketNumberField = elem)}
                          type='number'
                        />
                        <label htmlFor='ticketNumber'>Ticket Number</label>
                      </div>
                      <div className=''>
                        <Link to='/ticket-details'>
                          <button
                            className='btn'
                            onClick={() =>
                              value.viewTicket(this.TicketNumberField.value)
                            }>
                            Get Ticket
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            }
            return (
              <Auth
                test={"test"}
                authorizeUser={value.authorizeUser}
                // authorizeUrl={value.authorizeUrl}
              />
            );
          }}
        </TicketConsumer>
      </React.Fragment>
    );
  }
}

export default Home;
