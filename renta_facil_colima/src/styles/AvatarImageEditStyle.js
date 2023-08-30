import {StyleSheet} from 'react-native';
import Colors from './Colors';

const AvatarImageEditStyle = StyleSheet.create({
  container: {
    width: 125,
  },
  icon: {
    backgroundColor: Colors.Malachite,
    position: 'absolute',
    top: 15,
    right: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AvatarImageEditStyle;
