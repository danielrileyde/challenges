import React from "react";
import "./styles.css";
import Card from "./components/Card";
import Title from "./components/Title";
import { USERS } from "./db";

export default function App() {
  return (
    <main className="app">
      <Title text="ClientBoard" />
      <div className="app__card-grid">
        <ul>
          {USERS.map(({ id, name, roles, about }) => (
            <Card key={id} name={name} roles={roles} about={about} />
          ))}
        </ul>
      </div>
    </main>
  );
}
