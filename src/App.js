import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1> 🌏️ Far Away ✈️</h1>;
}

function Form() {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { quantity, description, packed: false, id: Date.now() };
    console.log(newItem);
    setQuantity(1);
    setDescription("");
  }
  // function hendleChangeSellect(e) {
  //   console.log(e.target.value);
  // }

  // function hendleChangeinput(e) {
  //   const inputValue = e.target.value;
  //   return setDescription(inputValue);
  // }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3> 🤔 What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <button>Add</button>
    </form>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item itemObj={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
function Item({ itemObj }) {
  return (
    <li>
      <span style={itemObj.packed ? { textDecoration: "line-through" } : {}}>
        {itemObj.quantity} {itemObj.description}
      </span>
      <button>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      💼 you have x items on your list, and you alredy packet Y (Y%)
    </footer>
  );
}
