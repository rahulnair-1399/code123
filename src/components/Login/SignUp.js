import React from "react";
import loginImg from "../../img/login.svg";

export class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '',Create_pw: '',Confirm_pw: '' };
    this.onSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  handleSubmit(e) {
    console.log(JSON.stringify(this.state))
    // On submit of the form, send a POST request with the data to the server.
    fetch(' /initial_signup', {
        body: JSON.stringify(this.state),
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'content-type': 'application/json'
        },
        method: 'POST',
        mode: 'cors',
        redirect: 'follow',
        referrer: 'no-referrer',
    })
        .then(function (response) {
            console.log(response);
            if (response.status === 200) {
                alert('Saved');
            } else {
                alert('Issues saving');
            }
        });
    
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Sign Up</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <form onSubmit={this.onSubmit}>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="Email" onChange = {this.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="Create_pw" placeholder="Password" onChange = {this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input type="text" name="Confirm_pw" placeholder="Password" onChange = {this.handleChange}/>
            </div>
          </div>
        
        <div className="footer">
          <button type="submit" className="btn">
            Register
          </button>
        </div>
        </form>
      </div>
      </div>
    );
  }
}