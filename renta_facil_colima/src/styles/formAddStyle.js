import {StyleSheet} from 'react-native';

const styleForm = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  cardStyle: {
    backgroundColor: '#D9D9D9',
    width: '95%',
    marginLeft: 10,
    borderRadius: 10,
  },
  col50: {
    width: '50%',
  },
  title: {
    fontSize: 48,
    marginBottom: 40,
  },
  inputText: {
    marginLeft: 18,
    marginBottom: -12,
    fontSize: 18,
  },
  inputTextRow: {
    fontSize: 18,
    marginLeft: 8,
  },
  localError: {
    marginTop: -15,
  },
});

export default styleForm;
