import React from "react";

import "./styles.css";
import { Message } from "./Message.jsx";

const getMessage = async () => {
  const response = await fetch("http://localhost:8080/api/v1/message");
  const data = await response.json();
  return data.message;
};

export const App = () => {
  const [message, setMessage] = React.useState("Hello World!");

  const handleClick = async () => {
    const newMessage = await getMessage();
    setMessage(newMessage);
  };

  return (
    <div className="box">
      <h1 className="heading">This is my simple App</h1>
      <p className="text">It is a simple React application.</p>
      <div>
        <button className="button" onClick={handleClick}>
          Click to get message
        </button>
      </div>
      <div>
        <Message message={message} />
      </div>
    </div>
  );
};
