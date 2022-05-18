import React from "react";
import BackToHome from "./BackToHome";

class ShowId extends React.Component {
  render() {
    const { match: { params: { id } } } = this.props;
    return (
      <div>
        <BackToHome />
        { id }
      </div>
    );
  }
}

export default ShowId;