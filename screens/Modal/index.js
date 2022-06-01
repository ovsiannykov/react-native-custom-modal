import React, {useState, useEffect} from 'react';
import {View, Text, Animated, TouchableOpacity, FlatList} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

import styles from './styles';
import {arrayData} from '../../data/array';

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.itemTitle}>{title}</Text>
  </View>
);

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

  const renderItem = ({item}) => <Item title={item} />;

  return (
    <GestureRecognizer style={styles.screen} onSwipeDown={closeHandler}>
      <Animated.View style={{opacity: fadeAnim, ...styles.modal}} />

      <View style={styles.modalContent}>
        <GestureRecognizer>
          <Text style={styles.title}>Modal Content</Text>
        </GestureRecognizer>
        <TouchableOpacity style={styles.closeButton} onPress={closeHandler}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>

        <View style={{width: '100%'}}>
          <FlatList data={arrayData} renderItem={renderItem} />
        </View>
      </View>
    </GestureRecognizer>
  );
};

export default Modal;
