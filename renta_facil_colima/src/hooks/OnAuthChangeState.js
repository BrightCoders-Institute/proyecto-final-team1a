import {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';

function OnAuthStateChanged() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  };

  if (initializing) {
    return null;
  }
  if (!user) {
    return 'No hay usuario';
  }
  return user;
}
export default OnAuthStateChanged;