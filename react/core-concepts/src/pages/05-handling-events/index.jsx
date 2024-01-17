import React from "react";
class TodoList extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      text: "",
      items: [],
    };
  }

  handleForm = (event) => {
    event.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.text],
    });
  };

  handleText = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  handleRemove = (index) => {
    const newItems = [...this.state.items];
    newItems.splice(index, 1);
    this.setState({
      items: newItems,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleForm}>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleText}
          />
          <ul>
            {this.state.items.map((task, key) => (
              <li key={`task-${key}`} onClick={() => this.handleRemove(key)}>
                {task}
              </li>
            ))}
          </ul>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default function HandlingEventsPage() {
  return (
    <div>
      <h1
        onMouseOver={() => console.log("mouse is here")}
        onMouseOut={() => console.log("mouse is out")}
        onClick={() => console.log("clicked")}
      >
        Handling Events
      </h1>
      <div>
        <TodoList text="Todo list" />
      </div>
    </div>
  );
}
