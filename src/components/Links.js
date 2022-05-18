import React from "react";
import { Link } from 'react-router-dom';

class Links extends React.Component {
  state = {
    id: 'humberto'
  }
    render() {
      const { id } = this.state;
    return(
      <div className="links">
        <Link to="/hello" >Heloo </Link>
        <Link to="/dog" >dog </Link>
        <Link to="/prop" >prop </Link>
        <Link to={`/show/${id}`}>show id</Link>
      </div>
    )
  }
}
export default Links;