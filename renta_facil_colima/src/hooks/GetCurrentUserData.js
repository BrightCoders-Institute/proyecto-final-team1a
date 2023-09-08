import GetCurrentUser from './GetCurrentUser';
import GetDataFromFirebase from './GetDataFromFirebase';

const GetCurrentUserData = async () => {
  const {GetDocumentFromCollection} = GetDataFromFirebase();
  const user = GetCurrentUser();
  const userData = await GetDocumentFromCollection('UserExtraInfo', user.uid);
  if (userData) {
    return userData;
  }
  return null;
};

export default GetCurrentUserData;
