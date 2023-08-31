import {StyleSheet} from 'react-native';
import Colors from './Colors';

const HorizontalImagesListStyle = StyleSheet.create({
  containerImage: {
    width: 120,
    height: 120,
    margin: 5,
    borderRadius: 10,
  },
  closeButton: {
    backgroundColor: Colors.Red,
    alignSelf: 'flex-end',
    marginRight: -5,
    marginTop: -5,
  },
});

export default HorizontalImagesListStyle;
