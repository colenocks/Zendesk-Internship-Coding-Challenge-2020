import React, { Component } from "react";

class PageNotFound extends Component {
  render() {
    return (
      <div className='container'>
        <h3>
          <i className='material-icons prefix'>sentiment_very_dissatisfied</i>
        </h3>
        <h1 className=''>404 error: page not found</h1>
        <h5>
          the requested url:{" "}
          <span className='text-red'>
            "{this.props.location.pathname}" was not found
          </span>
          {}
        </h5>
      </div>
    );
  }
}

export default PageNotFound;
