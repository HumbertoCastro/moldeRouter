import React from "react";
import BackToHome from "./BackToHome";

class Prop extends React.Component {
  render() {
    const { objeto, onChange } = this.props;
    return (
      <div>
        <BackToHome />
        <input type="text" onChange={onChange} placeholder="name" />
        <h1>
          {
            objeto.name
          }
        </h1>
        <p>
          {
            objeto.idade
          }
        </p>
      </div>
    );
  }
}

export default Prop;