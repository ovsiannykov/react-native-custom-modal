import React, {useState, useEffect} from 'react';
import {View, Text, Animated, TouchableOpacity} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

import styles from './styles';

const Modal = ({navigation}) => {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }, 100);
  }, []);

  const closeHandler = async () => {
    await Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 10,
      useNativeDriver: true,
    }).start();
    navigation.goBack();
  };

  return (
    <View s style={styles.screen}>
      <Animated.View style={{opacity: fadeAnim, ...styles.modal}} />

      <GestureRecognizer style={styles.modalContent} onSwipeDown={closeHandler}>
        <Text style={styles.title}>Modal Content</Text>
        <TouchableOpacity style={styles.closeButton} onPress={closeHandler}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </GestureRecognizer>
    </View>
  );
};

export default Modal;
