import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import './style.css';

function AddPersonForm(props) {
  const [person, setPerson] = useState("");

  function handleChange(e) {
    setPerson(e.target.value);
  }

  function handleSubmit(e) {
    props.handleSubmit(person);
    setPerson("");
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new contact"
        onChange={handleChange}
        value={person}
      />
      <button type="submit">Add</button>
    </form>
  );
}
function PeopleList(props) {
  const arr = props.data;
  const listItems = arr.map((val, index) => <li key={index}>{val}</li>);
  return <ul>{listItems}</ul>;
}

function ContactManager(props) {
  const [contacts, setContacts] = useState(props.data);
  
  function addPerson(name) {
    setContacts([...contacts, name]);
  }
  return (
    <div>
      <AddPersonForm handleSubmit={addPerson} />
      <PeopleList data={contacts} />
    </div>
  );
}
const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];

ReactDOM.render(
  <ContactManager data={contacts} />,
  document.getElementById("root")
);

/*
function MyList(props) {
  const arr = props.data;
  const listItems = arr.map((val, index) =>
    <li key = {index}>{val}</li>
  );
  return <ul>{listItems}</ul>;
}

const arr = ["A", "B", "C"];
const el = <MyList data={arr} />; 

ReactDOM.render(
  el, 
  document.getElementById('root')
);
*/
/*
function AddForm() {
  const [sum, setSum] = useState(0);
  const [num, setNum] = useState(0);

  function handleChange(e) {
    setNum(e.target.value);
  }

  function handleSubmit(e) {
    setSum(sum + Number(num));
    e.preventDefault();
  }

  return <form onSubmit={handleSubmit}>
  <input type="number" value={num} onChange={handleChange} />
  <input type="submit" value="Add" />
  <p> Sum is {sum} </p>
  </form>;
}

const el = <AddForm />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);
*/
/*
function Converter() {
  const [km, setKm] = useState(0);

  function handleChange(e) {
    setKm(e.target.value);
  }
  function convert(km) {
    return (km/1.609).toFixed(2);
  }

  return <div>
  <input type="text" value={km} onChange={handleChange} />
  <p> {km} km is {convert(km)} miles </p>
  </div>;
}

const el = <Converter />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);
*/
/*
function Toggle() {
  const [val, setVal] = useState("ON");
  function toggle() {
    setVal((val=="ON")?"OFF":"ON");
  }
  return <button onClick={toggle}>{val}</button>;
}

const el = <Toggle />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);
*/
/*
function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    alert("Number of clicks: " + counter);
  });

  function increment() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <p>{counter}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

const el = <Counter />;
ReactDOM.render(el, document.getElementById("root"));
*/
/*
class Counter extends React.Component {
  state = {
    counter: 0
  }
  increment = () => {
    this.setState({counter: this.state.counter+1});
  }
  componentDidUpdate() {
    alert("Number of clicks: " + this.state.counter);
  }
  render() {
    return <div>
    <p>{this.state.counter}</p>
    <button onClick={this.increment}>Increment</button>
    </div>;
  }
}

const el = <Counter />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);
*/
/*
class Counter extends React.Component {
  state = {
    counter: 0
  }
  increment = () => {
    this.setState({counter: this.state.counter+1});
  }
  componentDidMount() {
    this.setState({counter: 42});
  }
  render() {
    return <div>
    <p>{this.state.counter}</p>
    <button onClick={this.increment}>Increment</button>
    </div>;
  }
}

const el = <Counter />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);
*/
/*
function Counter() {
  const [counter, setCounter] = useState(0);
  function increment() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <p>{counter}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
ReactDOM.render(<Counter />, document.getElementById("root"));
*/
/*
function Hello() {
  const [name, setName] = useState('David');
  return <h1>Hello {name}.</h1>;
}
ReactDOM.render(<Hello />, document.getElementById("root"));
*/
/*
class Counter extends React.Component {
  state = {
    counter: 0
  };
  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };
  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
ReactDOM.render(<Counter />, document.getElementById("root"));
*/
/*
class Hello extends React.Component {
  state = {
    name: "James"
  };
  render() {
    return <h1>Hello {this.state.name}.</h1>;
  }
}
ReactDOM.render(<Hello />, document.getElementById("root"));
*/
/*
function Item(props) {
  return (
    <div className="Item">
      <b>Name:</b> {props.name} <br />
      <b>Price:</b> {props.price}
    </div>
  );
}
function App() {
  return (
    <div>
      <Item name="Cheese" price="4.99" />
      <Item name="Bread" price="1.5" />
      <Item name="Ice cream" price="24" />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root");
*/
/*
class Hello extends React.Component {
  render() {
    return <p>Hello, {this.props.name}!</p>;
  }
}
function App() {
  return (
    <div>
      <Hello name="David" />
      <Hello name="James" />
      <Hello name="Amy" />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
*/
/*
function Hello(props) {
  return <p>Hello, {props.name}!</p>;
}
function App() {
  return (
    <div>
      <Hello name="David" />
      <Hello name="James" />
      <Hello name="Amy" />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
*/
/*
class Hello extends React.Component {
  render() {
    return <h1>Hello world.</h1>;
  }
}
const el = <Hello />;
ReactDOM.render(el, document.getElementById("root"));
*/
/*
let counter = 0;
function show() {
  counter++;
  const el = <p>{counter}</p>;
  ReactDOM.render(el, document.getElementById("root"));
}

setInterval(show, 1000);
*/
