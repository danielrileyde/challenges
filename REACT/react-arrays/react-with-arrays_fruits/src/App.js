import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 0,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1,
      name: "🍓 Strawberry",
      color: "Red",
    },
    {
      id: 2,
      name: "🥥 Coconut",
      color: "Brown",
    },
    {
      id: 3,
      name: "🫐 Blueberry",
      color: "Blue",
    },
    {
      id: 4,
      name: "🥝 Kiwi",
      color: "green",
    },
  ];

  return (
    <ul>
      {fruits.map(({ id, name, color }) => (
        <Card key={id} name={name} color={color} />
      ))}
    </ul>
  );

  // return (
  //   <div className="app">
  //     <Card name="🍌 banana" />
  //   </div>
  // );
}
