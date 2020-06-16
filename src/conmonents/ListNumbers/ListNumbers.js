import React from "react";
import styles from "./ListNumbers.module.css";

console.log(styles);

const arr = [
  {
    id: 1,
    name: "Tom",
  },
  {
    id: 2,
    name: "Vika",
  },
  {
    id: 3,
    name: "Liza",
  },
];

const ListNumbers = () => {
  return (
    <ul className={styles.list}>
      {arr.map((item) => (
        <li className={styles.item} key={item.id}>
          <h3>{item.name}</h3>
        </li>
      ))}
    </ul>
  );
};

export default ListNumbers;
