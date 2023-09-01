import {StyleSheet} from 'react-native';
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
    backgroundColor: 'green',
    width: 375,
    height: 300,
    borderRadius: 15,
    alignItems: 'center',
  },
  commentsTitle: {
    color: 'white',
    fontSize: 15,
    textTransform: 'uppercase',
  },
});

export default DetailScreenStyles;
