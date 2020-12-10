import React from "react";

const Contact = () => (
  <div>
    <h2 className ="cheader">Contact Me</h2>
    <div className="form-container"> 
  <div className="col-md-8 main-section"> 
  
    </div>  
    <form id="contact-form">
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" />
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" aria-describedby="emailHelp" />
    </div>
    <div className="form-group1">
        <label htmlFor="message">Message</label>
        <textarea className="form-control" rows="5" ></textarea>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
</form>
 
</div>
</div>  
);

export default Contact;
