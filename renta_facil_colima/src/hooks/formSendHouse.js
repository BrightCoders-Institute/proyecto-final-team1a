import {useState} from 'react';

const FormSendHouse = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [titlle, setTitle] = useState('');
  const [lcoation, setLocation] = useState('');
  const [rooms, setRooms] = useState('');
  const [Description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    console.log(isVisible);
  };

  return {
    toggleVisibility,
    setTitle,
    setLocation,
    setRooms,
    setDescription,
    setPrice,
    isVisible,
    titlle,
    lcoation,
    rooms,
    Description,
    price,
  };
};

export default FormSendHouse;
