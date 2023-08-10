import { StyleSheet } from 'react-native';

const ReusableMainScreenStyle = StyleSheet.create({
  mainContainer:{
    backgroundColor: '#fff',
  },
  headerContainer:{
    alignSelf: 'center',
    marginVertical: 15,
    marginHorizontal: 5,
  },
  headerText:{
    fontSize: 40,
    fontFamily: 'ConcertOne-Regular',
    color: '#000',
  },
  loadingContainer:{
    backgroundColor: '#fff',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default ReusableMainScreenStyle;