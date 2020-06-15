import React from 'react';
import T from 'prop-types';
import styles from './UsersItem.module.css';

const UsersItem = ({ item, title, children }) => {
  // console.log(item);
  // console.log('item', children);

  return (
    <li className={styles.item}>
      <h3>{title}</h3>
      {/* <p>Name: {item.name}</p> */}
      <p>Name: {item.name ? item.name : 'Amanim'}</p>
      <p>isActive: {item.isActive ? 'Yes' : 'No'}</p>

      {item.cars.length > 0 && (
        <ul className={item.isActive ? styles.listCarsActive : ''}>
          {item.cars.map(car => (
            <li key={car}>{car}</li>
          ))}
        </ul>
      )}
    </li>
  );
};

UsersItem.propTypes = {
  title: T.string.isRequired,
  item: T.shape({
    name: T.string,
    isActive: T.bool.isRequired,
  }),
};

export default UsersItem;

//
//
//
//

// import React from "react";

// const UsersItem = ({ item }) => (
//   <li>
//     <p>Name: {item.name}</p>
//     <p>isActive: {item.isActive ? "Yes" : "No"}</p>

//     <ul>
//       {item.cars.map((car) => (
//         <li key={car}>{car}</li>
//       ))}
//     </ul>
//   </li>
// );

// export default UsersItem;
