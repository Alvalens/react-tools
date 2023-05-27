import React from "react";

class Footer extends React.Component {

  render() {
    return (
      <footer className="footer">
        <p>halo {this.props.var() }</p>
      </footer>
    );
  }
}
export default Footer;