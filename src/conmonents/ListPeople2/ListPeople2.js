import React from "react";
import styled from "styled-components";

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

const Ul = styled.ul`
  background: green;
`;

const Li = styled.li`
  background: #ccc;
  padding: 4px;
`;

const H3 = styled.h3`
  background: red;
`;

const ListPeople2 = () => (
  <Ul>
    {arr.map((item) => (
      <Li key={item.id}>
        <H3>{item.name}</H3>
      </Li>
    ))}
  </Ul>
);

export default ListPeople2;
