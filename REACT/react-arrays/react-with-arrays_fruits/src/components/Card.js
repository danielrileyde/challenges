import "./Card.css";

export default function Card({ name, color }) {
  return (
    <li className="card" style={{ backgroundColor: color }}>
      {name}
    </li>
  );
}
