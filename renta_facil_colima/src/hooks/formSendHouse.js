import {useState} from 'react';
import useAddHouse from './AddHouse';
import * as Yup from 'yup';

const FormSendHouse = () => {
  const [isVisible, setIsVisible] = useState(false);

  const formInitialValues = {
    title: '',
    description: '',
    address: '',
    latitude: '',
    longitude: '',
    rooms: '',
    bathrooms: '',
    surface: '',
    rent: '',
  };

  const formSchema = Yup.object().shape({
    title: Yup.string().required('Title field can not be empty'),
    address: Yup.string().required('Address field can not be empty'),
    latitude: Yup.string().default('0'),
    longitude: Yup.string().default('0'),
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

  const handleAddHouse = async (values, setLoading, getHouses) => {
    setLoading(true);
    await useAddHouse(values);
    await getHouses();
    setLoading(false);
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
