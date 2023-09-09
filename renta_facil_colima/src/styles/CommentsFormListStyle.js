import {StyleSheet} from 'react-native';

const CommentsFormListStyle = StyleSheet.create({
  label: {
    fontSize: 24,
  },
  buttonAdd: {
    position: 'absolute',
    right: 35,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  input: {
    backgroundColor: '#fff',
  },
  cardActions: {
    justifyContent: 'space-between',
  },
  cardButtons: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 10,
    width: 80,
  },
});

export default CommentsFormListStyle;
