import React, { Component } from "react";
import TicketList from "./components/TicketList/TicketList";
import TicketDetail from "./components/TicketDetail/TicketDetail";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tickets: {},
      ticket: {},
      canGetTickets: false,
      username: "enockscoleman@gmail.com",
      subdomain: "colenocks",
      password: "Coledesk",
    };

    //bind the function so to use in a class
    this.viewTicket = this.viewTicket.bind(this);
    this.getTickets = this.getTickets.bind(this);
    this.accessTickets = this.accessTickets.bind(this);
  }

  viewTicket(id) {
    const url = `https://${this.state.subdomain}.zendesk.com/api/v2/imports/tickets/${id}`;
    axios
      .get(url, {
        auth: {
          username: this.state.username,
          password: this.state.password,
        },
      })
      .then((res) => {
        if (res) {
          if (res.status !== 200) {
            window.M.toast({ html: "Failed to fetch status" });
          }
        }
        this.setState({ ticket: res.data.ticket });
      })
      .catch((err) => {
        window.M.toast({ html: err });
      });
  }

  accessTickets() {
    this.setState({ canGetTickets: true });
  }

  getTickets() {
    //fetch all tickets with authorization
  }

  render() {
    return (
      <React.Fragment>
        <div className='wrapper'>
          <Switch>
            <Header />
            <div className='main'>
              <Form />
              <TicketList
                ticket={this.state.ticket}
                tickets={this.state.tickets}
                viewProject={this.viewTicket}
              />
              <Route
                exact
                path='/ticket-details'
                render={() => <TicketDetail ticket={this.state.ticket} />}
              />
            </div>
            <Footer />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
