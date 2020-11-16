import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import TicketList from "./components/TicketList/TicketList";
import TicketDetail from "./components/TicketDetail/TicketDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Header />
        <div className='main'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/ticket-list' component={TicketList} />
            <Route exact path='/ticket-details' component={TicketDetail} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
