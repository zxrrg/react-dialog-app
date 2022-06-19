import React from "react";
import { useModal } from "./context/modal-context";
import logo from "./logo.svg";
import "./App.css";
import Button from "./commons/Button";
import { Store } from 'react-notifications-component';

function App() {
  const { setModal } = useModal();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button
          color="green"
          name="SHOW NOTIFICATION"
          size="medium"
          onClick={() => {
            Store.addNotification({
              title: "",
              message: "This message closes itself in 3 seconds.",
              type: "info",
              insert: "top",
              container: "top-center",
              animationIn: ["animate__animated", "animate__fadeIn"],
              animationOut: ["animate__animated", "animate__fadeOut"],
              dismiss: {
                duration: 3000,
                onScreen: true
              }
            });
          }}
        />
        <Button
          color="blue"
          name="SHOW DIALOG"
          size="medium"
          onClick={() => {
            setModal(
              <h1 className="h1">This message closes itself in 3 seconds.</h1>
            );
          }}
        />
      </header>
    </div>
  );
}

export default App;
