import React from "react";

const Form = () => {
  return (
    <form>
      <div className="form-group">
        <input type="text" placeholder="First Name" required />
        <input type="text" placeholder="Last Name" required />
      </div>

      <div className="form-group">
        <input type="email" placeholder="E-Mail" required />
        <input type="tel" placeholder="Contact" required />
      </div>

      <div className="form-group">
        <textarea placeholder="Message (optional)"></textarea>
      </div>

      <p className="note">
        MAIL SENDING DISABLED FOR DEMO VERSION.<br />
        GOOGLE SPREADSHEET: <a href="#">CLICK HERE</a>
      </p>

      <button type="submit">Next</button>
    </form>
  );
};

export default Form;
