import React, { Component } from "react";
import axios from "axios";

//ENV VARIABLES
const { REACT_APP_OAUTH_TOKEN } = process.env;

const TicketContext = React.createContext();
class TicketProvider extends Component {
  state = {
    tickets: [],
    ticket: [],
    ticketsPerPage: 25,
    currentTickets: [],
    currentPage: 1,
    isAuth: false,
    errorType: "",
    errorDesc: "",
    access_token: "",
  };

  toast = (msg) => {
    window.M.toast({ html: msg, displayLength: 8000 });
  };

  viewTicket = (id) => {
    const ticket = this.state.tickets.find((ticket) => {
      return ticket.id === id;
    });
    this.setState({ ticket });
    console.log(ticket);
  };

  currentPageHandler = (num) => {
    this.setState({
      currentPage: num,
    });
  };

  nextPageHandler = () => {
    let currentPage = this.state.currentPage;
    currentPage++;
    this.setState({
      currentPage,
    });
  };

  prevPageHandler = () => {
    let currentPage = this.state.currentPage;
    currentPage--;
    this.setState({
      currentPage,
    });
  };

  currentTicketsHandler = () => {
    const { currentPage, ticketsPerPage, tickets } = this.state;
    const indexOfLastTicket = currentPage * ticketsPerPage;
    const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;
    const currentTickets = tickets.slice(indexOfFirstTicket, indexOfLastTicket);
    this.setState({ currentTickets });
  };

  authorizeUser = () => {
    const url = "https://colenocks.zendesk.com/oauth/authorizations/new";

    axios
      .get(url, {
        params: {
          response_type: "code",
          redirect_uri: "http://localhost:3000",
          client_id: "cole_zentickets",
          scope: "read write",
        },
      })
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        console.log("authorized");
        if (res.data.error) {
          this.setState({
            errorType: res.data.error,
            errorDesc: res.data.error_description,
          });
          return;
        }
        this.setState({ isAuth: true });
        //Call Get token
        this.getAuthToken(res.data.code);
      })
      .catch((err) => {
        this.toast(err);
      });
  };

  getAuthToken = (access_code) => {
    if (this.isAuth) {
      const url = "https://colenocks.zendesk.com/oauth/tokens";
      const params = {
        grant_type: "authorization_code",
        code: access_code,
        client_id: "cole_zentickets",
        client_secret: REACT_APP_OAUTH_TOKEN,
        redirect_uri: "http://localhost:3000",
        scope: "read",
      };
      axios
        .post(url, params)
        .then((res) => {
          console.log(res);
          if (res.status === "ok") {
            //set access token to make API calls
            this.setState({
              access_token: res.data.access_token,
            });
          }
        })
        .catch((err) => {
          this.toast(err);
        });
    } else {
      this.toast("Not Authorized");
    }
  };

  getTicket = (ticketId) => {
    const url = `https://colenocks.zendesk.com/api/v2/imports/tickets/${ticketId}`;
    axios
      .get(url, {
        headers: {
          Authorization: "Bearer " + this.state.access_token,
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
        this.toast(err);
      });
  };

  getAllTickets = () => {
    if (this.state.access_token) {
      const url = "https://colenocks.zendesk.com/api/v2/imports/tickets";
      axios
        .get(url, {
          headers: {
            Authorization: "Bearer " + this.state.access_token,
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
          this.currentTicketsHandler();
        })
        .catch((err) => {
          this.toast(err);
        });
    } else {
      this.toast("Not Authorized");
    }
  };

  truncateText = (text) => {
    let words = text.split(" ");
    return words.length > 70 ? words.join(" ").substring(0, 70) + "..." : text;
  };

  render() {
    return (
      <TicketContext.Provider
        value={{
          tickets: this.state.tickets,
          ticket: this.state.ticket,
          ticketsPerPage: this.state.ticketsPerPage,
          currentTickets: this.state.currentTickets,
          currentPage: this.state.currentPage,
          isAuth: this.state.isAuth,
          viewTicket: this.viewTicket,
          getAllTickets: this.getAllTickets,
          getTicket: this.getTicket,
          currentPageHandler: this.currentPageHandler,
          currentTicketsHandler: this.currentTicketsHandler,
          prevPageHandler: this.prevPageHandler,
          nextPageHandler: this.nextPageHandler,
          truncateText: this.truncateText,
          authorizeUser: this.authorizeUser,
        }}>
        {this.props.children}
      </TicketContext.Provider>
    );
  }
}

const TicketConsumer = TicketContext.Consumer;

export { TicketProvider, TicketConsumer };
