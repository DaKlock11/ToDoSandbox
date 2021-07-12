import "./styles.css";
import TodoList from "./TodoList";
function App() {
  const DATA = [
    {
      id: 1,
      title: "Clean Your Room",
      description: "Your room is a mess. Please clean it",
      dueDate: "8/1/2021"
    },
    {
      id: 2,
      title: "Buy Groceries",
      description: "You need food, fridge is empty",
      dueDate: "7/6/2021"
    },
    {
      id: 3,
      title: "Do Laundry",
      description: "Wash your clothes",
      dueDate: "7/16/2021"
    }
  ];

  return (
    <div className="App">
      <TodoList items={DATA} />
    </div>
  );
}

export default App;
