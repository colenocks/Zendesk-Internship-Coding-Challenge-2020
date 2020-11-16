import React from "react";

const Auth = (props) => {
  return (
    <div className='col s10 offset-s1'>
      <h6 className='green-text'>
        This Zendesk Ticket Viewer uses OAuth Authentication to retrieve user
        tickets.
      </h6>
      <button
        onClick={() => props.authorizeUser()}
        className='waves-effect btn'>
        Get Access
      </button>
    </div>
  );
};

export default Auth;
