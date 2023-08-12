import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

const DropDow = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Casa', value: 'casa'},
    {label: 'Departamento', value: 'departamento'},
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
  );
};
export default DropDow;
