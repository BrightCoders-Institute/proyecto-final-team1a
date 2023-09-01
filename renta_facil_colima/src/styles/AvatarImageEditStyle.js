import {StyleSheet} from 'react-native';
import Colors from './Colors';

const AvatarImageEditStyle = StyleSheet.create({
  container: {
    width: 125,
  },
  iconContainer: {
    backgroundColor: Colors.White,
    position: 'absolute',
    height: 30,
    width: 30,
    top: 15,
    right: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    backgroundColor: Colors.Malachite,
    borderRadius: 10,
  }
});

export default AvatarImageEditStyle;
