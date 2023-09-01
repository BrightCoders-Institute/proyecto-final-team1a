import {useState} from 'react';
import useAddHouse from './AddHouse';
import * as Yup from 'yup';

const FormSendHouse = () => {
  const [isVisible, setIsVisible] = useState(false);

  const formInitialValues = {
    title: '',
    description: '',
    address: '',
    rooms: '',
    bathrooms: '',
    surface: '',
    rent: '',
  };

  const formSchema = Yup.object().shape({
    title: Yup.string().required('Title field can not be empty'),
    address: Yup.string().required('Location field can not be empty'),
    rooms: Yup.number()
      .positive()
      .integer()
      .required('Rooms field can not be empty'),
    bathrooms: Yup.number()
      .positive()
      .integer()
      .required('Bathrooms field can not be empty'),
    description: Yup.string().required('Description field can not be empty'),
    surface: Yup.number().positive().required('Surface field can not be empty'),
    rent: Yup.number().positive().required('Price field can not be empty'),
  });

  const openHouseForm = () => {
    setIsVisible(true);
  };

  const closeHouseForm = () => {
    setIsVisible(false);
  };

  const handleAddHouse = async ({
    title,
    description,
    address,
    rooms,
    bathrooms,
    surface,
    rent,
  }) => {
    await useAddHouse(title, address, rooms, bathrooms, surface, rent);
  };

  return {
    openHouseForm,
    isVisible,
    closeHouseForm,
    formSchema,
    formInitialValues,
    handleAddHouse,
  };
};

export default FormSendHouse;
