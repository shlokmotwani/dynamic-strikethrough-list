import { useState } from "react";
import "./App.css";
import { tasks } from "./tasks";
import { ListItem } from "./ListItem";

const filterOptions = ["All", "Finished", "Pending"];

function App() {
  const [list, setList] = useState(tasks);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState(filterOptions[0]);

  function handleCheckBoxToggle(itemTitle) {
    let tempList = list.slice();
    let itemIndex = tempList.findIndex((item) => item.title == itemTitle);
    tempList[itemIndex].finished = !tempList[itemIndex].finished;
    setList(tempList);
  }

  function handleDelete(itemTitle) {
    let tempList = list.filter((item) => item.title != itemTitle);
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

  function handleFilterChange(e) {
    setFilter(e.target.value);
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <select
        name="filter-dropdown"
        id="filter-dropdown"
        onChange={handleFilterChange}
      >
        {filterOptions.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      <ul>
        {list.length == 0 && <p>No tasks to show!</p>}
        {/* filter the list based on the filter category chosen */}
        {list
          .filter((item) => {
            if (filter == "All") {
              return item;
            } else if (filter == "Pending") {
              return !item.finished;
            } else if (filter == "Finished") {
              return item.finished;
            }
          })
          // render ListItem and their respective status (checked, striked-out etc.)
          .map((item) => {
            return (
              <div key={item.title}>
                <ListItem
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
