import { useState } from "react";
import "./App.css";
import { tasks } from "./tasks";
import { ListItem } from "./ListItem";

function App() {
  const [list, setList] = useState(tasks);

  function handleCheckBoxToggle(index) {
    let tempList = list.slice();
    tempList[index].finished = !tempList[index].finished;
    setList(tempList);
  }

  function handleDelete(index){
    let tempList = list.filter((item, i) => i!=index);
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
    </div>
  );
}

export default App;
