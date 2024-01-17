import React from "react";
class Tick extends React.Component {
  constructor() {
    super();
    this.state = {
      clock: new Date().toLocaleTimeString(),
    };
    console.log("chamou construtor");
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        clock: new Date().toLocaleTimeString(),
      });
    }, 5000);
    console.log("component mounted");
  }

  componentDidUpdate(props, prevState) {
    console.log("component did update", props, prevState);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
    console.log("component will unmount");
  }

  render() {
    return (
      <div>
        <h1>{this.state.clock}</h1>
      </div>
    );
  }
}

export default function LifecyclePage() {
  return (
    <div>
      <Tick />
    </div>
  );
}
