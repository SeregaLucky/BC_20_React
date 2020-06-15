import React from 'react';

const ListCats = ({ catsList, width, alt }) => {
  return (
    <ul>
      {catsList.map(item => (
        <li key={item.id}>
          <h3>{item.name}</h3>
          {/* <img style={{ width: width }} src={item.img} alt="" /> */}
          <img style={{ width: '200px' }} src={item.img} alt={alt} />
        </li>
      ))}
    </ul>
  );
};

ListCats.defaultProps = {
  alt: 'cat',
};

export default ListCats;
