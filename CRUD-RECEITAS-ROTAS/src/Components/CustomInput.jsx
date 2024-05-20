import React, { useState } from 'react';

const CustomInput = ({ placeholder, value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={isFocused ? '' : placeholder}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
};

export default CustomInput;