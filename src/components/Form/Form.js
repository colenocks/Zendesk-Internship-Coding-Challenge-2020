import React, { Component } from "react";
import { Link } from "react-router-dom";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='row'>
        <h6>
          This Zendesk Ticket Viewer uses Basic Authentication to retrieve user
          tickets.
        </h6>
        <form className='col m8 offset-m2 container'>
          <div className='input-field'>
            <i className='material-icons prefix'>account_circle</i>
            <input
              id='username'
              ref={(elem) => (this.usernameField = elem)}
              type='text'
            />
            <label htmlFor='username'>Username</label>
          </div>
          <div className='input-field'>
            <i className='material-icons prefix'>vpn_key</i>
            <input
              id='password'
              ref={(elem) => (this.passwordField = elem)}
              type='password'
            />
            <label htmlFor='password'>Password</label>
          </div>
          <div className='input-field'>
            <i className='material-icons prefix'>vpn_key</i>
            <input
              id='subdomain'
              ref={(elem) => (this.subdomainField = elem)}
              type='text'
            />
            <label htmlFor='subdomain'>Subdomain</label>
            <span className='helper-text'>
              <strong>{"your subdomain"}.zendesk.com</strong>
            </span>
          </div>
          <div className='col s4 offset-s1'>
            <Link to='/ticket-list'>
              <button
                className='btn'
                onClick={() =>
                  this.props.getAccess(
                    this.usernameField.value,
                    this.passwordField.value,
                    this.subdomainField.value
                  )
                }>
                Access
              </button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
