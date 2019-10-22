import React from "react";

const Listgroups = (props) => {
  const { items, onPageList, selectedGenr } = props;
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          onClick={() => onPageList(item)}
          key={item._id}
          className={
            item === selectedGenr ? "list-group-item active" : "list-group-item"
          }>
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default Listgroups;
