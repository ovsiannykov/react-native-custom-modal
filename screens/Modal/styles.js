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
    marginTop: 40,
    fontSize: 32,
    color: 'white',
    fontWeight: '800',
    marginBottom: 20,
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
  itemTitle: {
    color: 'white',
  },
  item: {
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
});
