import {StyleSheet} from 'react-native';
import Colors from './Colors';
const DetailScreenStyles = StyleSheet.create({
  propietyName: {
    color: 'black',
    fontSize: 24,
    textTransform: 'uppercase',
  },
  containerInfo: {
    flexDirection: 'row',
    width: 250,
    height: 30,
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
  },
  descriptionConatiner: {
    width: 350,
    height: 180,
    marginTop: 5,
  },
  houseDescription: {
    textTransform: 'uppercase',
    color: 'black',
    fontSize: 15,
  },
  commentsContainer: {
    backgroundColor: Colors.Jade,
    height: 500,
    borderRadius: 10,
    width: '100%',
  },
});

export default DetailScreenStyles;
