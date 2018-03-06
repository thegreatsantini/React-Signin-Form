import React, { Component } from "react";
import Transition from 'react-addons-css-transition-group';
import "./App.css";

const Modal = props => {
  return (
    <div className="Modal">
      <form onSubmit={props.onSubmit} className="ModalForm">
        <Input id="name" type="text" placeholder="Jack-Edward Oliver" />
        <Input id="username" type="email" placeholder="mrjackolai@gmail.com" />
        <Input id="password" type="password" placeholder="password" />
        <button>
          Log in <i className="fa fa-fw fa-chevron-right" />
        </button>
      </form>
    </div>
  );
};

const Input = props => {
  return (
    <div className="Input">
      <input
        id={props.name}
        autoComplete="false"
        required
        type={props.type}
        placeholder={props.placeholder}
      />
      <label htmlFor={props.name} />
    </div>
  );
};

class App extends Component {
  constructor() {
    super()
    this.state = {
      mounted: true
    }
  } 
  
  componentDidMount() {
    this.setState({ mounted: true });
  }

  handleSubmit(e) {
    this.setState({ mounted: false });
    e.preventDefault();
  }

  render() {
    var child;

    if (this.state.mounted) {
      child = <Modal onSubmit={this.handleSubmit} />; // handleSubmit is passed as PROP!!!!!!
    }

    return (
      <div className="App">
      <Transition
      transitionName="example"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}
    >
      {child}
      <Input />
    </Transition>
      </div>
    );
  }
}

export default App;
