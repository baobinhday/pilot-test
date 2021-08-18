import React, { useEffect, useState } from 'react';
import Select from '@material-ui/core/Select';

const Dropdown = (props) => {
  const [value, setValue] = useState(props.value);

  const handleChange = (e) => {
    setValue(e.target.value);
    if (props.onChange) {
      props.onChange(e.target.value);
    }
  };

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  return (
    <Select value={value} onChange={handleChange} className={props.classExt}>
      {props.listItems.map((item) => (
        <option key={item.id} value={item.value}>
          {item.text}
        </option>
      ))}
    </Select>
  );
};

Dropdown.defaultProps = {
  listItems: [],
  value: '',
  onChange: null,
  classExt: '',
};
export default Dropdown;
