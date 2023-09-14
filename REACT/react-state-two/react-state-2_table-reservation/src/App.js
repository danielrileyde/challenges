import React from "react";
import Counter from "./components/Counter";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState(0);

  function handlePeopleIncrement() {
    setPeople(people + 1);
  }
  function handlePeopleDecrement() {
    //prevent minus reservation for decrement past 0.
    setPeople(Math.max(0, people - 1));
  }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter
        onPeopleIncrement={handlePeopleIncrement}
        onPeopleDecrement={handlePeopleDecrement}
      />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
