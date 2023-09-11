import React from "react";
import "./styles.css";

export default function App() {
  return (
    <>
      <Button
        backgroundColor="black"
        color="#f9f9f9"
        disabled={false}
        text="Click me"
      />
      <Button color="#ff0000" disabled={true} text="Don't click" />
    </>
  );
}

function Button({ backgroundColor, color, disabled, text }) {
  return (
    <button
      style={{ color: color, backgroundColor: backgroundColor }}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
