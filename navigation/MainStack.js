import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import Modal from '../screens/Modal';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Group
        screenOptions={{
          presentation: 'transparentModal',
          headerShown: false,
        }}>
        <Stack.Screen
          name="Modal"
          component={Modal}
          options={{...TransitionPresets.ModalSlideFromBottomIOS}}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default MainStack;
