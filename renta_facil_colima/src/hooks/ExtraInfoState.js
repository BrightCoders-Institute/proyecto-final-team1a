import * as Yup from 'yup';

const fechaMinima = Date.now() - 568024668000

const createExtraInfoSchema = () => {
  return Yup.object().shape({
    address: Yup.string().required('Address field can not be empty'),
    profilePicture: Yup.string().required(
      'Profile Picture field can not be empty',
    ),
    birthday: Yup.date().required('Birthday field can not be empty').max(new Date( fechaMinima),'The minimum age is 18 years' ),



  });
};

const useExtraInfoState = () => {
  const extraInfoSchemaFormInitialValues = {
    address: '',
    profilePicture: '',
    birthday: new Date(),
  };

  const extraInfoSchema = createExtraInfoSchema();
  console.log((new Date((fechaMinima) )))
  return {
    extraInfoSchemaFormInitialValues,
    extraInfoSchema,
  };
};

export default useExtraInfoState;
