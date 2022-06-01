import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import styles from './styles';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentBox}>
        <Text style={styles.title}>App</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Modal')}>
          <Text style={styles.buttonTitle}>Open Modal</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
