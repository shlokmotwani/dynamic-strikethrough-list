/* eslint-disable react/prop-types */

function ListItem({index, item, handleCheckBoxToggle}) {
 return <div className="list-item">
    {item.finished && (
    <>
      <input
        type="checkbox"
        onChange={() => handleCheckBoxToggle(index)}
        checked
      />
      <del>{item.title}</del>
    </>
    )}
    {!item.finished && (
    <>
      <input type="checkbox" onChange={() => handleCheckBoxToggle(index)} />
      {item.title}
    </>
    )}
  </div>
}

export { ListItem }
