import React from "react";
import BackToHome from "./BackToHome";

class FetchApi extends React.Component {
  state = {
    dog: '',
    load: true,
  }

  componentDidMount() {
    this.fetchDOG();
    console.log('a')
  }

  fetchDOG = () => {
    console.log('as')
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(jsonficado => this.setState({ dog: jsonficado.message, load: false }));
  }

    render() {
      return(
        <div>
          <BackToHome />
          {
            this.state.load ? 'Loading' : <img src={ this.state.dog } alt="dog" />
          }
        </div>
      )
  }
}
export default FetchApi;