/* eslint-disable react/prop-types */

function ListItem({ item, handleCheckBoxToggle, handleDelete }) {
  return (
    <div className="list-item">
      <div>
        <input
          type="checkbox"
          onChange={() => handleCheckBoxToggle(item.title)}
          checked={item.finished}
        />
        <span className={`item-${item.finished}`}>{item.title}</span>
      </div>
      <button className="delete-btn" onClick={() => handleDelete(item.title)}>
        X
      </button>
    </div>
  );
}

export { ListItem };
