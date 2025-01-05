import { useState } from "react";
import "./App.css";
import { tasks } from "./tasks";
import { ListItem } from "./ListItem";

function App() {
  const [list, setList] = useState(tasks);
  const [input, setInput] = useState("");

  function handleCheckBoxToggle(index) {
    let tempList = list.slice();
    tempList[index].finished = !tempList[index].finished;
    setList(tempList);
  }

  function handleDelete(index) {
    let tempList = list.filter((item, i) => i != index);
    setList(tempList);
  }

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  function handleAdd() {
    let tempList = [
      ...list,
      {
        title: input,
        finished: false,
      },
    ];
    setList(tempList);
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <ul>
        {list.map((item, index) => {
          return (
            <div key={index}>
              <ListItem
                index={index}
                item={item}
                handleCheckBoxToggle={handleCheckBoxToggle}
                handleDelete={handleDelete}
              />
            </div>
          );
        })}
      </ul>
      <div>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              handleAdd();
              setInput("");
            }
          }}
        />
        <button onClick={handleAdd}>Add Task</button>
      </div>
    </div>
  );
}

export default App;
