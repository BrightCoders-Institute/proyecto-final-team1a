import CreateUser from './CreateUser';
import * as Yup from 'yup';

const ExtraInfoState = () => {
  const extraInfoSchemaFormInitialValues = {
    
    address: '',
    houseNumber: '',
    profilePicture: '',
    username: '',
    birthday: '',
  };

  const extraInfoSchema = Yup.object().shape({

    address: Yup.string().required('Address field can not be empty'),
    houseNumber: Yup.string().required('House Number field can not be empty'),
    profilePicture: Yup.string().required('Profile Picture field can not be empty'),
    username: Yup.string().required('User name field can not be empty'),
    birthday: Yup.string().required('Birthday field can not be empty'),

  });



  return {
    extraInfoSchemaFormInitialValues,
    extraInfoSchema,
  };
};

export default ExtraInfoState;