import React from "react";
import { Link } from 'react-router-dom';

class BackToHome extends React.Component {
    render() {
    return(
      <div className="links">
        <Link to="/" > voltar </Link>
      </div>
    )
  }
}
export default BackToHome;