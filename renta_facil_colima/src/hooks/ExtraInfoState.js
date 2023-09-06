import * as Yup from 'yup';

const createExtraInfoSchema = () => {
  return Yup.object().shape({
    address: Yup.string().required('Address field can not be empty'),
    profilePicture: Yup.string().notRequired('Profile Picture field can not be empty'),
    birthday: Yup.date().required('Birthday field can not be empty'),
  });
};

const useExtraInfoState = () => {
  const extraInfoSchemaFormInitialValues = {
    address: '',
    profilePicture: '',
    birthday: '',
  };

  const extraInfoSchema = createExtraInfoSchema();

  return {
    extraInfoSchemaFormInitialValues,
    extraInfoSchema,
  };
};

export default useExtraInfoState;
