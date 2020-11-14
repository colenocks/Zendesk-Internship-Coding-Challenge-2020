import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import TicketList from "./components/TicketList/TicketList";
import TicketDetail from "./components/TicketDetail/TicketDetail";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tickets: {},
      ticket: {},
      isAuth: false,
      items_per_page: 25,
      // total_tickets: Object.keys(this.state.tickets).length,
      username: "",
      subdomain: "",
      password: "",
      adminUsername: "enockscoleman@gmail.com",
      adminSubdomain: "colenocks",
      adminPassword: "Coledesk",
    };

    //bind the function so to use in a class
    this.viewTicket = this.viewTicket.bind(this);
    this.getTickets = this.getTickets.bind(this);
    this.getAccess = this.getAccess.bind(this);
    this.getAdminTickets = this.getAdminTickets.bind(this);
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
            window.M.toast({ html: "Could not find ticket" });
          }
          return;
        }
        this.setState({ ticket: res.data.ticket });
      })
      .catch((err) => {
        window.M.toast({ html: err, displayLength: 8000 });
      });
  }

  getAccess(username, password, subdomain) {
    // const { username, password, subdomain } = this.state;
    if (username && password && subdomain) {
      this.setState({ isAuth: true, username, password, subdomain });
    }
  }

  getTickets() {
    const url = `https://${this.state.subdomain}.zendesk.com/api/v2/imports/tickets`;

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
            window.M.toast({ html: "Failed to fetch tickets" });
          }
          return;
        }
        this.setState({ tickets: res.data.tickets });
      })
      .catch((err) => {
        window.M.toast({ html: err, displayLength: 8000 });
      });
  }

  getAdminTickets() {
    const url = `https://${this.state.adminSubdomain}.zendesk.com/api/v2/imports/tickets`;

    axios
      .get(url, {
        auth: {
          username: this.state.adminUsername,
          password: this.state.adminPassword,
        },
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        if (res) {
          window.M.toast({ html: res.status });
          if (res.status !== 200) {
            window.M.toast({ html: "Failed to fetch tickets" });
          }
          return;
        }
        this.setState({ tickets: res.data.tickets });
      })
      .catch((err) => {
        window.M.toast({
          html: "Something went wrong! " + err,
          displayLength: 8000,
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        <div className='wrapper'>
          <Header />
          <div className='main'>
            <Form getAccess={this.getAccess} />
            <Switch>
              <Route
                exact
                path='/ticket-list'
                render={() => (
                  <TicketList
                    ticket={this.state.ticket}
                    tickets={this.state.tickets}
                    items_per_page={this.state.items_per_page}
                    isAuth={this.state.isAuth}
                    viewProject={this.viewTicket}
                    getAccess={this.getAccess}
                    getTickets={this.getTickets}
                    getAdminTickets={this.getAdminTickets}
                  />
                )}
              />
              <Route
                exact
                path='/ticket-details'
                render={() => <TicketDetail ticket={this.state.ticket} />}
              />
            </Switch>
          </div>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
