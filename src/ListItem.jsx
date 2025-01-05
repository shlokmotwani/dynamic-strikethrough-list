/* eslint-disable react/prop-types */

function ListItem({index, item, handleCheckBoxToggle, handleDelete}) {
 return <div className="list-item">
    {item.finished && (
    <>
      <div>
          <input
            type="checkbox"
            onChange={() => handleCheckBoxToggle(index)}
            checked
          />
          <del>{item.title}</del>
      </div>
      <button className="delete-btn" onClick={()=>handleDelete(item.title)}>X</button>
    </>
    )}
    {!item.finished && (
    <>
      <div>
          <input type="checkbox" onChange={() => handleCheckBoxToggle(index)} />
          {item.title}
      </div>
      <button className="delete-btn" onClick={()=>handleDelete(item.title)}>X</button>
    </>
    )}
  </div>
}

export { ListItem }
