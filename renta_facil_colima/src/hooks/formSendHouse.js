import {useState} from 'react';

const FormSendHouse = () => {
  const [isVisible, setIsVisible] = useState(true);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    console.log(isVisible);
  };

  return {
    toggleVisibility,
    isVisible,
  };
};

export default FormSendHouse;
