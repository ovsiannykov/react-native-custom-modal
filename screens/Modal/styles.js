import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  screen: {
    flex: 1,
  },
  modal: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#40404040',
  },
  modalContent: {
    height: '50%',
    backgroundColor: 'blue',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  title: {
    marginTop: 100,
    fontSize: 32,
    color: 'white',
    fontWeight: '800',
    marginBottom: 60,
  },
  closeButton: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  closeButtonText: {
    color: 'blue',
    fontSize: 16,
    fontWeight: '700',
  },
});
