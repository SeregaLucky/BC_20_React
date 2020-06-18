import React from 'react';

const Form = ({
  firstName,
  rools,
  radio1,
  firstNameInputId,
  handleChange,
  handleSubmit,
}) => {
  return (
    <form style={{ padding: '4px' }} onSubmit={handleSubmit}>
      <label htmlFor={firstNameInputId}>
        First name:
        <input
          type="text"
          name="firstName"
          value={firstName}
          placeholder="FirstName..."
          onChange={handleChange}
          id={firstNameInputId}
        />
      </label>

      <input
        type="checkbox"
        name="rools"
        checked={rools}
        onChange={handleChange}
      />

      <input
        type="radio"
        name="radio1"
        value={'yes'}
        checked={radio1 === 'yes'}
        onChange={handleChange}
      />
      <input
        type="radio"
        name="radio1"
        value={'no'}
        checked={radio1 === 'no'}
        onChange={handleChange}
      />

      <button type="submit">Send</button>
    </form>
  );
};

export default Form;
